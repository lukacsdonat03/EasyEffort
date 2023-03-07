const { StatusCodes } = require('http-status-codes');
const database = require("../database/dbConfig");
const axios = require('axios');

const getItems = (req, res) => {
    const {item_name} = req.body
    const options = {
        method: 'GET',
        url: `https://nutritionix-api.p.rapidapi.com/v1_1/search/${item_name}`,
        params: { fields: 'item_name,item_id,nf_calories' },
        headers: {
            'X-RapidAPI-Key': '1213c3aae7msh94cb6f7e643c1eep11ed8bjsn987a07e007df',
            'X-RapidAPI-Host': 'nutritionix-api.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        res.status(StatusCodes.OK).send(response.data.hits)
    }).catch(function (error) {
        res.status(StatusCodes.NOT_FOUND).send('Error: '+error)
    });
}

module.exports = {
    getItems
}