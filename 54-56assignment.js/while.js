let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];
x = 0;
for (; x < myAdmins.length; x++) {
  if (myAdmins[x] === "Stop") {
    break;
  }
}
document.write(`<div> We Have ${x} Admins</div><hr>`);
for (let x2 = 0; x2 < myAdmins.indexOf("Stop"); x2++) {
  document.write(`<div>"The Admin For Team ${x2 + 1} Is ${myAdmins[x2]}"</div>
<h3>Team Members:</h3>`);
  for (a = 0; a < myEmployees.length; a++) {
    if (myEmployees[a].startsWith(myAdmins[x2][0])) {
      document.write(`<p>${myEmployees[a]}</p>`);
    }
  }
  document.write(`<hr>`);
}
////
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
  if (typeof friends[index] === "string" && !friends[index].startsWith("A")) {
    console.log(friends[index]);
  }
  index++;
}
// Output
("1 => Sayed");
("2 => Mahmoud");
