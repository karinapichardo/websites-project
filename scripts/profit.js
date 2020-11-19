function profit(cost, sales, inventory) {

    var companyName = document.getElementById('companyName').value;
    var inventory = document.getElementById('inventory').value;
    var cost = document.getElementById('costPrice').value;
    var sales = document.getElementById('sellPrice').value;

    var totalSales = sales * inventory;
    var totalCost = cost * inventory
    var profit = Number.parseFloat(totalSales - totalCost).toFixed(2);

    document.getElementById('result').innerHTML = `The total profit for ${companyName} is $${profit}`;
    event.preventDefault();
}
