const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose;

const bookSchema = new Schema({
    bookTitle : {
        type : String,
        uppercase : true,   //it will always covert firstName to Uppercase
        required : true
    },
    author : {
        type : String,
        required : false  
    },
    bookId : {
        type : String,
        required : true,
        unique : true      //ensures this will have always unique value
    },
    publisher : {
        type : String,
        required : true
    },
    publishDate : {
        type : Date,
        required : true
    }
})

// const user = mongoose.model('users', userSchema);
// module.exports = user;

// mongoose.model('books', bookSchema);

const book = mongoose.model('books',bookSchema);
module.exports = book;