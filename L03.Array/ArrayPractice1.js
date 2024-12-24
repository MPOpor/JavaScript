let values1 = ['Apple', 1, 'Fries'];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 9, 'Apple'];

// Find common elements
let commonElements = values1.filter(element => values2.includes(element) && values3.includes(element));

console.log(commonElements);
