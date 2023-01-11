let title = "the Elzero";
let description = "The Elzero Wep School";
let data = "25/10";
let markup = `
<h3>${title}</h3>

<p>${description}</p>

<span>${data}</span>

`;
document.write(markup.repeat(3));

let numberOne = 10;
let numberTwo = 20;
console.log("" + numberOne + numberTwo);
console.log(
  "type of " +
    ("" + numberOne + numberTwo) +
    " " +
    typeof ("" + numberOne + numberTwo)
);
let aa = "" + numberOne + numberTwo;
console.log(`type of ${aa} ${typeof aa}`);
console.log(numberOne + "\n" + numberTwo);
console.log(`${numberOne} \n${numberTwo}`);

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

let a = "I";
let b = "m";
let c = "In";
let d = "Love";
let e = "With";
let f = "JavaScript";
console.log(
  a +
    "'" +
    b +
    " " +
    c +
    "\n" +
    "\\\\" +
    "\n" +
    d +
    " \\\\ " +
    '""" ' +
    "'''" +
    "\n" +
    "++ " +
    e +
    " ++" +
    "\n" +
    "\\" +
    '"""' +
    "\\" +
    '"""' +
    "\n" +
    '""' +
    f +
    '""'
);
let one = 21;
let zero = 20;
console.log(`_${one}_${zero}${one}_${zero}${one}_${zero}${one}_${zero}`);
