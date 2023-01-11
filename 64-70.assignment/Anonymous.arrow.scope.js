function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    // Write Your Code Here
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
    let Fname = zName.slice(0, zName.indexOf(" "));
    let Lname = zName.slice(zName.indexOf(" "), zName.length);
    return `${Fname} ${Lname[1].toUpperCase()}.`;
  }
  function ageWithMessage(zAge) {
    let message = "";
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
    let age = zAge.slice(0, zAge.indexOf(" "));
    return `Your Age Is ${age}`;
  }
  function countryTwoLetters(zCountry) {
    let message = "";
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
    let Country = zCountry.slice(0, 2).toUpperCase();
    return `${Country}`;
  }
  function fullDetails() {
    // Write Your Code Here
    return `Hello ${namePattern(zName)}, ${ageWithMessage(
      zAge
    )}, You Live In  ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

function itsMe() {
  return `Iam A Normal Function`;
}

itsMe = () => {
  return `Iam A Normal Function`;
};

console.log(itsMe()); // Iam A Normal Function

urlCreate = (protocol, web, tld) => {
  return `${protocol}://www.${web}.${tld}`;
};

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
//
checker = (zName) => {
  return (status) => {
    return (salary) => {
      return status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;
    };
  };
};

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
//
function specialMix(...data) {
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    data[i] = parseInt(data[i]);
    if (isNaN(data[i])) {
      continue;
    }
    result += data[i];
  }
  if (result === 0) {
    return "All Is Strings";
  } else {
    return result;
  }
}

console.log(specialMix(25, "eas", "jor", 25)); // 50
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
////
let names = function (...name) {
  return `string [${name.join("],[")}] => Done !`;
};
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

// Regular Function
let myNumbers = [20, 50, 10, 60];
let calc = (one, two, ...nums) => Number(one + two + +nums);
console.log(calc(10, myNumbers[3], myNumbers[2]));
