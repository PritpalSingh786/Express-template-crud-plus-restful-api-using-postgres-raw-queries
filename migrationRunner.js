const fs = require('fs');
const path = require('path');
const db = require('./db');

const sql = fs.readFileSync(path.join(__dirname, 'migrations', '001_create_users_table.sql'), 'utf8');

db.query(sql, err => {
  if (err) throw err;
  console.log('Migration complete!');
  process.exit();
});



