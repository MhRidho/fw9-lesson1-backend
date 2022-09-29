const db = require('../helpers/db');

const { LIMIT_DATA } = process.env;

exports.getAllContacts = (keyword, sortBy, sortType, limit = parseInt(LIMIT_DATA), offset = 0, cb) => {
  const q = `SELECT * FROM contact WHERE ${sortBy} LIKE '%${keyword}%' ORDER BY id ${sortType} LIMIT $1 OFFSET $2`;
  db.query(q, [limit, offset], (err, res) => {
    cb(err, res.rows);
  });
};

exports.getContactById = (id, cb) => {
  const q = `SELECT * FROM contact WHERE id=$1`;
  db.query(q, [id], (err, res) => {
    cb(err, res);
  });
};

exports.countAllContacts = (keyword, cb) => {
  db.query(`SELECT FROM contact WHERE email LIKE '%${keyword}%'`, (err, res) => {
    cb(err, res.rowCount);
  });
};

exports.createContact = (data, cb) => {
  const q = 'INSERT INTO contact(username, email, phone, message) VALUES ($1, $2, $3, $4) RETURNING *';
  const val = [data.username, data.email, data.phone, data.message];
  db.query(q, val, (err, res) => {
    if (res) {
      cb(err, res.rows);
    } else {
      cb(err);
    }
  });
};

exports.deleteContact = (id, cb) => {
  const q = 'DELETE FROM contact WHERE id=$1 RETURNING *';
  const val = [id];
  db.query(q, val, (err, res) => {
    cb(res.rows);
  });
};

exports.editContact = (id, data, cb) => {
  const q = 'UPDATE contact SET username=$1, email=$2, phone=$3, message=$4 WHERE id=$5 RETURNING *';
  const val = [data.username, data.email, data.phone, data.message, id];
  db.query(q, val, (err, res) => {
    cb(err, res);
  });
};
