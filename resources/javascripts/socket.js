function socket() {
    /*
    * Define the socket to the node server
    */
    window.socket = io('http://localhost:3000');
    /*
    * When you join register with the server
    */
    socket.on('connected', (data) => {
        console.log(data)
    });
}
