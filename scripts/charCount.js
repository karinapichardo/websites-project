function countCharacter(str, char) {
    var str = document.getElementById("sentence").value;
    var char = document.getElementById("character").value;
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++
        }
    }
    alert(`the letter *${char}* appeared ${count} time(s) within your sentence`);
}
