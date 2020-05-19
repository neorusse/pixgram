export const config = {
    dev: {
        username: 'postgres',
        password: 'topple',
        database: 'pixgramdb',
        host: 'localhost',
        dialect: 'postgres',
        operatorsAliases: false,
    },
    prod: {
        username: 'root',
        password: 'topple',
        database: 'database_production',
        host: '127.0.0.1',
        dialect: 'mysql',
        operatorsAliases: false,
    },
};
