const knexOracle = require('../database/oracle');

const getKnexStatus = async () => {
  try {
    await knexOracle.raw('select 1 from dual');
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = {
  getKnexStatus,
};
