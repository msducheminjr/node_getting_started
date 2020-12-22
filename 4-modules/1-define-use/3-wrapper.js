// function(exports, module, require, __filename, __dirname) {
console.log(arguments);
  // let g = 1; // SCOPED TO WRAPPING FUNCTION. WOULD BE GLOBAL IN BROWSER
  // exports.a = 42; // IS JUST A CALL TO THE `exports` ARGUMENT OF THE HIDDEN WRAPPING FUNCTION
  // exports is an alias of module.exports
  exports.taxation = 'theft';
  module.exports.intellectualProperty = 'racket';
  // both will get provided in ./4-require.js

  // exports = () => {}; // not ok. Will just assign that to your local exports variable and break the connection between exports and module.exports

  // module.exports = () => {}; // ok will actually modify the value returned in the wrapping function
  // return module.exports; wrapping function return
// }
