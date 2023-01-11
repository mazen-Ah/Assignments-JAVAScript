// assignment 1
// window.onload = () => {  // html Deleted - - -
//   const targetLink = document.querySelectorAll("a");
//   for (let i = 0; i < targetLink.length; i++) {
//     if (
//       targetLink[i].classList.contains("open") &&
//       targetLink[i].textContent === "Elzero"
//     ) {
//       targetLink[i].click();
//     }
//   }
// };
// assignment 2 challenge
const addclass = document.querySelector(".classes-to-add");
const removeclass = document.querySelector(".classes-to-remove");
const classList1 = document.querySelector(".classes-list > div");
const class1 = document.querySelector(".element");
const class0 = document.createElement("span");
addclass.addEventListener("blur", () => {
  const myclass = addclass.value.toLowerCase().split(" ").sort();
  myclass.map((e) => {
    if (e.length > 0) {
      class1.classList.add(e);
      const class0 = document.createElement("span");
      class0.append(e);
      classList1.append(class0);
    } else {
      addclass = "No Classes To Show";
    }
  });
  addclass.value = "";
});
removeclass.addEventListener("blur", () => {
  const myclass = removeclass.value.toLowerCase().split(" ").sort();
  myclass.map((e) => {
    if (e.length > 0) {
      class1.classList;
      document.querySelector("span").remove();
      removeclass.value = "";
    }
  });
});
//////
// const ele = document.querySelector('[title="Current"]');
// const inputField = document.querySelector('[class="classes-to-add"]');
// const outputField = document.querySelector('[class="classes-to-remove"]');
// const showClasses = document.querySelector('[class = "show-ele-classes"]');
// const createdSpan = document.createElement("span");

// window.onload = function () {
//   let sortedClasslist = ele.classList.value.split(" ").sort();
//   if (ele.className === "") {
//     showClasses.textContent = "No Classes To Show";
//   } else {
//     for (let x = 0; x < sortedClasslist.length; x++) {
//       let clonedSpan = createdSpan.cloneNode(true);
//       showClasses.append(clonedSpan);
//       clonedSpan.textContent = `${sortedClasslist[x]}`;
//     }
//   }
// };
// inputField.onblur = function () {
//   let inputValues = inputField.value.trim().toLowerCase().split(" ");
//   for (let i = 0; i < inputValues.length; i++) {
//     if (inputValues[i] !== "" && !isFinite(parseInt(inputValues[i]))) {
//       ele.classList.add(inputValues[i]);
//       showClasses.innerHTML = "";
//       let sortedClasslist = ele.classList.value.split(" ").sort();
//       for (let x = 0; x < sortedClasslist.length; x++) {
//         let clonedSpan = createdSpan.cloneNode(true);
//         showClasses.append(clonedSpan);
//         clonedSpan.textContent = `${sortedClasslist[x]}`;
//       }
//       inputField.value = "";
//     }
//   }
// };
// outputField.onblur = function () {
//   let outputValues = outputField.value.trim().toLowerCase().split(" ");
//   for (let j = 0; j < outputValues.length; j++) {
//     if (outputValues[j] !== "" && !isFinite(parseInt(outputValues[j]))) {
//       ele.classList.remove(outputValues[j]);
//       showClasses.innerHTML = "";
//       let sortedClasslist = ele.classList.value.split(" ").sort();
//       for (let x = 0; x < sortedClasslist.length; x++) {
//         let clonedSpan = createdSpan.cloneNode(true);
//         showClasses.append(clonedSpan);
//         clonedSpan.textContent = `${sortedClasslist[x]}`;
//       }

//       if (ele.className === "") {
//         showClasses.textContent = "No Classes To Show";
//       }
//       outputField.value = "";
//     }
//   }
// };
// assignment 3
// document.querySelector("p").remove();
// const mydiv = document.querySelector(".our-element");

// const first = mydiv.insertAdjacentElement("beforebegin", mydiv.cloneNode());
// const last = mydiv.insertAdjacentElement("afterend", mydiv.cloneNode());
// first.classList.remove("our-element");
// first.classList.add("start");
// first.setAttribute("title", "Start Element");
// first.setAttribute("data-value", "Start");
// first.textContent = "Start";
// last.classList.remove("our-element");
// last.classList.add("end");
// last.setAttribute("title", "End Element");
// last.setAttribute("data-value", "End");
// last.textContent = "End";
// assignment 4
// const mydiv = document.querySelector("div").childNodes[4];

// document.body.append(mydiv);
// assignment 5
//
// const myTags = document.body.children;
// console.log(myTags[0]);
// myTags.foreach((e) => {
//   e.onclick = () => {
//     console.log(`This Is ${e.tagName}`);
//   };
// });
//
// document.addEventListener("click", function (e) {
//   console.log(`I am ${e.target.nodeName}`);
// });
// let myTags = Object.values(document.body.children);
// myTags.forEach((tag) => {
//   tag.onclick = function () {
//     console.log(tag.tagName);
//   };
//   console.log(tag);
// });
// const myTags = ["div", "element", "section"];
// myTags.forEach((tag) => {
// tag.onclick = function(){
//     console.log(tag.tagName)
//     }

//   console.log(tag);
// });
// let mayTags = document.body.children;

// for (let i = 0; i < mayTags.length; i++) {
//   mayTags[i].onclick = function () {
//     console.log(`This Is ${mayTags[i].tagName}`);
//   };
// }
