var SongQueueView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('add remove', this.render, this);
  },

  tagName: "table",

  render: function() {
    this.$el.children().detach();

    return this.$el.html('<th>PlayList</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
