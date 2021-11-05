/* console.log('starting app..')

setTimeout( () => {
    console.log('a 2 sec timer..')
}, 2000)

setTimeout( () => {
    console.log('a 0 sec timer..')
}, 0)

console.log('stopping app..') */

const request = require('request');
const postmanRequest = require('postman-request');
const chalk = require('chalk');


const url = "http://api.weatherstack.com/current?access_key=3680cde7ca25987d1dfe5b9efe8cff80&query=Vizianagaram&units=m";

postmanRequest({ url: url, json: true}, (error, response) => {
    //const data = JSON.parse(response.body);
    const data = response.body;
    const temperature = data.current.temperature;

    console.log(data.current.weather_descriptions[0] +'. It is currently ' + chalk.redBright(temperature) + ' degrees out there(Feels like ' + data.current.feelslike+ ').'
        + ' There is a chance of ' + data.current.precip + '% of rain');
})