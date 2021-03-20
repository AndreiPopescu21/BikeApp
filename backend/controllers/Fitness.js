const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

exports.setFitness = async (req, res, next) =>{
    const { time, token } = req.body;
    
    if(!token || !time)
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
                const MET = 8.1689655172414;
                const calories = (MET * userExists.weight * 3.5) / 200 * time;

                caloriesData = userExists.caloriesDetails;
                const date = new Date(Date.now()).toJSON().slice(0,10);
                const currentDate = new Date(date);

                var dateInArray = false;
                
                caloriesData.forEach(async (element) => {
                    console.log(element.date.getDate());
                    console.log(currentDate.getDate());
                    if(element.date.getTime() == currentDate.getTime()){
                        dateInArray = true;
                        element.calories += calories;
                    }
                });
               
                if(!dateInArray)
                    caloriesData.push({
                        "date": currentDate,
                        "calories": calories
                    });

                caloriesData.forEach(e => {
                    if(e.date.getMonth() != currentDate.getMonth())
                        caloriesData.splice(caloriesData.indexOf(element), 1);
                })

                try{
                    await userExists.updateOne({caloriesDetails: caloriesData});
                    var data = []
                    userExists.caloriesDetails.forEach(element => {
                        data.push({
                            "date": element.date,
                            "calories": element.calories
                        })
                    })
                    res.status(200).json({data: data});
                }catch(error){
                    res.status(400).json({error: error.message});
                }
            
            }catch(error){
                res.status(400).json({error: error.message});
            }

        });
    }
}

exports.getFitness = async (req, res, next) => {
    const {token} = req.body;

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
                var data = []
                userExists.caloriesDetails.forEach(element => {
                    data.push({
                        "x": element.date.getDate(),
                        "y": element.calories
                    })
                })
                res.status(200).json({data: data});
            }catch(error){
                res.status(400).json({error: error.message});
            }
        });
    }

}

exports.checkInfo = async (req, res, next) => {
    const {token} = req.body;

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
                if(userExists.weight != null && userExists.height != null)
                    res.status(200).json({data: "Success"});
                else
                    res.status(200).json({data: "Fail"});
            }catch(error){
                res.status(400).json({error: error.message});
            }
        });
    }
}