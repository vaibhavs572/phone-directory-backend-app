const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    name: {
        type: String
    },
    phone: {
        type: Array
    },
    email: {
        type: String
    },
  
});

module.exports = mongoose.model('Todo', Todo);