    //CA NE MARCHE PAAAAAS, HELP ME RAPHOU

let btn1 = document.getElementsByClassName("btn1");
let btn3 = document.getElementsByClassName("btn3");
let cookies_popin = document.getElementsByClassName("cookies_popin");
    
// btn1.addEventListener("click", () => {
//   if(getComputedStyle(background_cookies_popin).display != "none"){
//   background_cookies_popin.style.display = "none";}
// });

// btn3.addEventListener("click", () => {
//    if(getComputedStyle(background_cookies_popin).display != "none"){
//   background_cookies_popin.style.display = "none";}
// });

// btn1.addEventListener("click", function() {
//   cookies_popin.classList.add('hidden');
// });


const closeModal = function () {
  cookies_popin.classList.add('hidden');
};

btn1.addEventListener('click', closeModal);