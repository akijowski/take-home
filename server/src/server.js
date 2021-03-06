import restify from 'restify';
import corsMiddleware from 'restify-cors-middleware';
import sourceRouter from './routes/sourceRouter';
import messageRouter from './routes/messageRouter';

let server = restify.createServer();
const cors = corsMiddleware({
  origins: ['*'],
  allowHeaders: ['*'],
  exposeHeaders: ['*']
});
server.pre(cors.preflight);
server.use(restify.plugins.bodyParser());
server.use(cors.actual);

server.get('/health', (req, res, next) => {
  res.json({message: 'Up'});
  next();
});

sourceRouter.applyRoutes(server);
messageRouter.applyRoutes(server);

server.listen('8888','127.0.0.1', () => {
  console.log(`${server.name} listening on port ${server.url}`);
});

process.on('SIGINT', () => {
  console.log('shutting down server');
  server.close();
});
