const fs = require('fs');

let writeRestaurant = `${__dirname}/restaurantData.json`;
let restaurantList = JSON.parse(fs.readFileSync(writeRestaurant));


const db = {};

db.sync = (restaurants) => {
  // if (!Array.isArray(restaurants)) {
  //   return new Error(`Market list must be an array, received ${typeof restaurants}`);
  // }
  // // some method checks if at least one element passes the condition
  // if (restaurants.some(r => r.restaurantName === undefined || r.address === undefined || r.foodExperience === undefined)) {
  //   return new Error('Missing fields on some markets');
  // }

  // // method checks if element is wrong type
  // if (restaurants.some(r =>
  //   typeof r.restaurantName !== 'string' ||
  //   typeof r.address !== 'string' ||
  //   typeof r.foodExperience !== 'string'
  // )) {
  //   return new Error('Some fields are of wrong type ');
  // }
  // console.log('dbsync', restaurants);
  db.write(restaurants);
  db.reset();
  return restaurantList;
};

db.find = () => {
  db.reset();
  return restaurantList;
};

// delete everything
db.drop = () => {
  restaurantList = [];
  db.write(restaurantList);
};


db.write = (data) => {
  console.log('db write: ', data);
  fs.writeFileSync(writeRestaurant, JSON.stringify(data, null, 2));
};


db.reset = () => {
  restaurantList = JSON.parse(fs.readFileSync(writeRestaurant));
};


module.exports = db;