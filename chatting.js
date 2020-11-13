/*const socket = io();

document.getElementById("chatForm").onsubmit = function() {
    console.log("hi");
}


document.getElementById("sendButton").onclick = function() {
    console.log("hi");
}

socket.on('chatMessage', msg => {
    console.log(msg);
    var chat_list = document.getElementById("messages");
    var new_msg = "<li>"+msg;
    chat_list.appendChild(new_msg);
});
*/
//const socket = io();

let sendButton = document.getElementById("sendButton");

sendButton.addEventListener('click', function() {
    var msg = document.getElementById("msgInput").value;
    console.log(msg);
    socket.emit('chatting', {message:msg});
});

socket.on('chatting', (msg)=> {
    var messages = document.getElementById("messages");
    var li = document.createElement('li');
    messages.appendChild(li).appendChild(document.createTextNode(msg));
    console.log("success");
  });