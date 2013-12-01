// Ember application object
EmberBlog = Ember.Application.create({
  ready: function() {
    console.log('Ember is ready!');
  }
});

// A simple client-side model for a blog post
EmberBlog.BlogPost = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string')
});