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

//Test databse connection
router.get("/testconnect", function(req, res, next) {
	if (db != null) {
		res.send("Connected Successfully");
	} else {
		res.send("Connection Failed");
	}
});

//Display all values
router.get("/select", function(req, res, next) {
	db.query("SELECT * FROM items", function(err, rs) {
		res.render("select", { items: rs });
	});
});

//Insert value
router.get("/form", function(req, res, next) {
	res.render("form");
});

router.post("/form", function(req, res, next) {
	db.query("INSERT INTO items SET ?", req.body, function(err, rs) {
		res.send(
			"Item has been added <div><a href='/select'><button>Back</button></a></div>"
		);
	});
});

//Delete value
router.get("/delete", function(req, res, next) {
	db.query("DELETE FROM items WHERE id = ?", req.query.id, function(err, rs) {
		res.redirect("select");
	});
});

module.exports = router;
