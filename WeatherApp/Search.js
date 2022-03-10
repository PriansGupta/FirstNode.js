const Search = (name) => {
  const request = require("request");

  const latUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${name}.json?access_token=pk.eyJ1IjoicHJpYW5zIiwiYSI6ImNsMGp4dWdwajBoMWkzZHVvM2IwenZkc3oifQ.jLETuenG2e14hTyin_oJCA&limit=1&type=string`;

  request({ url: latUrl, json: true }, (error, response) => {
    if (error) {
      console.log("Unable to connect");
    } else {
      const lat = response.body.features[0].center[0];
      const lon = response.body.features[0].center[1];

      const url = `http://api.weatherstack.com/current?access_key=69deb58529f2280c0a95575913b5df3d&query=${lon},${lat}`;

      request({ url: url, json: true }, (error, response) => {
        if (error) {
          console.log("Unable to connect");
        } else {
          const temperature = response.body.current.temperature;
          const cloud = response.body.current.cloudcover;

          console.log(
            "The temperature in " + name.toUpperCase() + " is " + temperature
          );
        }
      });
    }
  });
};

module.exports = { Search: Search };
