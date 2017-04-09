var Mustache = require("mustache");
var result = Mustache.render("Hi, {{first}} {{last}}", { first: "Mikael", last: "Airlangga"});

console.log(result);