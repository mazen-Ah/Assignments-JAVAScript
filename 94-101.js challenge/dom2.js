/*
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/
/*
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/
/*
  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/
/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/
/*
  DOM [Cloning]
  - cloneNode(Deep)
*/
/*
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
//   - Error Test

//   Search
//   - Capture & Bubbling JavaScript
//   - removeEventListener
// */
// build Header
window.onload = () => {
  document.body.style.cssText =
    "width: 100%; height: 100%; margin: 0px; padding: 0px;";
  buildHeader();
  buildContent();
  buildFooter();
};
// Global Variables
const createHeader = document.createElement("header");
const createFooter = document.createElement("footer");
const logoDiv = document.createElement("div");
const contentDiv = document.createElement("div");
const createUl = document.createElement("ul");
const createLi = document.createElement("li");
const createPara = document.createElement("p");
const createHeading = document.createElement("h1");

// build Header
function buildHeader() {
  document.body.append(createHeader);
  createHeader.prepend(logoDiv);
  createHeader.append(createUl);
  //Page Logo
  const logo = document.querySelector("header > div");
  logo.textContent = "Mazen";
  // Page Nav
  const headNav = document.querySelector("header > ul");
  for (let i = 0; i < 4; i++) {
    headNav.append(createLi.cloneNode(true));
  }
  const navList = document.querySelectorAll("header > ul li");
  navList[0].textContent = "Home";
  navList[1].textContent = "About";
  navList[2].textContent = "Service";
  navList[3].textContent = "Contact";

  // CSS Styling
  createHeader.style.cssText =
    "display: flex; justify-content: space-between; align-items: center; padding: 0px 15px; font-family: arial; padding: 15px 20px; background-color: white; box-shadow: 0px -15px 20px 2px #0000008c;";

  logo.style.cssText =
    "font-size: 19px; font-weight: 700; letter-spacing: 1.5px; color: darkcyan;";

  headNav.style.cssText =
    "display: flex; justify-content: space-between; gap: 10px; list-style: none; font-size: 15px; color: #000000b3; padding: 0; margin: 0;";
}

// build Content

function buildContent() {
  createHeader.after(contentDiv);
  contentDiv.className = "content";
  for (let x = 0; x < 15; x++) {
    contentDiv.append(document.createElement("div"));
    const productDiv = document.querySelectorAll(".content div");
    productDiv[x].className = "product";
    productDiv[x].prepend(createHeading.cloneNode(true));
    let prodHead = document.querySelectorAll(".product h1");
    prodHead[x].textContent = `${x + 1}`;
    productDiv[x].append(createPara.cloneNode(true));
    let prodPara = document.querySelectorAll(".product p");
    prodPara[x].textContent = `Product`;
  }
  // Css Styling
  contentDiv.style.cssText =
    "    display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; background-color: #eeeeee; padding: 15px";

  let products = document.querySelectorAll(".product");

  products.forEach((product) => {
    product.style.cssText =
      "display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: white; box-shadow: rgb(0 0 0 / 5%) 0px 0px 40px 5px; border-radius: 6px; font-family: arial; padding: 15px;";
  });

  let headings = document.querySelectorAll(".product h1");

  headings.forEach((head) => {
    head.style.cssText =
      " margin: 0px; padding: 0px; font-size: 32px; font-weight: 200";
  });

  let paras = document.querySelectorAll(".product p");

  paras.forEach((para) => {
    para.style.cssText =
      " margin: 5px; padding: 0px; font-size: 12px; color: #000000b3;";
  });
}
WA;
// Build Footer

function buildFooter() {
  contentDiv.after(createFooter);
  createFooter.className = "footer";
  createFooter.innerHTML = " Mazen &#169; 2022 ";
  createFooter.style.cssText =
    "background-color: darkcyan; padding: 14px; text-align: center; color: white; font: 18px arial";
}
// zzzzz
