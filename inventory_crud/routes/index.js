var express = require("express");
var router = express.Router();

var mysql = require("mysql");
var db = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "password",
	databse: "inventory"
});

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", { title: "Express" });
});

router.get("/testconnect", function(req, res, next) {
	if (db != null) {
		res.send("Connected Successfully");
	} else {
		res.send("Connection Failed");
	}
});

module.exports = router;
