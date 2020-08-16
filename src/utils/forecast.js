const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2e7e8ada828bba75f68e64e94513cc10&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json : true}, (error, { body } = {}) => {

        if (error) {
            callback('Unable to connect Internet', undefined)
        } else if (body.error) {
            callback('Unable to find location', body.error)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' temperature is ' + body.current.temperature + ' feelslike is ' + body.current.feelslike + ' humidity is' + body.current.humidity)
        }
    })
}

module.exports = forecast