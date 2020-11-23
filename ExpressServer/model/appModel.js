const sql = require("../db.js");

const Employee = (employee) => {
  this.employee = employee.employee;
  //   this.ethnicity = name.ethnicity;
  //   this.YearOfName = name.YearOfName;
  //   this.NameCount = name.NameCount;
  //   this.gender = name.gender;
  //   this.NameRank = name.NameRank;
  //   this.Ratings = name.Ratings;
};

Employee.getAllEmployee = getAllEmployee = (result) => {
  sql.query("SELECT * FROM emp_name LIMIT 0, 10;", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("countries : ", res);
      result(null, res);
    }
  });
};

Employee.getEmpByID = getEmpById = (id, result) => {
  sql.query("SELECT * FROM emp_name WHERE emp_no = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Employee;
