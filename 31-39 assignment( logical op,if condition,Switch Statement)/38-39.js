let job ="IT";
let salary = 0;

// if (job === "Manager") {
//   salary = 8000;
// } else if (job === "IT" || job === "Support") {
//   salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//   salary = 7000;
// } else {
//   salary = 4000;
// }

// switch (job) {
//     case "Manager":
//     salary = 8000
//     break;
//     case "Support":
//     case "IT":
//     salary = 6000
//     break;
//     case "developer":
//     case "designer":
//     salary = 7000
//     break;
//     default: 
//     salary = 4000
// }
// console.log(`my money is ${salary}`)

let holidays = 3;
let money = 0;

if (holidays == 0) {
    money = 5000;
}
else if (holidays == 1 || holidays == 2 ){
    money = 3000;
}
else if (holidays == 3){
    money = 2000;
}
else if (holidays == 4){
    money = 1000;
}
else if (holidays == 5){
    money = 0;
}
else {
    money = 0;
}
console.log(`My Money is ${money}`);

holidays == 0
? money = 5000
: holidays == 1 || 2
? money = 3000
: holidays == 3 
? money = 2000
: holidays == 4
? money = 1000
:holidays == 5
? money = 0
:money = 0

console.log(`My Money is ${money}`);

let day ="  tuesday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
switch (day.trim()[0].toUpperCase()+day.trim().slice(1)) 
{
    case "friday":
    case "Saturday":
    case "Sunday":
    console.log("No Appointments Available")
    break;
    case "Monday":
    case "Thursday":
    console.log("From 10:00 AM To 5:00 PM")
    break;
    case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM")
    break;
    case "Tuesday":
    console.log("From 10:00 AM To 7:00 PM")
    break;
    default:
    console.log("Its Not A Valid Day")
}
//mm = "  mazen  ".trim()
// console.log(mm.trim()[0].toUpperCase()+mm.trim().slice(1)) 
//console.log(mm[0].toUpperCase()+mm.slice(1)) 


