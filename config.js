require('dotenv').config();

const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: process.env.DBHOST,
      user: process.env.DBUSER,
      password: process.env.DBPASSWORD,
      database: process.env.DATABASE
    },
    listPerPage: 10,
  };
  module.exports = config;
