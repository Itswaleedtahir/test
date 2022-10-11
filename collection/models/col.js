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
    followers:{
        type: new mongoose.Schema({
           _id: {
                type : mongoose.Schema.Types.ObjectId
            },
            status:{
                type : String,
                enum:['Approved', 'Accepted', 'Rejected'],
                required : true
            }
        })
    }
})

module.exports = mongoose.model('sub',User)