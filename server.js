// <!-- "make reservation" button will be the POST request  -->

// dependancies

var express = require("express");
var path = require("path");
var db = require("./db/db.json");

// set up the express app
var app = express();
var PORT = 4040;

// set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app from the "public" directory in the application directory.
//app.use(express.static("public"));

// array variables

// html routes
app.get("/notes", function (req, res) {
  // res.send("homepage")
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/reserve.html", function (req, res) {
  // res.send("reservation form")
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables.html", function (req, res) {
  // res.send("reservation views")
  res.sendFile(path.join(__dirname, "tables.html"));
});

// // data table routes
// app.get("/api/tables", function (req, res) {
//   return res.json(tables);
// });

// app.get("/api/waitlist", function (req, res) {
//   return res.json(waitlist);
// });

// port listener
app.listen(PORT, function () {
  console.log("App listening on PORT" + PORT);
});
