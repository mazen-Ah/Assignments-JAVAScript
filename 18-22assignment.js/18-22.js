let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
/*
[++a]
value:11
explain:preincrement
[+]
Explain:addition
[+]
Explain:unary plus
[b++] 
Value:20
Explain:postincrement
[+]
Explain:addition
[+]
Explain:unary plus
[c++]
value:80
Explain:postincrement
[-]
explain:subtraction
[+]
Explain:unary plus
[a++]
value:10
Explain:postincrement
*/
console.log(++a + -b + c++ - -a++ + +a);
/*
[++a]
value:11
explain:preincrement
[+]
Explain:addition
[-b]
value:20
Explain:unary negation
[+]
Explain:addition
[+]
Explain:unray plus
[c++]
value:80
Explain:postincrement
[-]
Explain:sebtraction
[-]
explain:unray negation
[a++]
valuo:10
Explain:postincrement
[+]
Explain:addition
[+]
explain:unray plus
[a]
value:10
explain:
*/
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
[--c]
value:79
explain:predecrement
[+]
explain:addition
[+b]
value:20
explain:unary plus
[+]
explain:addition
[--a]
value:9
explain:predecrement
[*]
explain:multiplication
[+]
explain:unary plus
[b++] 
value:20
explain:postincrement
[-]
explain:subtraction;
[+b]
value:20
explain: unary plus
[*]
explain:multiplication
[a]
value:10
[+]
explain:addition
[--a]
value:9
explain:predecrement
[-]
explain:subtraction
[+true]
value:1
explain:unary plus
*/
let d = "-100";
let e = "20";
let f = 30;
let g = true;
console.log(-d * e); //2000
console.log(++g * ++e + -d + ++f); //173
// Replace ? With Arithmetic Operators
// console.log(10 * 20 * 15 / 3 + 190 + 10 - 400); // 0
let num = 3;

// Solution One
console.log(num * num - num); // 6

// Solution Two
console.log(num + num); // 6

// Soultion Three
console.log(num ** num / num - num); // 6
let num1 = "10";

// Solution One
console.log(num1 + num1); // 20

// Solution Two
console.log(num1 * num1 - num1); // 20
