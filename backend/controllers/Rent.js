const fetch = require('node-fetch');

const returnZones = (data, res, city) => {
    zones = [];
    data["networks"].forEach(zone => {
        if(zone["location"]["city"] == city)
            zones.push(zone);
    })
    res.status(200).json({'data': zones});
}

exports.getRentZones = async (req, res, next) => {
    const {City} = req.body;

    fetch('http://api.citybik.es/v2/networks')
    .then(res => res.json())
    .then(json => returnZones(json, res, City))
    .catch(err => res.status(400).json({error: err.message}));

}