var SongQueueView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('add', function(){
      this.render();
    }, this);
  },

  tagName: "table",

  render: function() {
    this.$el.children().detach();
    // debugger;

    return this.$el.html('<th>PlayList</th>').append(
      this.collection.map(function(song){
        return new LibraryEntryView({model:song}).render();
      })
    );
  }

});
