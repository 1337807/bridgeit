export default Ember.ObjectController.extend({
  actions: {
    save: function(model){
      var self = this;
      model.save().then(function(){
        $('div#notification').fadeIn(1000).fadeOut(1000);
        self.set('model', self.store.createRecord('guest'));
      });
    }
  }
});
