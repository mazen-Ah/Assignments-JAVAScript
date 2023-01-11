// DOM
// - What Is DOM
// - DOM Selectors
// --- Find Element By ID
// --- Find Element By Tag Name
// --- Find Element By Class Name
// --- Find Element By CSS Selectors
// --- Find Element By Collection
// ------ title
// ------ body
// ------ images
// ------ forms
// ------ links
/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  Search
  - innerText
*/
/*
  DOM [Check Attributes]
  - Element.attributes
  - Element.hasAttribute
  - Element.hasAttributes
  - Element.removeAttribute
*/
/*
  DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild
*/
// for (i = 1; i <= 100; i++) {
//   const myele = document.createElement("div");
//   const myh3 = document.createElement("h3");
//   const myp = document.createElement("p");
//   myh3.innerHTML = `This Is Product `;
//   myele.appendChild(myh3);
//   myp.innerHTML = `This IS Paragraph `;
//   myele.appendChild(myp);
//   myele.className = "product";

//   document.body.appendChild(myele);
// }
// for (let i = 1; i <= 100; i++) {
//   let myD = document.createElement("div");
//   let myH = document.createElement("h3");
//   let myP = document.createElement("p");
//   let myText = document.createTextNode("product title" + [i]);
//   let myT = document.createTextNode("paragraph discreption" + [i]);
//   myD.className = "prudoct";
//   myH.appendChild(myText);
//   myP.appendChild(myT);
//   myD.appendChild(myH);
//   myD.appendChild(myP);
//   document.body.appendChild(myD);
// }
// ###################################################################
/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu
  --- onmouseenter
  --- onmouseleave

  --- onload
  --- onscroll
  --- onresize

  --- onfocus
  --- onblur
  --- onsubmit
/*
  DOM [Events]
  - Validate Form Practice
  - Prevent Default
*/
// const one = document.getElementsByTagName("div");
// const two = document.getElementsByClassName("element");
// const thr = document.querySelector(".element");
// const ff = document.querySelector("#elzero");
// const ss = document.querySelector("[name ='js']");
// const k = document.querySelector("div");
// const z = document.querySelectorall(".element");
// const x = document.querySelectorall("#elzero");
// const c = document.querySelectorall("[name ='js']");
// const v = document.querySelectorall("div");

// console.log(k);

// const mydiv = document.querySelectorAll("div img");
// mydiv.forEach((ele) => {
//   (ele.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"),
//     (ele.alt = "Elzero Logo");
// });
// console.log(mydiv);
// let dollarInput = document.querySelector("[name = 'dollar']");
// let myDiv = document.querySelector("[class = 'result']");

// dollarInput.oninput = function () {
//   myDiv.innerHTML = `{${dollarInput.value}} USD Dollar = {${(
//     dollarInput.value * 15.6
//   ).toFixed(2)}} Egyptian Pound`;
// };
// myele = document.querySelector("[class='one']");
// myele2 = document.querySelector("[class='two']");
// myele.setAttribute("title", "one");
// myele2.setAttribute("title", "two");

// myImg = document.images;
// [...myImg].map((ele) => {
//   if (ele.hasAttribute("alt")) {
//     ele.setAttribute("alt", "old");
//   } else {
//     ele.setAttribute("alt", "Elzero New");
//   }
//   return myImg;
// });
{
  /* <form action="">
      <input type="text" />
      <input type="submit" />
    </form> */
}
// const Test = document.querySelector(".The");
// const Value1 = document.querySelector(".Here");
// console.log(Value1);
// console.log(Test);
// Value1.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(e.target.Value);
//   console.log("Hello");
//   console.log(e);
// });
// const divstyle = "color:green;font-size:40px;background-color:#247BA0;";
// let numElements = document.querySelector("[name ='elements']");
// let elementText = document.querySelector("[name = 'texts']");
// let divOrselect = document.querySelector("[name = 'type']");
// let result = document.querySelector("[class='results']");
// let form = document.forms;

// numElements.setAttribute("min", "0");
// numElements.setAttribute("max", "15");
// form[0].onsubmit = function (e) {
//   e.preventDefault();
//   document.querySelectorAll(".box").forEach(function (e) {
//     e.remove();
//   });
//   for (let i = 0; i < numElements.value; i++) {
//     let myEle = document.createElement(divOrselect.value);
//     let mytext = document.createTextNode(elementText.value); f
//     myEle.className = "box";
//     myEle.title = "Element";
//     myEle.id = `id-${i + 1}`;
//     myEle.appendChild(mytext);
//     result.appendChild(myEle);
//   }
//   console.log(document.querySelectorAll(".box"));
//   document.querySelectorAll(".box").forEach((e) => (e.style = divstyle));
// };
let form = document.forms;
let elNum = document.querySelector("[name ='elements']");
let text = document.querySelector("[name = 'texts']");
let type = document.querySelector("[name = 'type']");
let results = document.querySelector("[class='results']");
elNum.setAttribute("min", "0");
form[0].onsubmit = (el) => {
  el.preventDefault();
  document.querySelectorAll(".box").forEach((el) => el.remove());
  for (let i = 1; i <= elNum.value; i++) {
    const ele = `<div class="box" title="Element" id="id-${i}" style="display: inline-block; width: 200px; margin: 20px;
                  padding: 10px; color: rgb(255, 255, 255); text-align: center;
                  background-color: rgb(255, 87, 34); border-radius: 5px;">${text.value}</div>`;
    results.insertAdjacentHTML("afterbegin", ele);
    // .........styling
  }
};
// styling
let input = document.querySelectorAll(".input");
let submit = document.querySelector("[type='submit']");
let box = document.querySelectorAll(".box");
for (let i = 0; i < input.length; i++) {
  input[i].style.display = "block";
  input[i].style.boxSizing = "border-box";
  input[i].style.width = "300px";
  input[i].style.padding = "10px";
  input[i].style.margin = "15px auto";
  input[i].style.borderRadius = "5px";
  input[i].style.border = "none";
  input[i].style.border = "solid 1px black";
  input[i].style.backgroundColor = "#eee";
}
submit.style.backgroundColor = "#009999";
submit.style.border = "none";
submit.style.color = "#fff";
submit.style.cursor = "pointer";
submit.style.padding = "15px 130px";
submit.style.borderRadius = "2%";
submit.style.margin = "0px auto";
submit.style.display = "flex";
//
