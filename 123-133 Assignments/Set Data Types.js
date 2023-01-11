/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log([...n1, ...n2].length * Math.max(...n1)); // 210

////
const setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
setOfNumbers.values(2);
console.log(setOfNumbers);
console.log(Array.from(setOfNumbers).slice(-1));
//
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log(new Set(myFriends.sort()));
// Needed Output
// 4
// ("Ahmed", "Mahmoud", "Osama", "Sayed")
// ];
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};
const A = ({ username, role, country } = myInfo);
const nMap = new Map();
nMap.set(Object.keys(myInfo)[0], username);
nMap.set(Object.keys(myInfo)[1], role);
nMap.set(Object.keys(myInfo)[2], country);
console.log(nMap);
console.log(nMap.size);
console.log(nMap.has(Object.keys(myInfo)[1]));
// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true
let theNumber = 100020003000;

let myArray = Array.from(new Set([...`${theNumber}`])).sort();
myArray.shift();
console.log(+myArray.join(""));
// Needed Output
// 123;
let theName = "Elzero";
console.log(Array.from(theName));
console.log(theName.split(""));
console.log([...theName]);
console.log(Object.assign([], theName));

let theArr = [];
for (let i = 0; i < theName.length; i++) {
  theArr.push(theName[i]);
}
console.log(theArr);
// Needed Output
// ("E", "l", "z", "e", "r", "o")
let chars1 = ["A", "B", "C", "D", "E", 10, 15, 6];
console.log(chars1.copyWithin(3));
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
console.log(chars2.sort().copyWithin(0, 4, -1));

// Needed Output
// ["A", "B", "C", "D", "A", "B", "C", "D", "E"];
let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];

console.log(chars3.copyWithin(2, 0));

// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]
let chars4 = ["A", "B", "C", "D", "E", 10, 15, 6];
console.log(chars4.sort());
console.log(chars4.sort().copyWithin(0, 3, 6));
/////
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
console.log([...numsOne, ...numsTwo]);
console.log(numsOne.concat(numsTwo));
numsOne.push(...numsTwo);
console.log(numsOne);
// console.log(numsOne.concat(numsTwo));

// Needed Output
// [1, 2, 3, 4, 5, 6]
