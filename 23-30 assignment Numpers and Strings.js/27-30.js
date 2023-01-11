/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/
/*
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/
/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract) ---(deprecated)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

const a = "Elzero Web School";
console.log(a.charAt(2).toUpperCase()+a.slice(3, 7));
console.log(a.charAt(13).repeat(8));
console.log(a.split(" ",1));
console.log(`${a.substring(0, 6)} ${a.substring(11)}`);///////
console.log(a.at(0).toLowerCase()+a.slice(1,16).toUpperCase()+a.charAt(a.length-1).toLowerCase())
//
let userName = "Elzero";
userName = userName.toLowerCase()
console.log(userName.at(0)); // e
console.log(userName.charAt(0)); // e
console.log(userName[0]); // e
console.log(userName.slice(0,1)); // e
console.log(userName.substring(0, 1)); // e
console.log(userName.split("")[0].repeat(3)); // eee --
//
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True




