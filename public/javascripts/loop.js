function loop() {
  return {
    start: function() {
      return setInterval(function() {
        console.log("click")
        socket.emit('update', player);
      }, 1000);
    }
  }
}
