const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

exports.getInformations = (req, res, next) =>{
    const { token } = req.body;
    
    if(!token)
        res.status(400).json({error: "Something went wrong"});
    else{
        jwt.verify(token, process.env.JWT_SECRET, async function(err, decodedToken){
            if(err){
                return res.status(400).json({error: "Expired Link"});
            }
            const { id } = decodedToken;
            console.log(id);

            const userExists = await User.findOne({_id: id});
            if(!userExists)
                return res.status(400).json({error: "User does not exist!"});
            console.log(userExists)

            res.status(200).json({weight: userExists.weight,
                                    height: userExists.height});

        });
    }
}

exports.setInformations = (req, res, next) =>{
    const { weight, height, token } = req.body;
    console.log(weight)
    
    if(!token || !height || !weight)
        res.status(400).json({error: "Something went wrong"});
    else{
        jwt.verify(token, process.env.JWT_SECRET, async function(err, decodedToken){
            if(err){
                return res.status(400).json({error: "Expired Link"});
            }
            const { id } = decodedToken;
            console.log(id);

            const userExists = await User.findOne({_id: id});
            if(!userExists)
                return res.status(400).json({error: "User does not exist!"});
            console.log(userExists)

            try{
                await userExists.updateOne({weight: weight, height: height});
                res.status(200).json({success: "Data succesfully sent"});
            }catch(error){
                res.status(400).json({error: error.message});
            }

        });
    }
}
