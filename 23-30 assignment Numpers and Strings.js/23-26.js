let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

console.log(Math.floor(Math.min(a, b, c, d)));
console.log(Math.trunc(Math.pow(a, c)));
console.log(Math.trunc(a ** c));
``;
console.log(a ** Math.trunc(d));
console.log(Math.floor(d)); //2
console.log(Math.round(d)); //2
console.log(Math.trunc(d)); //2
console.log(parseInt(d)); //2
console.log(
  parseFloat(Math.floor(b) / Math.ceil(d))
    .toFixed(2)
    .toString()
); //66.67 => string
console.log(parseInt(Math.ceil(b) / Math.ceil(d))); //67 => Numper
console.log(Math.floor(-2.4)); //-2
console.log(Math.ceil(2.4)); //3
console.log(Math.trunc(2.4)); //2
//
// Your Solutions
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
console.log(1e5); // 100000
console.log(Math.pow(10, 5)); // 100000
//
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER.toString().length); //16 ------
//
let myVar = "100.56789 Views";

console.log(parseInt(myVar) && parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57 --------
//
let num = 10;

console.log(Number.isInteger(num) && num.toString().length); // 2---
//
let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(); // 10
//
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
