const type = document.getElementById("type");
const color = document.getElementById("color");
const font = document.getElementById("font");
const content = document.querySelector(".text p");

let types = ["open-sans", "Cairo", "Roboto"];
let colors = ["red", "blue", "green", "yellow", "brown", "black"];

types.forEach((op) => {
  const options = document.createElement("option");
  options.append(op);
  type.append(options);
});
colors.forEach((op) => {
  const options = document.createElement("option");
  options.append(op);
  color.append(options);
});
for (let i = 16; i < 34; i++) {
  const options = document.createElement("option");
  options.append(`${i}px`);
  font.append(options);
}
color.addEventListener("change", () => {
  content.style.color = color.value;
  localStorage.setItem("color", color.value);
});
if (localStorage.getItem("color"))
  content.style.color = localStorage.getItem("color");
color.value = localStorage.getItem("color");

type.onchange = function () {
  content.style.fontFamily = this.value;
  localStorage.setItem("type", this.value);
};
if (localStorage.getItem("type")) {
  content.style.fontFamily = localStorage.getItem("type");
  type.value = localStorage.getItem("type");
}
font.onchange = function () {
  content.style.fontSize = this.value;
  localStorage.setItem("font", this.value);
};

if (localStorage.getItem("font")) {
  content.style.fontSize = localStorage.getItem("font");
  font.value = localStorage.getItem("font");
}
