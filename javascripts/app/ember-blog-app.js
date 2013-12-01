// Ember application object
EmberBlog = Ember.Application.create({
  ready: function() {
    console.log('Ember is ready!');
  }
});

// Configure the Store to use the Fixture Adapter
EmberBlog.ApplicationAdapter = DS.FixtureAdapter.extend();

// A simple client-side model for a blog post
EmberBlog.BlogPost = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string')
});

// Application Router
EmberBlog.Router.map(function() {
  this.resource('BlogPosts', { path: '/posts' }, function() {
    this.route('new');
  });
});

// BlogPosts Route retrieves all BlogPosts
EmberBlog.BlogPostsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('BlogPost');
  }
});

// Add some fixtures
EmberBlog.BlogPost.FIXTURES = [
  { id: '1', title: 'RWX Rocks!', body: "We're learning Ember" },
  { id: '2', title: 'HTML5 is here', body: '... to stay' },
  { id: '3', title: 'Groovy or Ruby?', body: 'Which one to choose?' },
  { id: '4', title: 'Is Maven making you hangry?', body: 'Try Gradle!'}
];