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
}
