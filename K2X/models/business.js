const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Business = new Schema({
    business_email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        required: true,
    },
    user_id: 
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    

});

module.exports = mongoose.model('business',Business);