const DOMNodeCollection = require("./dom_node_collection.js");

window.$l = function(arg) {
  let array = [];

  if (arg instanceof HTMLElement) {
    array.push(arg);

  } else {
    array = Array.from(document.querySelectorAll(arg)); //it's the same as window.document.blahblah

  }
  return new DOMNodeCollection(array);
};
