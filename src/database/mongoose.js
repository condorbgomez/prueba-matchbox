'use strict';

//Mongo connection
const { MONGO_HOST, MONGO_PORT, MONGO_DATABASE, MONGO_USER, MONGO_PASSWORD, MONGO_REPLICASET, MONGO_SSL } = process.env;

const settingsMongo = {
  host: MONGO_HOST,
  port: MONGO_PORT,
  database: MONGO_DATABASE,
  user: MONGO_USER,
  password: MONGO_PASSWORD,
  authSource: 'admin',
  replicaSet: MONGO_REPLICASET,
  ssl: MONGO_SSL === 'true',
};

const mongo = require('@condor-labs/mongodb')(settingsMongo);

const connect = async () => {
  return mongo.getClient();
};

const isConnected = () => {
  return mongo._isConnected();
};

const getClient = async () => {
  const client = await mongo.getClient();
  return client;
};

const helper = {
  getClient,
  connect,
  isConnected,
};

module.exports = helper;
