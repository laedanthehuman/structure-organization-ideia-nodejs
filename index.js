import express from 'express';
import consign from 'consign';
const app = express();

consign({verbose:false})
       .include('config/config.js')
       .then('db.js')
       .then('config/middlewares.js')
       .then('routes')
       .then('config/boot.js')
       .into(app);

module.exports = app;       