const express = require("express");
const router = express.Router();
// const bodyParser = require("body-parser");
// const archive = require('../controller/archive');
// const downloadQuickie = require('../controller/download');
// const deleteQuickie = require('../controller/delete');
// const saveQuickie = require('../controller/save');
// const loadQuickie = require('../controller/load');
const controller = require('../controller/controller');
// const path = require('path');

let routes = (app) => {
  // app.use(bodyParser.json());

  // WEB 
  router.get('/', (req, res) => {
    res.sendFile("index.html", { root: 'public' });
  });

  // ENDPOINTS
  router.get('/controller/:key', controller);
  
  router.get('*', (req, res) => res.send('404! This is an invalid URL.'));

  app.use(router);
};

module.exports = routes;