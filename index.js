const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars')
const app = express()
const port = 3000 || process.env.port;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

server = app.listen(port, () => {
    console.log(`Server started on port`);
});

const io = require("socket.io")(server)

io.on('connection', (socket) => {

    socket.user = "Someone"

    socket.on('change_user', (data) => {
        socket.user = data.username
    })
    
    socket.on('new_message', (data1) => {
        io.sockets.emit('new_message', {message : data1.message, username : socket.user})
    })
})


