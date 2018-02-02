const wikipedia = require("node-wikipedia");

var flattenObject = function(ob) {
  var toReturn = {};
  var flatObject;
  for (var i in ob) {
    if (!ob.hasOwnProperty(i)) {
      continue;
    }
    if ((typeof ob[i]) === 'object') {
      flatObject = flattenObject(ob[i]);
      for (var x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) {
          continue;
        }
        toReturn[i + (!!isNaN(x) ? '.' + x : '')] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }
  return toReturn;
};

function getArray() {
  wikipedia.page.data("Wikipedia", {
    content: true
  }, function(response) {
    let linkTitles = response.links.map(item => {
      return item["*"];
    });

    //console.log(linkTitles.join("\n"));
  });
};
