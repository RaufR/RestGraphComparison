const sql = require("../db.js");

const Employee = (employee) => {
  this.employee = employee.employee;
};

const Department = (department) => {
  this.department = department.department;
};

Employee.getAllEmployee = getAllEmployee = (result) => {
  sql.query("SELECT * FROM emp_name LIMIT 0, 10;", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
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

Department.getAllDepartment = getAllDepartments = (result) => {
  sql.query("SELECT * FROM departments", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Department.getAllManagers = getAllManagers = (result) => {
  sql.query("SELECT * FROM dept_manager", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = { Employee, Department };
