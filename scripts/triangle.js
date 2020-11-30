function missingAngle(firstDegree, secondDegree) {
    var firstDegree = parseInt(document.getElementById('firstDegree').value);
    var secondDegree = parseInt(document.getElementById('secondDegree').value);

    if (firstDegree + secondDegree > 180) {
        document.getElementById('result').innerHTML = 'Sorry, not a triangle.'
        event.preventDefault();
    } else if (firstDegree + secondDegree > 90) {
        document.getElementById('result').innerHTML = 'The missing angle is an acute angle.';
        event.preventDefault();
    } else if (firstDegree + secondDegree === 90) {
        document.getElementById('result').innerHTML = 'The missing angle is a right angle.';
        event.preventDefault();
    } else if (firstDegree + secondDegree < 90) {
        document.getElementById('result').innerHTML = 'The missing angle is an obtuse angle.';
        event.preventDefault();
    }
}
