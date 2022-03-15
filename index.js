require('dotenv').config();
const app = require('./src/app');

const metrics = require('./src/metrics/config.metrics');
const mongodb = require('./src/database/mongoose');

const { PORT = 3001, SERVER_TIMEOUT = 15000 } = process.env;

const server = app.listen(PORT, async () => {
  await mongodb.connect();
  console.log('✔✔ mongodb connected'); // eslint-disable-line no-console
  await metrics.connect();
  console.log('✔✔ metrics connected'); // eslint-disable-line no-console
  console.log(`✔✔ express server started at port: ${PORT}`); // eslint-disable-line no-console
});

server.setTimeout(+SERVER_TIMEOUT);
