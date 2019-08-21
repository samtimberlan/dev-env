// This file is not transpiled. Hence, use CommonJS and ES5

// Register babel to transpile before running tests
require("babel-register")();

// Disable webpack features that Mocha does not understand.
require.extensions[".css"] = function() {};
