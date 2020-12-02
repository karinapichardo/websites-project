function missingAngle(firstDegree, secondDegree) {
    var firstDegree = parseInt(document.getElementById('firstDegree').value);
    var secondDegree = parseInt(document.getElementById('secondDegree').value);

    document.getElementById('result').innerHTML =
        (firstDegree + secondDegree > 180) ? 'Sorry, not a triangle.' :
        (firstDegree + secondDegree > 90) ? 'The missing angle is an acute angle.' :
        (firstDegree + secondDegree === 90) ? 'The missing angle is a right angle.' :
        (firstDegree + secondDegree < 90) ? 'The missing angle is an obtuse angle.' :
        null;
    event.preventDefault();

    var imgDisplay = document.querySelectorAll('.images')
    for (var i = 0; i < imgDisplay.length; i++) {
        imgDisplay[i].style.display = 'none';
    }

    if (firstDegree + secondDegree > 180) {
        imgDisplay;
    } else if (firstDegree + secondDegree > 90) {
        document.getElementById('acute-triangle').style.display = 'block';
    } else if (firstDegree + secondDegree === 90) {
        document.getElementById('right-triangle').style.display = 'block';
    } else if (firstDegree + secondDegree < 90) {
        document.getElementById('obtuse-triangle').style.display = 'block';
    }
}
