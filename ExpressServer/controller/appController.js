const Model = require("../model/appModel");

const Employee = Model.Employee;
const Department = Model.Department;

exports.list_all_employees = (req, res) => {
  Employee.getAllEmployee((err, employee) => {
    console.log("controller");
    if (err) res.send("error happened" + err);
    console.log("res", employee);

    res.send(employee);
  });
};

exports.single_employee_detail = (req, res) => {
  Employee.getEmpByID(req.params.id, (err, employee) => {
    if (err) res.send(err);
    res.json(employee);
  });
};

exports.list_all_departments = (req, res) => {
  Department.getAllDepartment((err, department) => {
    if (err) res.send("error happened" + err);
    res.send(department);
  });
};

exports.list_all_managers = (req, res) => {
  Department.getAllManagers((err, manager) => {
    if (err) res.send("error happened" + err);
    res.send(manager);
  });
};

// exports.deatil_by_name = function (req, res) {
//   Name.getDetailByName(req.params.name, function (err, name) {
//     if (err) res.send(err);
//     res.json(name);
//   });
// };

// exports.read_single_name = function (req, res) {
//   Name.getNameById(req.params.id, function (err, name) {
//     if (err) res.send(err);
//     res.json(name);
//   });
// };

// exports.read_name_by_year = function (req, res) {
//   Name.getNameByYear(req.params.year, function (err, name) {
//     if (err) res.send(err);
//     res.json(name);
//   });
// };
