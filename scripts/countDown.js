function countDown(inputNumber) {
    var inputNumber = document.getElementById('inputNumber').value;
    var arrCountDown = [];

    for (var i = 0; i <= inputNumber; i++) {
        arrCountDown.push(i);
    }
    document.getElementById('result').innerHTML = arrCountDown.reverse();
}
