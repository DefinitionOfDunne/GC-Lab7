"use strict"

var list = [
    {
        name: "lettuce",
        price: 1.50
    },
    {
        name: "ice cream",
        price: 5.50
    },
    {
        name: "delicious meats",
        price: 32.50
    }
];


function addTax(prices) {
    return prices * 0.06;
}

for (var i = 0; i < list.length; i++) {
    var total = 0;
    total = total + list[i].price;
    console.log(list[i].name, list[i].price);
}

console.log(total);

var totalWithTax = (total += addTax(total));

console.log(totalWithTax);
