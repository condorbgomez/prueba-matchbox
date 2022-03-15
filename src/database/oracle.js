const { ORACLE_USER, ORACLE_PASSWORD, ORACLE_CONNECTION_STRING } = process.env;

const connectionData = {
  user: ORACLE_USER,
  password: ORACLE_PASSWORD,
  connectionString: ORACLE_CONNECTION_STRING,
  options: {
    acquireConnectionTimeout: 10000,
    pool: { min: 0, max: 10 },
  },
};

let knexHelper = require('@condor-labs/knex-oracle')(connectionData);
knexHelper = knexHelper.getClient();
const knex = knexHelper.knex;

knex.oracleTypes = knexHelper.oracleTypes;
knex.executeProcedure = knexHelper.executeProcedure;
knex.executeFunction = knexHelper.executeFunction;
knex.executeNonQuery = knexHelper.executeProcedure;
knex.executeNonQueryTrx = knexHelper.executeProcedureTrx;

module.exports = knex;
