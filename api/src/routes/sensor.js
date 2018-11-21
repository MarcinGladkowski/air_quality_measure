import { Router }  from 'express';
import sensorController from '../controllers/sensorController';
import multer from 'multer';
import { catchAsync } from '../middlewares/errors';
import { checkServer } from '../auth/auth';

export default () => {
  const api = Router();
  const upload = multer();

  // POST api/sensor
  api.post('/', checkServer, upload.fields([]), catchAsync(sensorController.create));
  // GET api/sensor
  api.get('/', sensorController.list);

  return api;
}
