const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const fakeData = require("./data");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/:city', async (req, res) => {
    console.log(req.params)
    const {data} = await axios({
        method: "GET",
        baseURL: 'http://api.weatherstack.com',
        url: `/current?access_key=91f39c6301afa7311dd91a3e114ce1cf&query=${req.params.city}`
    });
    const {hourly, forecast, stats} = fakeData();

    const response = {
        location: data.location,
        current: {
            ...data.current,
            ...stats
        },
        hourly,
        forecast
    }

    res.status(200).send(response);
});

app.listen(5000, () => console.log("Server is running"));
