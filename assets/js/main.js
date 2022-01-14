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
