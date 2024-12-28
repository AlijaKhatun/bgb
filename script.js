//!----------------alert box
const alert = document.querySelector(".alert");
const alertX = document.querySelector(".alert-x");
console.log(alertX);
console.log(alert);
alertX.addEventListener("click", function () {
  alert.classList.add("alert-out");
});
/*
function menubarDropDown() {
  const dropUl = document.querySelectorAll("#dr-ul-id");
  console.log(dropUl);
  dropUl.classList.add("show-dr-ul");
}
menubarDropDown();

const menuBtn = document.querySelectorAll("#menu-dr-btn");
console.log(menuBtn);
const dropUl = document.querySelectorAll("#dr-ul-id");
window.onclick = function (event) {
  if (event.target.matches(menuBtn)) {
    if (dropUl.classList.contains("show-dr-ul")) {
      dropUl.classList.remove("show-dr-ul");
    }
  }
};



//!------------------------------------image slider

const slideInner = document.querySelector(".slides-inner").children;
console.log(slideInner);
let indexx = 0;
function sliderImg() {
  for (let i = 0; i < slideInner.length; i++) {
    slideInner[i].classList.remove("img-in", "img-out");
  }
  slideInner[indexx].classList.add("img-in");
  setTimeout(function () {
    slideInner.classList.add("img-out");
  }, 2800);

  setTimeout(function () {
    if (indexx == slideInner.length - 1) {
      indexx = 0;
    } else {
      indexx++;
    }
    sliderImg();
  }, 3000);
}
*/

//!---------------------------img slider------

function makeSlideShow(slideId) {
  const slides = document.getElementById("slides");
  console.log(slides);
  const slidesInner = slides.querySelector(".slides-inner");
  console.log(slidesInner);
  const slideImage = slidesInner.querySelectorAll(".slide-img");
  console.log(slideImage);
  let index = 0;
  setInterval(function () {
    index += 1;
    if (index === slideImage.length) {
      index = 0;
    }
    slidesInner.style.transform = `translate3d(${index * -1050}px ,0,0)`;
    //console.log(index * -1200);
  }, 3000);
}
makeSlideShow("slides");

//!------------------------------------text slider

const newsPara = document.querySelector(".para-slider").children;
console.log(newsPara);
let index = 0;
function sliderText() {
  for (let i = 0; i < newsPara.length; i++) {
    newsPara[i].classList.remove("text-in");
  }
  newsPara[index].classList.add("text-in");
  if (index == newsPara.length - 1) {
    index = 0;
  } else {
    index++;
  }
  setTimeout(sliderText, 2000);
}
window.onload = sliderText;
