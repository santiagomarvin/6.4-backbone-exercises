// View for each individual item
var BlogView = Backbone.View.extend({

  template: AppTemplates.sidebar,

  el: '#sidebar',

  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    var html = this.template(this.collection.toJSON());
    this.$el.html(html);
    return this;
  },
});

// View for all
var AppView = Backbone.View.extend({
  template: AppTemplates.app,

  el: '#target',

  initialize: function() {
    this.render();
  },

  render: function() {

    var html = this.template(this.collection.toJSON());
    this.$el.html(html);

    return this;
  },

});
