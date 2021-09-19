module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'ruchika@1313',
    DB: 'translation',
    dialect: 'mysql',
    pool: {
        max: 25,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};