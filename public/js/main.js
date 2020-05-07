var socket =io();

$('#sendMessage').click(function(event){
    event.preventDefault();
    socket.emit('new_message', { message : $('#newMessage').val() })
})

socket.on('new_message', (data) => {
    $('#messages').append(`<div class="container"><b>`+ data.username +`</b><p>`+ data.message +`</p></div>`)
    $('#newMessage').val('')
})

$('#sendUserName').click(function(){
    socket.emit('change_user', { username : $('#userName').val() })
})
