// assignment One
// let myprompt = prompt("Print Number From – To", "Example: 5-20");
// let resualt = myprompt.split("-");
// let start;
// let end;
// if (+resualt[0] < +resualt[1]) {
//   start = +resualt[0];
//   end = +resualt[1];
// } else {
//   start = +resualt[1];
//   end = +resualt[0];
// }
// let contentdiv = document.createElement("div");
// document.body.appendChild(contentdiv);
// let startdiv = document.createElement("div");
// startdiv.append(start);
// contentdiv.append(startdiv);
// function countDown() {
//   let divs = contentdiv.cloneNode();
//   divs.append(+contentdiv.lastChild.textContent + 1);
//   contentdiv.append(divs);
//   if (+contentdiv.lastChild.textContent === +end) {
//     clearInterval(counter);
//   }
// }
// let counter = setInterval(countDown, 0);
// assignment two
function mypopup() {
  let Button = document.createElement("button");
  Button.append("X");

  let H1 = document.createElement("h1");
  H1.append("Welcome");

  let P = document.createElement("p");
  P.append("Welcome To Elzero Web School");

  let Div = document.createElement("div");
  Div.append(Button);
  Div.append(H1);
  Div.append(P);

  //....................style
  Div.style.cssText = `
  width: 50%;
  text-align: center;
  border: 1px solid black;
  border-radius: 10px;
  z-index: 10;
  background-color: #bc4adb57;
  padding:30px  ;
  position: fixed;
  left: 50%;
  top:50%;
  transform: translate(-50%, -50%);`;

  Button.style.cssText = `
  position: fixed;
  right: -15px;
  top: -15px;
    background-color: red;
  color: wheat;
    font-size: 25px;
    border-radius: 50%;`;

  Button.onclick = function () {
    Div.style.display = "none";
  };

  document.body.appendChild(Div);
}

setTimeout(mypopup, 5000);
// assignment three
// const div = document.createElement("div");
// div.textContent = `10`;
// document.body.append(div);

// function countDown() {
//   div.innerHTML -= 1;
//   if (div.innerHTML === "0") {
//     clearInterval(counter);
//     // location.href = "https://elzero.org/";
//   }
//   if (div.innerHTML === "5") {
//     window.open(
//       "https://elzero.org/",
//       "",
//       "width=400 height=600 top=500 left=500"
//     );
//   }
// }

// const counter = setInterval(countDown, 1000);
