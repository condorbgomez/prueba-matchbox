const express = require('express');
const app = express();
const routes = require('./routes');
const { getKnexStatus } = require('./repositories/status.repository');
const { healthMonitor, statusType } = require('@condor-labs/health-middleware');

const healthConfig = {
  //only need modify params that you need it
  service: 'service oracle',
  checks: [
    {
      componentName: 'oracle', //Object
      componentType: statusType.DATASTORE,
      callback: getKnexStatus,
    },
  ],
};
healthMonitor(app, healthConfig);

// Midlewares
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('', routes);

module.exports = app;
