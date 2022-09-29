const mongoose = require('mongoose')
const User = require('../models/user');
const Business = require('../models/business');
const midd = require('../middleware/isUser')

module.exports = {
    user: async  (req, res) => {
        try {
            const {name , email, password} = req.body;
            
            if(!name || !email || !password)
            throw { status: 400, message: "Required fields are required" };
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                name:name,
                email: email,
                password:password
            });
            await user.save();
            res.status(200).send({createdUser: user});
        } catch (err) {
            console.log(err)
            return res.status(400).send("something went wrong")
        }
    },

getall:  async (req,res)=>{
        try{
            const user = await students.find();
        res.status(200).send({ user })
        }catch(err){
            console.log(err)
            return res.status(400).send("something went wrong")
        }
    },
business: async (req, res)=>{
    try {
        const {business_email , address, logo} = req.body;
        const {userId}=req.params;
        if(!business_email || !address || !logo)
        throw { status: 400, message: "Required fields are required" };
        const business = new Business({
            business_email:business_email,
            address:address,
            logo:logo,
            user_id:userId
        });
        await business.save();
        res.status(200).send({businessCreated: business});
    } catch (err) {
        console.log(err)
        return res.status(400).send("something went wrong")
    }   
},
 get:async(req,res)=>{
    try {
        const user = await Business.find({business_email: "abc@gmail.com"})
        res.status(200).send({ user })
    } catch (err) {
        console.log(err)
        return res.status(400).send("something went wrong")
    }
 }
}
