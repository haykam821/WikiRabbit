const wikipedia = require("node-wikipedia");

wikipedia.page.data("Wikipedia", {
  content: true
}, function(response) {
  console.log(response)
});
