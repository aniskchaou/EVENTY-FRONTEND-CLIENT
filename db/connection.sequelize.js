
module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "admin",
    DB: "eventy",
    dialect: "postgres",
    port: 5432,
    native: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

