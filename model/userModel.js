const db = require('../db'); // db should be an instance of pg.Pool

const getAllUsers = callback => {
  db.query('SELECT * FROM users', callback);
};

const getUserById = (id, callback) => {
  db.query('SELECT * FROM users WHERE id = $1', [id], callback);
};

const createUser = (data, callback) => {
  db.query(
    'INSERT INTO users (name, email) VALUES ($1, $2)',
    [data.name, data.email],
    callback
  );
};

const updateUser = (id, data, callback) => {
  db.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [data.name, data.email, id],
    callback
  );
};

const deleteUser = (id, callback) => {
  db.query('DELETE FROM users WHERE id = $1', [id], callback);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
