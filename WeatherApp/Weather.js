const request = require("request");


const weather = (address, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=69deb58529f2280c0a95575913b5df3d&query=26.215,78.19306";

  request({ url: url, json: true }, (error, response) => {
    if (error) callback("Unable to connect", undefined);
    else {
      const Temperature = response.body.current.temperature;
      const description = response.body.current.weather_descriptions[0];

      callback(undefined, {
        Temperature: Temperature,
        description: description,
      });
      // console.log(Temperature,description)
    }
  });
};

module.exports = weather;
