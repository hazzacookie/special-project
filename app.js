//dependencies required for the app
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static("css"));


var task = ["buy ramen", "eat tempura", "drink beer", "feed the dogs"];

var complete = ["completed"];


app.post("/addTask", function(req, res) {
    var newTask = req.body.newtask;

    task.push(newTask);
    res.redirect("/");
});

app.post("/removeTask", function(req, res) {
    var completeTask = req.body.check;

    if (typeof completeTask === "string") {
        complete.push(completeTask);

        task.splice(task.indexOf(completeTask), 1);
    } else if (typeof completeTask === "string") {
        for (var i = 0; i < completeTask.length; i++) {
            complete.push(completeTask[i]);
            task.splice(task.indexOf(completeTask[i]), 1);
        }
    }
    res.redirect("/");
});


app.get("/", function(req, res) {
    res.render("index", { task: task, complete: complete });
});


app.listen(4000, function() {
    console.log("server is running on port 4000");
});
