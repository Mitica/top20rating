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
    percent: 10,
    decimals: 0
  },
  AlexaBounceRate: {
    min: 10,
    max: 60,
    percent: 5,
    decimals: 2
  },
  AlexaCountryRank: {
    min: 1,
    max: 10000,
    percent: 20,
    decimals: 0
  },
  AlexaPageviewsPerVisitor: {
    min: 1,
    max: 20,
    percent: 5,
    decimals: 2
  },
  AlexaRank: {
    min: 1,
    max: 100000,
    percent: 10,
    decimals: 0
  },
  AlexaSearchVisits: {
    min: 0,
    max: 500,
    percent: 0,
    decimals: 0
  },
  AlexaTimeOnSite: {
    min: 0.5,
    max: 10,
    percent: 5,
    decimals: 2
  },
  GoogleBacklinks: {
    min: 0,
    max: 100,
    percent: 10,
    decimals: 0
  },
  GooglePages: {
    min: 0,
    max: 10000,
    percent: 5,
    decimals: 0
  },
  GoogleRank: {
    min: 0,
    max: 8,
    percent: 20,
    decimals: 0
  },
  YandexRank: {
    min: 0,
    max: 1000,
    percent: 10,
    decimals: 0
  }
};
