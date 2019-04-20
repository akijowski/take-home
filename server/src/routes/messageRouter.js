import {Router} from 'restify-router';
import {getConnector} from '../connector';
import MessageRepository from '../repository/messageRepository';

let conn = getConnector();
let messageRepo = new MessageRepository(conn);

let routerInstance = new Router();

const respondWithError = (err, res, next) => {
  console.error(err);
  res.json(500);
  next();
}

const respondWithMessage = (row, id, res, next) => {
  if (row) {
    res.json(row);
    next();
  } else {
    res.json(404, {message: `message with id ${id} was not found`});
    next();
  }
}

routerInstance.get('/message', (req, res, next) => {
  messageRepo.getAllMessages()
  .then(rows => {
    res.json(rows);
    next();
  })
  .catch(err => {
    respondWithError(err, res, next);
  });
});

routerInstance.get('/message/:id', (req, res, next) => {
  let {params: {id}} = req;
  messageRepo.getMessageById(id)
  .then(row => {
    respondWithMessage(row, id, res, next);
  })
  .catch(err => {
    respondWithError(err, res, next);
  });
});

routerInstance.get('/source/:sid/message', (req, res, next) => {
  let {params: {sid}} = req;
  messageRepo.getAllMessagesBySourceId(sid)
  .then(rows => {
    res.json(rows);
    next();
  })
  .catch(err => {
    respondWithError(err, res, next);
  });
});

export default routerInstance;
