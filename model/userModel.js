const db = require('../db');

const getAllUsers = callback => {
  db.query('SELECT * FROM users ORDER BY id ASC', (err, result) => {
    if (err) return callback(err);
    callback(null, result.rows); // like MySQL
  });
};

const getUserById = (id, callback) => {
  db.query('SELECT * FROM users WHERE id = $1', [id], (err, result) => {
    if (err) return callback(err);
    callback(null, result.rows); // like MySQL
  });
};

const createUser = (data, callback) => {
  const { name, email } = data;
  db.query(
    'INSERT INTO users (name, email) VALUES ($1, $2)',
    [name, email],
    (err, result) => {
      if (err) return callback(err);
      callback(null, result.rows); // empty array, still consistent
    }
  );
};

const updateUser = (id, data, callback) => {
  const { name, email } = data;
  db.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (err, result) => {
      if (err) return callback(err);
      callback(null, result.rows);
    }
  );
};

const deleteUser = (id, callback) => {
  db.query('DELETE FROM users WHERE id = $1', [id], (err, result) => {
    if (err) return callback(err);
    callback(null, result.rows);
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
