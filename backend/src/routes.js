import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import StoriesController from './app/controllers/StoriesController';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/stories', multer(multerConfig).single('image'), StoriesController.store);
routes.delete('/stories/:_id', StoriesController.delete);
routes.get('/stories', StoriesController.index);
routes.get('/users', UserController.index);
routes.get('/users/:_id', UserController.show);

export default routes;