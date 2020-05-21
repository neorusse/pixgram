export const config = {
    dev: {
        username: process.env.POSTGRESS_USERNAME,
        password: process.env.POSTGRESS_PASSWORD,
        database: process.env.POSTGRESS_DB,
        host: process.env.POSTGRESS_HOST,
        dialect: 'postgres',
        operatorsAliases: false,
        aws_reigion: process.env.AWS_REGION,
        aws_profile: process.env.AWS_PROFILE,
        aws_media_bucket: process.env.AWS_BUCKET,
    },
    prod: {
        username: 'root',
        password: 'topple',
        database: 'database_production',
        host: '127.0.0.1',
        dialect: 'mysql',
        operatorsAliases: false,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
    },
};
