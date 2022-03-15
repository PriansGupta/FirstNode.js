const Geocode = require("./Geocode");


const Search = (name) => {
  Geocode(name, (error, data) => {
    if (error) {
      return error;
    }
    else
      return data;
  });
};

module.exports = { Search: Search };
