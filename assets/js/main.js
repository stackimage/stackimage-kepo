$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 60){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }
        
    });

});

/*=============== Banner ===============*/
const toastContainer = document.querySelector(".toast-container");
const closeBtn = document.querySelector(".toast-container .close");
const toastLink = document.querySelector(".toast-container a");

if (!localStorage.getItem("displayToast")) {
  setTimeout(() => {
    toastContainer.classList.add("active");
  }, 1000);
}

const stopDisplayingToast = () => {
  /*=============== cookie ===============*
  localStorage.setItem("displayToast", true);
  /*=============== Notif ===============*/
  toastContainer.classList.remove("active");
};
/*=============== Notif ===============*/
closeBtn.addEventListener("click", stopDisplayingToast);
toastLink.addEventListener("click", stopDisplayingToast);


/*=============== Notif ===============*/
