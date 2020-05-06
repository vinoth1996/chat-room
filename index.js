const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser');
const app = express()
const port = 3000 || process.env.port;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/chat', (req, res) => {
    res.render('chat');
});

server = app.listen(port, () => {
    console.log(`Server started on port`);
});

const io = require("socket.io")(server)

io.on('connection', (socket) => {
    // socket.emit('message', 'new user connected')
    socket.user = "Someone"

    socket.on('change_user', (data) => {
        console.log('name:' + data.username)
        socket.user = data.username
    })

    socket.on('new_message', (data) => {
        // console.log(socket.user);
        io.sockets.emit('new_message', {message : data.message, username : socket.user})
    })
})


