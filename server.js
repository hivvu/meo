const cors = require("cors"),
      express = require('express'),
      path = require('path'),
      app = express(),
      initRoutes = require("./src/routes"),
      loggerMiddleware = require("./src/middleware/logger");
      port = 9000;

// App options and init
app.use(cors());

app.use(express.static('.')); // Necessary to get the json files
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use(loggerMiddleware);

initRoutes(app);

app.listen(port, () => {
  console.info(`[Info] Running at localhost: ${port}`);
});
