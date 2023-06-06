var { Liquid } = require('liquidjs');
var path = require('path');

var engine = new Liquid({
    root: path.resolve(__dirname, 'views/'),
    extname: '.liquid'
});

ctx = { users: [{ name: "Peter", age: 24 }, { name: "Lucy", age: 34 }] };

engine
    .renderFile("users", ctx)
    .then(console.log);