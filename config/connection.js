// Set up MySQL connection.
var mysql = require("mysql");


var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection =mysql.createConnection({
  host: "lfmerukkeiac5y5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ifn1y9lqyym0xxte",
  password: "ljr01nyi06fcr4r0",
  database: "q762olpblcctf6y8"
});
}


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
