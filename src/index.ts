import { newLogger } from './common/logger';
import { startServer } from './infrastructure/http/server';
import { dataSource } from './infrastructure/orm/data-source/data-source';

const logger = newLogger('EntryPoint');

async function main() {
  logger.info('Starting Database connection');
  await dataSource.initialize();

  logger.info('Starting HTTP server');
  await startServer();
}

main();
