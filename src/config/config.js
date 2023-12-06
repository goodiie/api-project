const pgp = require('pg-promise')();
const cn = "postgresql://postgres:pass@localhost:5432/fashion"

const db = pgp(cn);


module.exports = db;