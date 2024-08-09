const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        unique : true,
        required : true
    }
},{
    timestamps : true,
})

const UserModel = mongoose.model("user",UserSchema);
module.exports = UserModel