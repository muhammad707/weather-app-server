const faker = require("faker");
const moment = require("moment");

 function createWeatherInfo() {
    const weather_icons = ["https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"];

    let stats = {
        min_temp: faker.random.number(20),
        max_temp: faker.random.number(30),
        wind_speed: faker.random.number(20),
        rain: 0,
        astro: {
            sunrise: "06: 28 AM",
            "sunset": "07: 19 PM"
        }
    }

    let hourly = [];

    for (let i = 0; i< 7; i++) {
        hourly.push({
            id: i,
            time: faker.time.recent(),
            temperature: faker.random.number(30),
            weather_icons: [ faker.helpers.randomize(weather_icons) ],
        })
    }

    let forecast = [];
    for (let i = 0; i < 5; i++) {
        forecast.push({
            id: i,
            date: moment(faker.date.recent()).add(i+1, 'days').format('l'),
            day: faker.date.weekday(),
            weather_icons: [faker.helpers.randomize(weather_icons)],
            min_temp: faker.random.number(20),
            max_temp: faker.random.number(30),
            rain: faker.random.number(100),
            wind_speed: faker.random.number(100)
        })
    }
    return {hourly, forecast, stats}
}

module.exports = createWeatherInfo;
