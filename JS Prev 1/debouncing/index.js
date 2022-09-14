var id;
const debounce = (fun, delay) => {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(() => {
    fun();
  }, delay);
};

let count = 1;
let clickCount = document.querySelector(".clickCount");
function handledeb() {
  clickCount.innerText = `you click button count : ${count++}`;
  console.log("working");
  debounce(print, 3000);
}
let countSeond=1;
let result = document.querySelector(".result");
function print() {
  result.innerText = `i'm Result ${countSeond++}`;
}
