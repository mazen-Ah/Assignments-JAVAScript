function showDetails(a, b, c) {
  info = [a, b, c];
  for (i = 0; i < info.length; i++) {
    typeof info[i] === "string"
      ? (First = info[i])
      : typeof info[i] === "number"
      ? (second = info[i])
      : typeof info[i] === "boolean";
    info[i] === true ? (third = "available") : (third = "not availabel");
  }
  document.write(
    `<div>Hello ${First} Your Age Is ${second},You Are ${third} For Hire</div><br>`
  );
}
showDetails("mazen", 38, false);
//
function sayHello(theName, theGender) {
  theGender == "Male" ? (theGender = "Mr") : (theGender = "Miss");
  document.write(`<div>Hello ${theGender} ${theName}</div>`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
//
function calculate(firstNum, secondNum, operation = "add") {
  if (secondNum === undefined) {
    console.log(`Please Add A Second Number`);
  } else {
    if (operation === "subtract") {
      console.log(firstNum - secondNum);
    } else if (operation === "multiply") {
      console.log(firstNum * secondNum);
    } else {
      console.log(firstNum + secondNum);
    }
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
//
function ageInTime(theAge) {
  if (theAge > 10 && theAge < 110) {
    console.log(`Months => ${theAge * 12}
Weeks => ${theAge * 12 * 4}
Days => ${theAge * 12 * 30}
Hours => ${theAge * 12 * 30 * 24}
Minutes => ${theAge * 12 * 30 * 24 * 60}
Seconds => ${theAge * 12 * 30 * 24 * 60 * 60}
    `);
  } else {
    console.log(`Age Out Of Range`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

function createSelectBox(startYear, endYear) {
  document.write(`<Select>`);
  for (i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}"> ${i}</option>`);
  }
  document.write(`</Select>`);
}
createSelectBox(2000, 2021);
//

function multiply(...Numbers) {
  let result = 1;
  for (let i = 0; i < Numbers.length; i++) {
    if (typeof Numbers[i] === "string") {
      continue;
    } else {
      result *= parseInt(Numbers[i]);
    }
  }
  L;
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
