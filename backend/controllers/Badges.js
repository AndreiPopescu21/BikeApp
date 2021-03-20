const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

exports.getBadges = async (req, res, next) => {
    const { token } = req.body;

    if(!token)
        res.status(400).json({error: "Something went wrong"});
    else{
        jwt.verify(token, process.env.JWT_SECRET, async function(err, decodedToken){
            if(err){
                return res.status(400).json({error: "Expired Link"});
            }
            const { id } = decodedToken;

            const userExists = await User.findOne({_id: id});
            if(!userExists)
                return res.status(400).json({error: "User does not exist!"});

            try{
                res.status(200).json({data: userExists.badges});
            }catch(error){
                res.status(400).json({error: error.message});
            }
        });
    }

}

exports.setBadges = async (req, res, next) => {
    const { token, Distance, time, topSpeed } = req.body;

    if(!token)
        res.status(400).json({error: "Something went wrong"});
    else{
        jwt.verify(token, process.env.JWT_SECRET, async function(err, decodedToken){
            if(err){
                return res.status(400).json({error: "Expired Link"});
            }
            const { id } = decodedToken;

            const userExists = await User.findOne({_id: id});
            if(!userExists)
                return res.status(400).json({error: "User does not exist!"});

            try{
                var badgeList = userExists.badges;
                console.log(badgeList)
                
                if(badgeList[0] == 0)
                    badgeList[0] = 1;
                if(topSpeed >= 20)
                    badgeList[3] = 1;
                if(time >= 60)
                    badgeList[4] = 1;
                if(Distance + userExists.Distance >= 100)
                    badgeList[5] = 1;
                if(Distance + userExists.Distance >= 500)
                    badgeList[6] = 1;
                
                await userExists.updateOne({distance: Distance + userExists.distance, badges: badgeList})

                res.status(200).json({success: "Data sent successfully"});
            }catch(error){
                res.status(400).json({error: error.message});
            }
        });
    }
}