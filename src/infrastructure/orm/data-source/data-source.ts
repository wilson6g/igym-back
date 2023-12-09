import { DataSource } from 'typeorm';

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, NODE_ENV } =
  process.env;

export const dataSource = new DataSource({
  type: 'mysql',
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: NODE_ENV === 'development',
  entities: ['src/infrastructure/orm/entity/*.entity.ts'],
});
