// creates text effect   

var i = 0;
var text = "RRandom Word Generator";

function typing() {
    if (i < text.length) {
        if (document.getElementById("text") != null) {
            document.getElementById("text").innerHTML += text.charAt(i)
        }
        i++;
        setTimeout(typing, 50);
    }
}
typing();

// generates random word

var words = ['computer', 'science', 'programming', 'love', 'superstar', 'cool', 'amazing', 'dude', 'paper', 'toys', 'data science', 'fashion', 'finance', 'baby', 'fruits', 'racer', 'creative', 'juice', 'wall', 'numbers', 'cartoon', 'tongue', 'news', 'poll', 'twin', 'flame', 'data', 'cherries', 'top', 'crazy', 'you', 'me', 'kiss'];


function roundButton() {
    var button = document.getElementById("round-button");
    var insideDiv = document.getElementById("container4");
    button.addEventListener('click', function () {
        var word = words[Math.floor(Math.random() * words.length)];
        insideDiv.innerHTML = word;
    })
}
setInterval(roundButton);
