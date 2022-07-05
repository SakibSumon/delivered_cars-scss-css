console.log("working");
let elems = document.querySelectorAll(".input__border");

elems.forEach((el) => {
  el.addEventListener("click", (e) => {
    let input = document.querySelector("input");
    console.log("input :>> ", input);
    input.focus();
  });
});
