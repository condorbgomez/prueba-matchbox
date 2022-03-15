'use strict';
const metrics = require('@condor-labs/metrics');

const { METRICS_HOST, METRICS_PORT, METRICS_JOB, METRICS_INSTANCE } = process.env;

const settingsMetrics = {
  host: METRICS_HOST,
  port: METRICS_PORT,
  globalTags: {
    job: METRICS_JOB,
    instance: METRICS_INSTANCE,
  },
};

const connect = async () => {
  metrics.collectSystemInformation();
  metrics.heartbeatSignal(2000);
  metrics.restartSignal();
  metrics.implementFullMonitoring();
  metrics.connect(settingsMetrics);
};

module.exports = { connect };
