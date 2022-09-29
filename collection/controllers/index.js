const mongoose = require('mongoose')
const User = require('../models/col');

module.exports = {
    post: async(req,res)=>{
       try{
        const {first_name , email, } = req.body;
            
        if(!first_name || !email)
        throw { status: 400, message: "Required fields are required" };
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            first_name:first_name,
            email: email
        })
        await user.save();
        res.status(200).send({createdUser: user});
       
    } catch (err) {
        console.log(err)
        return res.status(400).send("something went wrong")
    }
    }
}