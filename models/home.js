const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const homeDataPath = path.join(rootDir, "data", "Homes.json");

module.exports = class Home {
  constructor(houseName, housePrice, houseLocation, rating, ImageUrl) {
    ((this.houseName = houseName),
      (this.housePrice = housePrice),
      (this.houseLocation = houseLocation),
      (this.rating = rating),
      (this.ImageUrl = ImageUrl));
  }

  save() {
    this.id = Math.random().toString();
    Home.fetchAll((registerHome) => {
      registerHome.push(this);
      fs.writeFile(homeDataPath, JSON.stringify(registerHome), (error) => {
        console.log("File writing Concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static findById(homeId, callback) {
    this.fetchAll((homes) =>{
        const homeFound = homes.find(home => home.id === homeId);
        callback(homeFound);
    })
  }
};
