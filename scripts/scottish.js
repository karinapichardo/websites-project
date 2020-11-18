function toScottishScreaming(inputStr) {
    var inputStr = document.getElementById("sentence").value;
    var result = inputStr.replace(/[aiou]/gi, 'e').toUpperCase();

    document.getElementById("resultText").innerHTML = result;
    event.preventDefault();
}
