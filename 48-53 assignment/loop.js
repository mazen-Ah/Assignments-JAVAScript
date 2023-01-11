/*
  Loop
  - For
  for ([1] [2] [3]) {
    // Block Of Code
  }
*/
/*
  Loop
  - Loop On Sequences
*/

// let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];

// let onlyNames = [];

// for (let i = 0; i < myFriends.length; i++) {
//   if (typeof myFriends[i] === "string") {
//     onlyNames.push(myFriends[i]);
//   }
// }

// console.log(onlyNames);

// console.log(myFriends[0]);
// console.log(myFriends[1]);
// console.log(myFriends[2]);
// console.log(myFriends[3]);
// console.log(myFriends[4]);

// for (let i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i]);
// }
/*
  Loop
  - Nested Loops
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// let colors = ["Red", "Green", "Black"];

// let models = [2020, 2021];

// for (let i = 0; i < products.length; i++) {
//   console.log("#".repeat(15));
//   console.log(`# ${products[i]}`);
//   console.log("#".repeat(15));
//   console.log("Colors: ");
//   for (let j = 0; j < colors.length; j++) {
//     console.log(`- ${colors[j]}`);
//   }
//   console.log("Models: ");
//   for (let k = 0; k < models.length; k++) {
//     console.log(`- ${models[k]}`);
//   }
// }
/*
  Loop Control
  - Break
  - Continue
  - Label
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// let colors = ["Red", "Green", "Black"];

// mainLoop: for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
//   nestedLoop: for (let j = 0; j < colors.length; j++) {
//     console.log(`- ${colors[j]}`);
//     if (colors[j] === "Green") {
//       break mainLoop;
//     }
//   }
// }
/*
  Loop For Advanced Example
*/
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let i = 0;
// for (;;) {
//   console.log(products[i]);
//   i++;
//   if (i === products.length) break;
// }
/*
  Products Practice
*/
// for (const item of products ) {
//   console.log(item)
// }
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let colors = ["Red", "Green", "Blue"];
// let showCount = 3;

// document.write(`<h1>Show ${showCount} Products</h1>`);

// for (let i = 0; i < showCount; i++) {
//   document.write(`<div>`);
//   document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
//   for (let j = 0; j < colors.length; j++) {
//     document.write(`<p>${colors[j]}</p>`);
//   }
//   document.write(`<p>${colors.join(" | ")}</p>`);
//   document.write(`</div>`);
// }
// let start = 10;
// let end = 100;
// let exclude = 40;

// mainloop: for (let i = start; start <= end; start+=i){
//   if(start === exclude){
//     continue;
//   }
//   console.log(start);
// }
// Output
10;
20;
30;
50;
60;
70;
80;
90;
100;

// let start = 10;
// let end = 0;
// let stop = 3;

// mainloop: for(; start >= stop; start--){
//   if (start >= stop) {
//     console.log(`${end}${start}`)
//   }
//   else if (start == 10){
//     console.log(`${start}`)
//   }
// }
// let start = 1;
// let end = 6;
// let breaker = 2;

// for (;start <= end; start++){
//    console.log(start);
// for (;breaker < end; breaker+=breaker){
//   console.log(`-- ${breaker}`);
// }
// }
// for (let i = start; i <= end; i++){
//   console.log(i);
//   for (let j = breaker; j < end; j+= breaker){
//     console.log(`-- ${j}`)
//   }
// }

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4
// let index = 10;
// let jump = 2;
// let end = 0;

// for (;;) {
//   console.log(index)
//   index-=jump;
//   if (index < jump*jump)
//   break;
// }

// // Output
// 10
// 8
// 6
// 4
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// for(let ii = 0; ii < friends.length; ii++){
//   if(friends[ii][0] === letter.toUpperCase()){
//     continue;
//   }else{
//     console.log(`${ii + 1} => ${friends[ii]}`);
//   }
// };
// // Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

// let start = 0;
// let swappedName = "elZerODdg";
// let swappedNameFinished="";

// for(let i = start; i < swappedName.length; i++){
//   if(swappedName[i] === swappedName[i].toUpperCase()){
//     swappedNameFinished += swappedName[i].toLowerCase();
//   }
//   else{
//     swappedNameFinished += swappedName[i].toUpperCase();
//   }
// }
// console.log(`${swappedNameFinished}`);

// // Output
// "ELzERo"

const start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start; i < mix.length; i++) {
  if (typeof mix[i] === "string" || i === 0) {
    continue;
  }
  console.log(mix[i]);
}
