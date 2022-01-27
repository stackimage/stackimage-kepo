/*!
 * Sequence Loader Images without jQuery
 *
 * moulainfo
 *
 * From Lazy Load
 * Original by Mike Pulaski - http://www.mikepulaski.com
 * Modified by Kai Zau - http://kaizau.com
 *
 * finaly modified for css loader
 */
(function() {
	var addEventListener =
		window.addEventListener ||
		function(n, f) {
		  window.attachEvent("on" + n, f);
		},
	  removeEventListener =
		window.removeEventListener ||
		function(n, f, b) {
		  window.detachEvent("on" + n, f);
		};
  
	var imgLoader = {
	  /* cache with img loader elements
		   * 
		   */
	  cache: [],
  
	  /* loadNextImage
		   * change img source and register onLoad events
		   * 
		   * change class name in element for correct css
		   */
	  loadNextImages: function() {
		if (imgLoader.cache.length > 0) {
		  var image = imgLoader.cache[0];
		  image.onload = function() {
			this.className = this.className.replace(
			  /(^|\s+)img-load(\s+|$)/,
			  "$1img-loaded$2"
			); //NOTE: mozna single quotw for regex
			var loader = this.parentElement.getElementsByClassName("loading")[0];
			loader.className = loader.className.replace(
			  /(^|\s+)loading(\s+|$)/,
			  "$1loaded$2"
			);
			imgLoader.loadNextImages();
		  };
		  image.src = image.getAttribute("data-src");
		  image.removeAttribute("data-src");
		  imgLoader.cache.splice(0, 1);
		}
	  },
  
	  /* init
		   * all image with data-src make loader
		   * prepend css lader element
		   * 
		   */
	  init: function() {
		addEventListener("load", function _imgLoaderInit() {
		  var imageNodes = document.querySelectorAll("img[data-src]");
  
		  for (var i = 0; i < imageNodes.length; i++) {
			var imageNode = imageNodes[i];
			imgLoader.cache.push(imageNode);
			// add css class for loader
			imageNode.classList.add("img-load");
			// create div for css loader animation
			var loadDiv = document.createElement("div");
			loadDiv.classList.add("loading");
			// prepend div loader before img
			imageNode.parentElement.insertBefore(loadDiv, imageNode);
		  }
  
		  // add css loader style to the document
		  var styleAdd = document.createElement("style");
		  styleAdd.innerHTML =
			"img.img-load, div.loaded { display: none; } " +
			"*, *:before, *:after {  box-sizing: border-box; } " +
			"div.loading { min-height: 100px; }" +
			"div.loading:after { content: 'Loading'; animation: loadingtext 5s infinite linear; display: block; text-align: center; font-size: 2em; padding-top: 20px; }" +
			  "@keyframes loadingtext { 0% { content: 'Loading'; font-size: 2em; } 33% { content: 'Loading'; font-size: 1em; } 66% { content: 'Loading....'; font-size: 3em; } 100% { content: 'Loading..'; font-size: 2em; } }";
  /*          
			"div.loading { width: 80px; height: 80px; background: lightgreen; position: relative; border-radius: 50%; margin: 10px auto; animation-duration: 0.75s; animation-name: animSpin; animation-timing-function: linear; animation-iteration-count: infinite; } " +
			"@keyframes animSpin{ 50%{ transform: rotateZ(180deg) scale(.66); } 100%{ transform: rotateZ(360deg) scale(1); } } " +
			"div.loading:before, div.loading:after{ content: ''; position: absolute; border: 8px solid transparent; border-radius: 50%; } " +
			"div.loading:before{ width: 75%; height: 75%; background: rgba(255,255,255,.13); left: 12.5%; top: 12.5%; border-left: 8px solid rgba(255,255,255,.34); border-bottom: 8px solid rgba(255,255,255,.34); } " +
			"div.loading:after{ width: 40%; height: 40%; left: 30%; top: 30%; border-right: 8px solid rgba(255,255,255,1); border-left: 8px solid rgba(255,255,255,1); border-bottom: 8px solid rgba(255,255,255,1); } ";
  
  */
		  // insert style as last element of head
		  document.head.insertBefore(styleAdd, null);
  
		  imgLoader.loadNextImages();
  
		  removeEventListener("load", _imgLoaderInit, false);
		});
	  }
	};
	imgLoader.init();
  })();
  
//loader



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