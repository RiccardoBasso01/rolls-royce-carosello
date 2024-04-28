const resetButton = document.querySelector(".btn-animation");
const maskedImage1 = document.querySelector("[data-id='1'] .color-image");
const maskedImage2 = document.querySelector("[data-id='2'] .color-image");
const maskedImage3 = document.querySelector("[data-id='3'] .color-image");

const maskedContainer1 = document.querySelector(".mask-container[data-id='1']");
const maskedContainer2 = document.querySelector(".mask-container[data-id='2']");
const maskedContainer3 = document.querySelector(".mask-container[data-id='3']");

maskedImage1.classList.add("mask-animation")

let index = 1;

const changeSlide = i => {
  eval(`maskedImage${i}`).classList.remove("mask-animation");
  eval(`maskedContainer${i}`).classList.add("d-none");

  i >= 3 ? i = 1 : i++;
  eval(`maskedContainer${i}`).classList.remove("d-none");
  eval(`maskedImage${i}`).classList.add("mask-animation");
}

// Autoplay
setInterval(()=>{
  if(index > 3) index = 1;
  changeSlide(index);
  index++;
}, 3000)