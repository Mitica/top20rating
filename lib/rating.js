var utils = require('./utils');
var NAMES = utils.NAMES;

module.exports = function(ratings, limits) {
  limits = limits || utils.Limits;

  var parts = [];
  var rating = {
    parts: parts,
    rank: 0
  };
  var _name;
  var part;
  var value;
  var limit;
  Object.keys(ratings).forEach(function(name) {
    _name = startWithUpper(name);
    if (NAMES[_name]) {
      limit = limits[_name];
      part = {
        name: name,
        value: ratings[name]
      };
      value = part.value > limit.max ? limit.max : part.value;
      value = part.value < limit.min ? limit.min : part.value;
      part.rate = value / limit.max;
      var result = part.rate * limit.percent;
      if (utils.REVERSE_NAMES.indexOf(_name) >= 0) {
        result = limit.percent - result;
        part.rate = 1 - part.rate;
      }

      rating.rank += result;
      parts.push(part);
    }
  });
  return rating;
};

function startWithUpper(name) {
  return name[0].toUpperCase() + name.substr(1);
}
