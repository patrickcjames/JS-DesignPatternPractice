var repo = require('./trainingRepository');

var training = function(data) {
  //passing an object of data
  this.title = data.title;
  this.trainer = data.trainer;
  this.trainingDate = data.trainingDate;
  this.seats = data.seats;
  this.room = data.room;
  this.trainingOccurred = false;
};

//Protoyping improves memory usage - one copy of the function call linked to
//prototype

training.prototype.occurred = function() {
  console.log('The training for our office ' + this.title + ' with trainer ' + this.trainer + ' has occurred');
  this.trainingOccurred = true;
};

training.prototype.save = function() {
  console.log('Training information for ' + this.title + ' with trainer ' + this.trainer + ' has been added ');
  repo.save(this);
};

training.prototype.get = function() {
  console.log('Training Title: ' + this.title + ' ' + 'Trainer: ' + this.trainer);
}

//CommonJS - export the module
module.exports = training;
