const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    _id : {
        type : mongoose.Schema.Types.ObjectId
    },
    email:{
        type : String,
        required : true
    },
    first_name: {
        type : String,
        required : true
    },
    followers:[  
        new Schema(
            {
                status: String,
                _id: mongoose.Schema.Types.ObjectId
            }
        )
     ],
})

module.exports = mongoose.model('sub',User)