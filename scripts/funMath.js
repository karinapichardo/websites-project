function divisibleBy(firstNum, secondNum) {
    var firstNum = document.getElementById('firstNumber').value;
    var secondNum = document.getElementById('secondNumber').value;

    while (firstNum % secondNum != 0) {
        firstNum++;
    }
    document.getElementById('result').innerHTML = `${firstNum} is greater than both numbers AND it's also divisible by ${secondNum}! YAYY!!`;
}
