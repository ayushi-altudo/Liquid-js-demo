var { Liquid } = require('liquidjs');
var engine = new Liquid();

nums = [5, 3, 2, 4, 1]
ctx = { data: nums}

engine
    .parseAndRender('Sorted data: {{ data | sort }}', ctx)
    .then(console.log);