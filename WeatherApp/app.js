const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=69deb58529f2280c0a95575913b5df3d&query=25.4484,78.5685";

request({ url: url ,json:true}, (error, response) => {
  const temperature=(response.body.current.temperature)
  const cloud=(response.body.current.cloudcover)

  console.log(response.body.location.name)
  console.log("The temperature is "+temperature+" degree Celsius and rain chances are "+cloud)
});
