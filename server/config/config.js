require("dotenv").config();

module.exports = {
    app: {
      port: process.env.PORT,
    },
    db: {
      dbName: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
  
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: process.env.DB_DIALECT,
    },
    jwt: {
      jwtSecretKey: process.env.JWT_SECRET_KEY
    }
  };