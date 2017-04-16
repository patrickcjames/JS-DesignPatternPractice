'use strict'
//ECMASCRIPT2015 allows the creation of classes in strict module

class training {
  constructor(title) {
    this.title = title;
    this.trainingOccurred = false;
  };
  //Removed the prototypes and placed methods in the class
  //Method doesn't need to be set = to an anonymous function - will throw error
  occurred() {
    console.log('The training ' + this.title + ' has occurred');
    this.trainingOccurred = true;
  };

  save() {
    console.log('Training information for ' + this.title +  ' has been added ');
  };
};

//To have this display in the browser outside of node, Babel is needed.

var training1 = new training('JS Patterns');
var training2 = new training('jQuey DOM Manipulation');
var training3 = new training('Office 365 Administration');

training1.occurred();
training2.save();
training3.save();
