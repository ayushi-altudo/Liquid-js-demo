var { Liquid } = require('liquidjs');
var path = require('path');

var engine = new Liquid({
    root: path.resolve(__dirname, 'views/'),
    extname: '.liquid'
});

engine
    .renderFile('home', { name: 'Peter' })
    .then(console.log)