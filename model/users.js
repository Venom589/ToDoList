const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Username:{
        type: String,
        required: [true, "Username required"],
        min: [6, "Enter atleast six letter name"],
        max: 15,
    },
    Email:{
        type: String,
        require: [true, "Email is required"],
        validate: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        unique:true
    },
    Password:{
        type: String,
        required: [true, "Password required"],
    }
});

const users = mongoose.model('users', userSchema);

module.exports = users;