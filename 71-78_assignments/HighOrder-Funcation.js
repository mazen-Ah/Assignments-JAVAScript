let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

const mixElzero = mix.reduce((ele, curr) => {
  return isNaN(curr) ? ele + curr : ele;
}, "");
console.log(mixElzero);
// Elzero
let mix_Elzero = mix
  .map(function (ele, index, arr) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .reduce(function (acc, current) {
    return acc + current;
  });
console.log(mix_Elzero);
// Elzero
let myString = "EElllzzzzzzzeroo";
let removeDublicate = myString
  .split("")
  .filter((ele, index, arr) => {
    return arr[index - 1] !== ele;
  })
  .join("");
console.log(removeDublicate);

let myArray = ["E", "l", "z", ["e", "r"], "o"];
let returnElzero = myArray.reduce((acc, curr) => {
  return acc + (Array.isArray(curr) ? curr.join("") : curr);
});
// let returnElzero = myArray.flat().join("");
console.log(returnElzero);
//
let numsAndStrings = [1, 10, "-10", -20, 5, "A", 3, "B", "C"];
const newarray = numsAndStrings
  .filter((ele) => isFinite(ele))
  .map((ele) => -ele);
// [-1, -10, 10, 20, -5, -3]
console.log(newarray);
let nums = [2, 12, 11, 5, 10, 1, 99];
const result = nums.reduce((acc, curr) => {
  return curr % 2 === 0 ? acc * curr : acc + curr;
}, 1);
console.log(result);
// 500
//
let myString1 = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

const solution = myString1
  .split(",")
  .filter((ele) => {
    return !isFinite(ele);
  })
  .join("")
  .slice(1, -1)
  .replaceAll("_", " ");
console.log(solution); // Elzero Web School
