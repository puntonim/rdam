/*
 * Settings for the app.
 */

const SETTINGS = {
  // It's the price tag shown in /appartamenti.html close to every apt descripton (when
  //  isHidden: false).
  // Note: we can move this to a BE endpoint.
  priceTags: {
    presolana: {
      isHidden: true,
      priceNumber: 999,
      priceText: "Canone mensile indicativo9",
    },
    pora: {
      isHidden: true,
      priceNumber: 998,
      priceText: "Canone mensile indicativo8",
    },
    stracciatella: {
      isHidden: true,
      priceNumber: 997,
      priceText: "Canone mensile indicativo7",
    },
    arlecchino: {
      isHidden: true,
      priceNumber: 996,
      priceText: "Canone mensile indicativo6",
    },
  },

  // It's the price tag shown in /appartamenti.html close to every apt descripton (when
  //  its value is true).
  // Note: we can move this to a BE endpoint.
  occupiedTag: {
    presolana: false,
    pora: false,
    stracciatella: false,
    arlecchino: false,
  },
};
