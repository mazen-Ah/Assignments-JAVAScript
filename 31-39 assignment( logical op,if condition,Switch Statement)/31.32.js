/*
  Comparison Operators
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/
/*
  Logical Operators
  - ! Not
  - && And
  - || Or
*/
console.log(100 == "100"); // true
console.log(100 <= 1000); // true
console.log(110 <= 100 || 10 <= 20); // true
console.log(-10 == "-10"); // true
console.log(! -50 !== +"-40"); // true
console.log(! 10 != -"-40"); // true
console.log(! "10" !== 10); // true
console.log(! 20 == false); // true
//
let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(num1 != num2); // true
console.log(num1 !== num2); // true
console.log(num1 <= num2); // true
console.log(typeof num1 === typeof num2); // true
console.log(!(num1 === num2)); // true 
//
let a = 20;
let b = 30;
let c = 10;

console.log(a == b && a == c || a < b); // true
console.log(a < b != a < c); // true 
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true