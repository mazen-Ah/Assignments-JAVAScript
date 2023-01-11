/*
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
    // Block Of Code
  }

*/
/* theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 To 60")
  : theAge > 60
  ? console.log("Larger Than 60")
  : console.log("Unknown");
/*
  Nested If
*/
/*
  Conditional (Ternary) Operator
*/
// Condition ? If True : If False
/*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/
let a = 10;
if ( a > 10) {
    console.log("aaaaaa");
}
else if (a != 10) {
        console.log("g");
    }
else if (a !== 10) {
        console.log("ccccccc");
    }
else {
        console.log("mazen")
    }
//

let g = 50;
g < 5
? console.log("kk")
:g ==10
? console.log("yes")
: g != 10
? console.log("no")
: console.log ("random")
let pp = 9;
console.log(pp > 10 ? "yes" : "no");
let st = "Elzero Web School";
//
if (st.at(st.indexOf("W")).toLowerCase() === "w") {
    console.log("Good");
}

if (st.length * 2) {
    console.log("Good")
}

if (typeof st.indexOf() === "number") {
    console.log("Good");
  }

  if (st.split(" ")[0].repeat(2) === "ElzeroElzero") {
    console.log("Good");
  }

// Test Case 1
let num = 9; // "009"

num < 10 
? console.log("00"+num)
: 99> num && num >10 
? console.log("0"+num)
: num >= 100
? console.log(num.toString())
: console.log("no")

if(num < 10) {
    console.log("00"+num)
}
    else if(99>num&&num > 10){
    console.log("0"+num)
    }
    else if (num >= 100){
        console.log(num.toString())
    }
    else {
        console.log(Good)
    }
//     let num1 = 9;
//     let str = "9";
//     let str2 = "20";
    
//     // Output
//     "{num1} Is The Same Value As {str}"
//     "{num1} Is The Same Value As {str} But Not The Same Type"
//     "{num1} Is Not The Same Value Or The Same Type As {str2}"
//     "{str} Is The Same Type As {str2} But Not The Same Value"

// num1 == str
// ? console.log("{num1} is the same value as {str}")
// :num1 == str &&  typeof num1 !== typeof str 
// ? console.log("{num1} Is The Same Value As {str} But Not The Same Type")
// :num1 != str2 && typeof num1 !== typeof str2
// ? console.log("{num1} Is Not The Same Value Or The Same Type As {str2}")
// :typeof str === typeof str2 && str != str2
// ? console.log("{str} Is The Same Type As {str2} But Not The Same Value")  
// : console.log("Good")
//
let num10 = 10;
let num20 = 30;
let num30 = "30";

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

num30 > num10 && typeof num30 !== typeof num10
?console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")
:num30 == num20 && typeof num30 !== typeof num10
?console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")
:num30 !== num10 && num30!==num20 
console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}")
// Edit What You Want Here
/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1
// Edit What You Want Here

let num1 = 15;
let num2 = 1;
let num3 = 15;
let num4 = 50;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}









