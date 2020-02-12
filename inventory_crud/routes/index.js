var express = require("express");
var router = express.Router();

var mysql = require("mysql");
var db = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "password",
	database: "inventory"
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

router.get("/select", function(req, res, next) {
	db.query("SELECT * FROM items", function(err, rs) {
		res.render("select", { items: rs });
	});
});

module.exports = router;
