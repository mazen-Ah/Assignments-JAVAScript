/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/
/*
  Array Methods
  - Length
*/
// Index Start From 0 [ 0, 1, 2, 3, 4 ]
/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/
/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/
/*
  Arrays Methods [Sort]
  - sort(Function [Opt])
  - reverse
*/
/*
  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
*/
/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array
  - join(Separator)
*/ 

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
const gg = my.slice(zero, my.indexOf("Gamal")).reverse()
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(my.indexOf("Mazero"), counter).reverse()); // ["Elham", "Mazero"]

// my[zero]="Elzero"
// console.log(my[zero])

console.log(`${my[2].slice([0],[2])}${my[1].slice([2],[6])}`)//"Elzero"
const A = (`${my[my.indexOf("Elham")].slice([zero],[-counter-length])}`)
console.log(`${A}${my[my.indexOf("Mazero")].slice([my.indexOf("Elham")])}`)
const x = (my[my.indexOf("Mazero")].slice(my.indexOf("Gamal")))
console.log(x[zero]+x.at(x.lastIndexOf()).toUpperCase())

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
// myFriends.splice(num)
// Method 1
myFriends.length = num
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// // Method 2
myFriends.pop(num)
console.log(myFriends.slice(-num)); // ["Ahmed", "Elham", "Osama"];

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = finalArr.concat(arrOne,arrTwo).sort().reverse()
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.pop().shift().toUpperCase().slice(website.length));

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if(haystack.indexOf(needle) === 1){
  console.log("Found")
};

if(haystack.lastIndexOf(needle) === 1){
  console.log("Found")
};

if(haystack.includes(needle) === true){
  console.log("Found")
};

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = allArrs.concat(arr1, arr2).sort().join("").toLowerCase().slice(arr2.length)
console.log(allArrs); // fxy