function sendMessage() {
    var sendButton = document.querySelector('#sendButton');
    var messageIn = document.querySelector('#messageIn');
    var messageOut = document.querySelector('#messageOut');

    sendButton.addEventListener('click', function () {
        var content = messageIn.value;
        messageOut.innerHTML = content;
    })
}

setInterval(sendMessage);
