var repo = function() {
  return {
    get: function(id) {
      console.log('Getting training ' + id);
        return {
           title: 'training from database',
           trainer: 'trainer'
        }
    },
    save: function(training) {
      console.log('Saving ' + training.title + ' to the database');
    }
  }
}

module.exports = repo();
