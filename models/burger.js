const orm = require('../config/orm.js');

const burger = {
    selectAll(tableInput, cb) {
      orm.selectAll(tableInput, (res) => cb(res));
    },
    // The variables cols and vals are arrays.
    Insertone(cols, vals, cb) {
      orm.Insertone('burgers', cols, vals, (res) => cb(res));
    },
    updateOne( objColVals, condition, cb) {
      orm.updateOne('burgers', objColVals, condition, (res) => cb(res));
    },
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;