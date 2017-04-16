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

//CommonJS - export the module
module.exports = training;
