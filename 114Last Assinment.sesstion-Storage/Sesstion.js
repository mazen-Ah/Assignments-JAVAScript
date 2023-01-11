const input = document.querySelectorAll("input");
const select = document.querySelectorAll("option");

input.forEach((e, i) => {
  if (sessionStorage.getItem(`g-${i}`)) {
    e.value = sessionStorage.getItem(`g-${i}`);
  }
  e.addEventListener("blur", () => {
    sessionStorage.setItem(`g-${i}`, e.value);
  });
});
