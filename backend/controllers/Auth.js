const { OAuth2Client } = require('google-auth-library');
const User = require('../models/UserModel');
const authValidator = new OAuth2Client(process.env.AUTH_ID);
const dotenv = require('dotenv').config();

exports.login = async (req, res, next) => {
    const { tokenId } = req.body;

    authValidator.verifyIdToken({idToken: tokenId, 
        audience: process.env.AUTH_ID})
        .then(async (response) => {
            const {email_verified, email} = response.payload;
            
            if(email_verified){
                var userExists = await User.findOne({email: email});
                
                try{
                    if(!userExists){
                        userExists = await User.create({
                                    "email": email
                                });
                    }
                }catch(err){
                    res.status(400).json({error: err.message});
                }

                const token = await userExists.getToken();
                res.status(200).json({token: token});
            }
        })
        .catch(err => res.status(400).json({error: "Invalid login!"}));
    }
