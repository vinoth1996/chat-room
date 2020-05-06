var socket =io();

$('#sendMessage').click(function(event){
    event.preventDefault();
    socket.emit('new_message', { message : $('#newMessage').val() })
})

socket.on('new_message', (data) => {
    // alert(data.username);
    $('#newMessage').val('')
    $('#messages').append(`<div class="container"><b>`+ data.username +`</b><p>`+ data.message +`</p></div>`)
})

$('#sendUserName').click(function(){
    socket.emit('change_user', { username : $('#userName').val() })
})
