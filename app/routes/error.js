import Route from '@ember/routing/route';

export default Route.extend({
  renderTemplate: function(controller, error) {
    var errors = ['browser-unsupported', 'filesystem-unavailable'];
    var name = 'errors/' + error.message;

    if (errors.indexOf(error.message) !== -1) {
      this.render(name);
    }
  },
});
