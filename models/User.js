const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
})

// const user = mongoose.model('users', userSchema);
// module.exports = user;

mongoose.model('users', userSchema);