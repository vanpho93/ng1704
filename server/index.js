const io = require('socket.io')(process.env.PORT || 4000);

console.log('Server started.');

io.on('connection', socket => {
    console.log('New connection', socket.id);
    socket.on('CLIENT_SEND_MESSAGE', message => {
        io.emit('SERVER_SEND_MESSAGE', message);
        // socket.emit('SERVER_SEND_MESSAGE', message);
    });
});
