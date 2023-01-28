const io = require('socket.io')(3000)

const users = {}

io.on('connection',socket =>{
    //console.log('new user')
    //socket.emit('chat-message','Hello World')
    socket.on('new-user',name=>{
        users[socket.id] = name
        socket.broadcast.emit('user-connected',name)
    })
    socket.on('send-chat-message',message=>{
        //console.log(message) -- will send message to server
        socket.broadcast.emit('chat-message',{ message: message, name: users[socket.id]}) //will send message to every person connected to server except for person who sent it
    })

    socket.on('disconnect',()=>{
        socket.broadcast.emit('user-disconnected',users[socket.id])
        delete users[socket.id]
        
    })
})