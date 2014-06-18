export default Ember.ObjectController.extend({
  actions: {
    save: function(model){
      var self = this;
      model.save().then(function(){
        self.set('model', self.store.createRecord('guest'));
      });
    }
  }
});
