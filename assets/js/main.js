let menu = document.querySelector('.menu-icon');

let navbar = document.querySelector('.menu');



menu.onclick = () => {

    navbar.classList.toggle('active');

    menu.classList.toggle('move');

    bell.classList.remove('active');

}



let bell = document.querySelector('.notification');



document.querySelector('#bell-icon').onclick = () => {

    bell.classList.toggle('active');

}

  window.onscroll = function() {mufunction()};



  function mufunction() {

    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    var scrolled = (winScroll / height) * 100;

    document.getElementById('scroll-bar').style.width = scrolled + '%';


  }

  //Slider Image Download
  var slides=document.querySelector('.slider-items').children;
var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var totalSlides=slides.length;
var index=0;

nextSlide.onclick=function () {
    next("next");
}
prevSlide.onclick=function () {
    next("prev");
}

function next(direction){

  if(direction=="next"){
     index++;
      if(index==totalSlides){
       index=0;
      }
  } 
  else{
          if(index==0){
           index=totalSlides-1;
          }
          else{
           index--;
          }
   }

 for(i=0;i<slides.length;i++){
         slides[i].classList.remove("active");
 }
 slides[index].classList.add("active");     

}



// Alert segera hadir
function showToast(text){
  var x=document.getElementById("toast");
  x.classList.add("show");
  x.innerHTML=text;
  setTimeout(function(){
    x.classList.remove("show");
  },3000);
}

  // Alert

  const toastContainer = document.querySelector(".toast-container-new");
const closeBtn = document.querySelector(".toast-container-new .close");
const toastLink = document.querySelector(".toast-container-new a");

if (!localStorage.getItem("displayToast")) {
  setTimeout(() => {
    toastContainer.classList.add("active");
  }, 1000);
}

const stopDisplayingToast = () => {
  localStorage.setItem("displayToast", false);
  toastContainer.classList.remove("active");
};

closeBtn.addEventListener("click", stopDisplayingToast);
toastLink.addEventListener("click", stopDisplayingToast);
