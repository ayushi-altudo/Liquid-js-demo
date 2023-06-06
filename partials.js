var { Liquid } = require('liquidjs');
var path = require('path');

var engine = new Liquid({
    root: path.resolve(__dirname, 'views/'),
    extname: '.liquid'
});

ctx = { name: 'Peter' };

engine
    .renderFile("home", ctx)
    .then(console.log);