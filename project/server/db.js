const mongoose = require('mongoose');

const dbUri = 'mongodb+srv://alimcdad:admin@clusterproject0.ki9p34r.mongodb.net/employee_db?retryWrites=true&w=majority'

module.exports = () => {
    return mongoose.connect(dbUri)
}