'use strict';
const pkg = require('../package.json');
const { app, listen } = require('steplix-microservice/server');
const { errors, health } = require('steplix-microservice/server/routes');
const controllers = require('./controllers');

app.get('/currencies', controllers.currencies.list);
app.get('/currencies/:id', controllers.currencies.getById);
app.post('/rates', controllers.rates.create);
app.get('/rates', controllers.rates.list);
app.get('/rates/:symbol', controllers.rates.getBySymbol);

health(app, {
  pkg /* , router, database, services: ['other-service-name'] */,
});
// Handle all errors (400, 404, 500, etc...)
errors(app);

listen(app);

module.exports = app;
