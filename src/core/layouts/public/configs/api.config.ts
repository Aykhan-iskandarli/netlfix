// import environment from './app.config';

export const environment = process.env.PUBLIC_URL;
console.log(environment,"environment")
const base = "/api/";

export const API = {
  register: environment + base + "register",
  login: environment + base + "login",
  verify: environment + base + "verify",
  forgotpassword: environment + base + "forgotpassword",
  resetpassword: environment + base + "resetpassword",

  brands: environment + base + "brands",
  rooms: environment + base + "rooms",
  account: environment + base + "account",
  features: environment + base + "features",
  feature: environment + base + "feature",
  promocode: environment + base + "promocode",
  paypromocode: environment + base + "account-sell-promocode",
  payaccount: environment + base + "account-sell",
  orderHistory: environment + base + "order-history",
  priceList: environment + base + "price-list",
  priceListAll: environment + base + "price-list-all",
  accountPriceList: environment + base + "account-price-list",

};
