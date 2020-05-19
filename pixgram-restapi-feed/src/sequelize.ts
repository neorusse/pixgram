import { Sequelize } from 'sequelize-typescript';
import { config } from './config/config';

const dbSetup = config.dev;

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
    username: dbSetup.username,
    password: dbSetup.password,
    database: dbSetup.database,
    host: dbSetup.host,
    dialect: 'postgres',
    storage: ':memory:',
    models: [__dirname + '/models'],
});
