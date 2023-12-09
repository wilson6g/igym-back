import express from 'express';
import cors from 'cors';
import { newLogger } from '../../common/logger';

const logger = newLogger('Server');

export const getServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  return app;
};

export const startServer = async () => {
  const app = getServer();

  return app.listen(3000, () => {
    logger.info('Listening on port 3000');
  });
};
