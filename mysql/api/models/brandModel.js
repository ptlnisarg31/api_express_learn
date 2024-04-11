const db = require('../../config/dbConfig');

const Brand = {
  getByID: (brand_id, callback) => {
    db.query('SELECT * FROM brands WHERE brand_id = ?', [brand_id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, results[0]);
    });
  }
};

module.exports = Brand;
