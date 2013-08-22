var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if (this.length === 1) {
        this.playFirst();
      }
    });
    this.on('ended', function(){
      this.ended();
    });
    this.on('dequeue', function(song){
      this.dequeue(song);
    });
  },

  ended: function(){
    this.shift();
    if (this.length > 0){
      this.playFirst();
    }
  },

  enqueue: function(song){
    this.push(song);
  },

  dequeue: function(song){
    this.remove(song);
  },
  playFirst: function(){
    this.at(0).play();
  }
});
