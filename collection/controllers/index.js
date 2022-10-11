const mongoose = require('mongoose')
const User = require('../models/col');

module.exports = {
    post: async(req,res)=>{
       try{
        const {first_name , email,status } = req.body;
            
        if(!first_name || !email || !status)
        throw { status: 400, message: "Required fields are required" };
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            first_name:first_name,
            email: email,
            followers:{status: status}
        })
        await user.save();
        res.status(200).send("User saved successfully");
       
    } catch (err) {
        console.log(err)
        return res.status(400).send("something went wrong")
    }
    },
    Getall: async(req, res)=>{
        try {
            const stat = await User.find({followers:{status: "Approved"}});
        console.log(stat);
        if(!stat)
        throw { status: 400, message: "Required field is not approved" };
        res.status(200).send(stat);
        } catch (err) {
                console.log(err)
                return res.status(400).send("something went wrong")
        }
    }
}