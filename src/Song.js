var Song = Backbone.Model.extend({

  play: function(){
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  add: function(){
    //this.trigger('add', this);
  }

});
