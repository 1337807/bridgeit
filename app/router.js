var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.route('registration', { path: '/' });
});

export default Router;
