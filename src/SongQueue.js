var SongQueue = Songs.extend({

  initialize: function(){
  },

  enqueue: function(song){
    this.unshift(song);
  
  },

  dequeue: function(){
    this.shift();
  },
  playFirst: function(){
    this.at(0).play();
  }

  // maybe add event listener here
});
