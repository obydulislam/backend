const mongoose = require("mongoose");
const {Schema} = mongoose
let UserSchem = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    otp : {
        type : String
    },
    verify : {
        type : Boolean,
        default : false
    },
    role : {
        type : String,
        enum : ["Admin", "User", "marchen"],
        default : "Admin"
    }

})

module.exports = mongoose.model("User",UserSchem)