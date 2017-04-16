var training = require('./training');
var repo = require('./trainingRepository');

//var training1 = new training(repo.get(2));
var training2 = new training({title: 'jQuery DOM Manipulation', trainer: 'Rick James'});
var training3 = new training({title: 'Office 365 Administration', trainer: 'Rick James'});

training2.occurred();
training2.save();
training3.save();

training2.get();
