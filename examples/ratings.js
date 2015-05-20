var rating = require('../lib/rating');

var ratings = {
  alexaBacklinks: 20,
  alexaBounceRate: 40,
  alexaCountryRank: 100,
  alexaPageviewsPerVisitor: 4,
  AlexaRank: 5000,
  AlexaSearchVisits: 12,
  AlexaTimeOnSite: 4,
  googleBacklinks: 200,
  GooglePages: 1000,
  GoogleRank: 5,
  YandexRank: 100
};

var result = rating(ratings);

console.log(result);