

// let btn1 = document.getElementsByClassName("btn1");
// let btn3 = document.getElementsByClassName("btn3");
// let cookies_popin = document.getElementsByClassName("cookies_popin");
    
// btn1.addEventListener("click", () => {
//   if(getComputedStyle(background_cookies_popin).display != "none"){
//   background_cookies_popin.style.display = "none";}
// });

// btn3.addEventListener("click", () => {
//    if(getComputedStyle(background_cookies_popin).display != "none"){
//   background_cookies_popin.style.display = "none";}
// });




const modal = document.querySelector('.modal');
const overlay1 = document.querySelector('.overlay1');
const btnCloseModal = document.querySelectorAll('.close-modal');

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// btnCloseModal.addEventListener('click', closeModal);

document.querySelectorAll('.close-modal').forEach(item => {
  item.addEventListener('click', event => {
    modal.classList.add('hidden');
    overlay1.classList.add('hidden');
  })
})


$(function(){
  $("#header").load("header.html"); 
  $("#footer").load("footer.html"); 
});

