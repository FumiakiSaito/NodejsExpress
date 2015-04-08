var socketio = require('socket.io');
var dateformat = require('dateformat');

module.exports = sio;

function sio(server) {

    var sio = socketio.listen(server);
    sio.set('transports', [ 'websocket' ]);

    sio.sockets.on('connection', function(socket) {

        socket.on('notice', function(data) {

            sio.sockets.emit('recieve', {        // 自分も含めてみんな
            //socket.broadcast.emit('recieve', { // 自分以外のみんな
                type : data.type,
                user : data.user,
                value : data.value,
                time : dateformat(new Date(), 'yyyy-mm-dd HH:MM:ss'),
            });
        });

        socket.on("disconnect", function() {
        });
    });
}