//! const dotenv = require('dotenv')
//! dotenv.config()

require('dotenv').config()

const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || "dev", //? dev, prod, test
  db: {
    dev: {
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      database: "products",
      username: "postgres",
      password: "root",
      //Extra configs
      define: {
        timestamps: true,
        underscored: true,
      },
    },
    prod: {
      dialect: "postgres",
      host: process.env.DB_PROD_HOST,
      port: process.env.DB_PROD_PORT,
      database: process.env.DB_PROD_NAME,
      username: process.env.DB_PROD_USER,
      password: process.env.DB_PROD_PASS,
      //Extra configs
      define: {
        timestamps: true,
        underscored: true,
      },
      //Esta configuracion es para produccion
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    },
    test: {
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      database: "users",
      username: "postgres",
      password: "root",
      //Extra configs
      define: {
        timestamps: true,
        underscored: true,
      },
    },
  },
};

module.exports = config