var _data = require('./time_zone_data');

module.exports = function(country, region) {
  if (!country)
    return null;

  region = region || "";

  return _data[country][region];
};
