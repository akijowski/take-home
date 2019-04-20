import restify from 'restify';
import sourceRouter from './routes/sourceRouter';

let server = restify.createServer();
server.use(restify.plugins.bodyParser());

server.get('/health', (req, res, next) => {
  res.json({message: 'Up'});
  next();
});

sourceRouter.applyRoutes(server);

server.listen('8888','127.0.0.1', () => {
  console.log(`${server.name} listening on port ${server.url}`);
});

process.on('SIGINT', () => {
  console.log('shutting down server');
  server.close();
});
