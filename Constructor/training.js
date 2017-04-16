var training = function(title) {
  this.title = title;
  this.trainingOccurred = false;
}

//Protoyping improves memory usage - one copy of the function call linked to
//prototype

training.prototype.occurred = function() {
  console.log('The training ' + this.title + ' has occurred');
  this.trainingOccurred = true;
}

training.prototype.save = function() {
  console.log('Training information for ' + this.title +  ' has been added ');
}

var training1 = new training('JS Patterns');
var training2 = new training('jQuey DOM Manipulation');
var training3 = new training('Office 365 Administration');

training1.occurred();
training2.save();
training3.save();
