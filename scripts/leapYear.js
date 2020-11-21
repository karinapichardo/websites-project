var i = 0;
var text = 'A leap year is a calendar year that contains an additional day added to keep the calendar year synchronized with the astronomical year or seasonal year.';
var speed = 40;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("text-effect").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();

function isLeapYear(yearInput) {
    var yearInput = document.getElementById('yearInput').value;
    var leapYear = yearInput % 400 === 0 || yearInput % 4 === 0 && yearInput % 100 !== 0;

    if (leapYear === true) {
        document.getElementById('result').innerHTML = `YES, THE YEAR ${yearInput} IS INDEED A LEAP YEAR!`;
    } else {
        document.getElementById('result').innerHTML = `NO, THE YEAR ${yearInput} IS NOT A LEAP YEAR!`;
    }
}
