var response = prompt("First thing's first, are you allergic to ice cream?");

if (response === "no" || response === "NO") {
    alert("Okay, great! let's get started");
} else {
    alert("Oh no! sorry! :(");
}

function flavors() {
    document.getElementById('flavors').innerHTML = 'Vanilla, Chocolate, Strawberry';
}

function toppings() {
    document.getElementById('toppings').innerHTML = 'Sprinkles, Caramel, Whipped Cream';
}

function combinations(flavors, toppings) {
    var flavors = ['Vanilla', 'Chocolate', 'Strawberry'];
    var toppings = ['Sprinkles', 'Caramel', 'Whipped Cream'];

    for (var i = 0; i < flavors.length; i++) {
        for (var j = 0; j < toppings.length; j++) {
            alert(`you can have ${flavors[i]} with ${toppings[j]}`);
        }
    }
}
