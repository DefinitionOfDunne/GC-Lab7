"use strict"

var list = {
    name: ["lettuce", "salmon", "candy"],
    price: [.50, 5.00, 3.50, 9.00]
};

function addTax(prices) {
  return prices * 0.06;
}

for (var i = 0; i < list.name.length; i++) {
    var total = list.price.reduce(function(sum, value) {
        return sum + value;
    }, 0);
    console.log(list.name[i], list.price[i]);
}

console.log(total);

var totalWithTax = (total += addTax(total));

console.log(totalWithTax);
