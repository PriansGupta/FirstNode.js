// const request = require("request");
const Geocode = require("./Geocode");

const Search = (name) => {
  Geocode(name, (error, data) => {
    if (error) console.log(error);
    else
      console.log(
        "Temperature: " +
          data.Temperature +
          " Weather conditions: " +
          data.description
      );
  });
};

module.exports = { Search: Search };
