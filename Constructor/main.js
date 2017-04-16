// Need to pull in the external file to access it
//Similar practice to React
var training = require('./training');

var training1 = new training('JS Patterns');
var training2 = new training('jQuey DOM Manipulation');
var training3 = new training('Office 365 Administration');

training1.occurred();
training2.save();
training3.save();
