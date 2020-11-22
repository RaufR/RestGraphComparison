const mysql = require("mysql");

var DbConf = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "country_db",
  //port: 3306
};
var connection;

handleDisconnect = () => {
  connection = mysql.createConnection(DbConf);

  connection.connect(function (err) {
    if (err) {
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 2000);
    }
  });

  connection.on("error", function (err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect(); // lost due to either server restart, or a
    } else {
      throw err; // server variable configures this)
    }
  });
};

handleDisconnect();

module.exports = connection;
