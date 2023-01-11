// let chosen = 3;

// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// if (chosen === 1) {
//   let [
//     {
//       title: t,
//       age: a,
//       available: av,
//       skills: [skillOne, skillTwo],
//     },
//   ] = myFriends;
//   console.log(`Name: ${t}, Age: ${a},  Available: ${av}, Skill: ${skillTwo}`);
// } else if (chosen === 2) {
//   let [
//     ,
//     {
//       title: t,
//       age: a,
//       available: av,
//       skills: [skillOne, skillTwo],
//     },
//   ] = myFriends;
//   console.log(`Name: ${t}, Age: ${a},  Available: ${av}, Skill: ${skillTwo}`);
// } else {
//   let [
//     ,
//     ,
//     {
//       title: t,
//       age: a,
//       available: av,
//       skills: [skillOne, skillTwo],
//     },
//   ] = myFriends;
//   console.log(`Name: ${t}, Age: ${a},  Available: ${av}, Skill: ${skillTwo}`);
// }
// ///////
// let myNumbers = [1, 2, 3, 4, 5];

// [a, b, c, d, e] = myNumbers;

// console.log(a * e); // 5
// /////
// let mySkills = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   ["PHP", "Python", ["Django", "Laravel"]],
// ];

// [a, b, c, [d, e, [f, g]]] = mySkills;

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];
// allfriends = arr1.concat(arr2, arr3);
// console.log(allfriends);
// // Play With Arrays To Prepare For Destructuring
// [c, , , , , , , a, b] = allfriends;
// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// // My Best Friends: Shady, Mahmoud, Ahmed
// const member = {
//   age: 30,
//   working: false,
//   country: "Egypt",
//   hobbies: ["Reading", "Swimming", "Programming"],
// };

// ({ age: a, working: w, country: c, hobbies: [h1, h2, h3] = hobbies } = member);

// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// // My Age Is 30 And Iam Not Working

// console.log(`I Live in ${c}`);
// // I Live in Egypt

// console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming
const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};
const { title: t, developer: d, releases } = game;
const [o, a] = Object.keys(releases);
const {
  ["Oath In Felghana"]: [u, j],
  ["Ark Of Napishtim"]: { US: u_price, JAP: j_price },
  Origin: or,
} = releases;

console.log(u_price, j_price);
// Write Your Destructuring Assignment/s Here
console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim

console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in USA Is ${j_price}`);
// Ark Of Napishtim Price in USA Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD
