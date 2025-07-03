const { Pool } = require('pg');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 5432
  // ssl: process.env.DB_SSL === 'true' // Optional for remote DBs
});

// The port is the network endpoint used to connect to your PostgreSQL server. It allows your 
// application to talk to the database over a specific communication channel.

// 📌 Key Points:
// Default PostgreSQL port is 5432.

// If PostgreSQL is running on a custom port (e.g., in Docker, remote servers), your app won’t 
// connect without specifying the correct port.

// Helps avoid conflicts when multiple services are running on the same host.

pool.connect((err, client, release) => {
  if (err) {
    console.error('❌ PostgreSQL connection error', err.stack);
  } else {
    console.log('✅ PostgreSQL Connected');
    release(); // release the client back to the pool
  }
});

module.exports = pool;
