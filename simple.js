var { Liquid } = require("liquidjs");
var engine = new Liquid();

engine
  .parseAndRender("{{name | capitalize}}", { name: "ayushi" })
  .then(console.log);
