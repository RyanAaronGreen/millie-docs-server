const monk = require('monk');
const db = monk('/localhost/millie-docs')

module.exports = db;