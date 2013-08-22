var Song = Backbone.Model.extend({
  initialize: function(){
    this.set({songCount: 0});
  },

  play: function(){
    this.trigger('play', this);
    var updatedCount = this.get('songCount')+1;
    this.set({songCount: updatedCount});
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  ended: function(){
    this.trigger('ended', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  }

});
