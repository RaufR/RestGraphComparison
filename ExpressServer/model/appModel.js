var sql = require("../db.js");

var Country = function (country) {
  this.country = country.country;
  //   this.ethnicity = name.ethnicity;
  //   this.YearOfName = name.YearOfName;
  //   this.NameCount = name.NameCount;
  //   this.gender = name.gender;
  //   this.NameRank = name.NameRank;
  //   this.Ratings = name.Ratings;
};

Country.getAllCountry = function getAllCountry(result) {
  sql.query("SELECT * FROM countries LIMIT 0, 10;", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("countries : ", res);
      result(null, res);
    }
  });
};

module.exports = Country;
