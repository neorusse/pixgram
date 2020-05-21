export const config = {
    dev: {
        username: process.env.POSTGRESS_USERNAME,
        password: process.env.POSTGRESS_PASSWORD,
        database: process.env.POSTGRESS_DB,
        host: process.env.POSTGRESS_HOST,
        dialect: 'postgres',
        operatorsAliases: false,
    },
    prod: {
        username: '',
        password: '',
        database: '',
        host: '127.0.0.1',
        dialect: 'mysql',
        operatorsAliases: false,
    },
};
