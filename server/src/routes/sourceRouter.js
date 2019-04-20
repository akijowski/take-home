import {Router} from 'restify-router';
import {getConnector} from '../connector';
import SourceRepository from '../repository/sourceRepository';
import {validateSource} from '../validator/sourceValidator';
import uuidv1 from 'uuid/v1';
import moment from 'moment';

let conn = getConnector();
let sourceRepo = new SourceRepository(conn);

let routerInstance = new Router();

const respondWithError = (err, res, next) => {
  console.error(err);
  res.json(500);
  next();
}

const respondWithSource = (row, id, res, next) => {
  if (row) {
    res.json(row);
    next();
  } else {
    res.json(404, {message: `source with id ${id} was not found`});
    next();
  }
}

const respondWithNewSource = (row, id, res, next) => {
  if (row) {
    res.json(201, row, {Location: `/source/${id}`});
    next();
  } else {
    res.json(404, {message: `source with id ${id} was not found`});
    next();
  }
}

routerInstance.post('/source', (req, res, next) => {
  let id = uuidv1();
  let newSource = {id, ...req.body};
  let validResult = validateSource(newSource);
  if (!validResult.isValid) {
    res.json(400, {message: validResult.errorMessage});
    next();
  } else {
    sourceRepo.createSource(newSource)
    .then(() => {
      sourceRepo.getSourceById(id)
      .then(row => {
        respondWithNewSource(row, id, res, next);
      })
      .catch(err => {
        respondWithError(err, res, next);
      });
    })
    .catch(err => {
      respondWithError(err, res, next);
    });
  }
});

routerInstance.get('/source', (req, res, next) => {
  sourceRepo.getAllSources()
  .then(rows => {
    res.json(rows);
    next();
  })
  .catch(err => {
    respondWithError(err, res, next);
  });
});

routerInstance.get('/source/:id', (req, res, next) => {
  let {params: {id}} = req;
  sourceRepo.getSourceById(id)
  .then(row => {
    respondWithSource(row, id, res, next);
  })
  .catch(err => {
    respondWithError(err, res, next);
  });
});

routerInstance.put('/source/:id', (req, res, next) => {
  let {params: {id}} = req;
  let updated_at = moment().format('YYYY-MM-DD HH:mm:ss');
  let newSource = {id, updated_at, ...req.body};
  let validResult = validateSource(newSource);
  if (!validResult.isValid) {
    res.json(400, {message: validResult.errorMessage});
    next();
  } else {
    sourceRepo.updateSource(newSource)
    .then(() => {
      sourceRepo.getSourceById(id)
      .then(row => {
        respondWithSource(row, id, res, next);
      })
      .catch(err => {
        respondWithError(err, res, next);
      });
    })
    .catch(err => {
      respondWithError(err, res, next);
    });
  }
});

routerInstance.del('/source/:id', (req, res, next) => {
  sourceRepo.deleteSource(req.params.id)
  .then(() => {
    res.json(204);
    next();
  })
  .catch(err => {
    respondWithError(err, res, next);
  });
});

export default routerInstance;
