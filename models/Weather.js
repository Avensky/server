const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose;

const weatherSchema = new Schema({
    elevation: Number
})

// const user = mongoose.model('users', userSchema);
// module.exports = user;

mongoose.model('data', weatherSchema);