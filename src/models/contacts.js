const db = require('../helpers/db');

const { LIMIT_DATA } = process.env;

exports.getAllContacts = (keyword, sortBy, sortType, limit = parseInt(LIMIT_DATA), offset = 0, cb) => {
  const q = `SELECT * FROM contact WHERE ${sortBy} LIKE '%${keyword}%' ORDER BY id ${sortType} LIMIT $1 OFFSET $2`;
  db.query(q, [limit, offset], (err, res) => {
    console.log(err);
    cb(err, res.rows);
  });
};

exports.countAllContacts = (keyword, cb) => {
  db.query(`SELECT FROM contact WHERE email LIKE '%${keyword}%'`, (err, res) => {
    cb(err, res.rowCount);
  });
};

exports.createContact = (data, cb) => {
  const q = 'INSERT INTO contact(username, email, phone) VALUES ($1, $2, $3) RETURNING *';
  const val = [data.username, data.email, data.phone];
  db.query(q, val, (err, res) => {
    if (res) {
      cb(err, res.rows);
    } else {
      cb(err);
    }
  });
};
