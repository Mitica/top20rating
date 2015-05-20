var external = module.exports;

var NAMES = external.NAMES = {
  AlexaBacklinks: 'AlexaBacklinks',
  AlexaBounceRate: 'AlexaBounceRate',
  AlexaCountryRank: 'AlexaCountryRank',
  AlexaPageviewsPerVisitor: 'AlexaPageviewsPerVisitor',
  AlexaRank: 'AlexaRank',
  AlexaSearchVisits: 'AlexaSearchVisits',
  AlexaTimeOnSite: 'AlexaTimeOnSite',
  GoogleBacklinks: 'GoogleBacklinks',
  GooglePages: 'GooglePages',
  GoogleRank: 'GoogleRank',
  YandexRank: 'YandexRank'
};

external.REVERSE_NAMES = [NAMES.AlexaRank, NAMES.AlexaCountryRank, NAMES.AlexaBounceRate];

external.Limits = {
  AlexaBacklinks: {
    min: 0,
    max: 500,
    percent: 10
  },
  AlexaBounceRate: {
    min: 10,
    max: 60,
    percent: 5
  },
  AlexaCountryRank: {
    min: 1,
    max: 10000,
    percent: 20
  },
  AlexaPageviewsPerVisitor: {
    min: 1,
    max: 20,
    percent: 5
  },
  AlexaRank: {
    min: 1,
    max: 100000,
    percent: 10
  },
  AlexaSearchVisits: {
    min: 0,
    max: 500,
    percent: 0
  },
  AlexaTimeOnSite: {
    min: 0.5,
    max: 10,
    percent: 5
  },
  GoogleBacklinks: {
    min: 0,
    max: 100,
    percent: 10
  },
  GooglePages: {
    min: 0,
    max: 10000,
    percent: 5
  },
  GoogleRank: {
    min: 0,
    max: 8,
    percent: 20
  },
  YandexRank: {
    min: 0,
    max: 1000,
    percent: 10
  }
};
