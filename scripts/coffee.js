var i = 0;
var text = 'IF IT\'S FREE, IT\'S FOR ME!';
var speed = 40;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("text-effect").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();

function totalCups(numberOfCoffees) {
    var coffeeNum = document.getElementById('numberOfCoffees').value;
    var totalFreeCoffees = Math.floor(coffeeNum / 6);
    var coffeesNeeded = 6 - coffeeNum;

    if (totalFreeCoffees === 0) {
        var result = document.getElementById('result').innerHTML = `Sorry, no free coffees yet, keep buying!! you'll need to buy ${coffeesNeeded} more coffees to get your first free one.`;
    } else {
        var result = document.getElementById('result').innerHTML = `Total free coffees you get: ${totalFreeCoffees}! Way to go!!!!!`
    }
}
