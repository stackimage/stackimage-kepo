const downloadBtn = document.querySelector(".download-btn-timer");
    const countdown = document.querySelector(".countdown");
    const pleaseWaitText = document.querySelector(".pleaseWait-text");
    const manualDownloadText = document.querySelector(".manualDownload-text");
    const manualDownloadLink = document.querySelector(".manualDownload-link");
    var timeLeft = 10;

    downloadBtn.addEventListener("click", () => {
      downloadBtn.style.display = "none";
      countdown.innerHTML = "Download will begin automatically in <span>" + timeLeft + "</span> seconds."; //for quick start of countdown

      var downloadTimer = setInterval(function timeCount(){
        timeLeft -= 1;
        countdown.innerHTML = "Download will begin automatically in <span>" + timeLeft + "</span> seconds.";

        if(timeLeft <= 0){
          clearInterval(downloadTimer);
          pleaseWaitText.style.display = "block";
          let download_href = "Design Weather Application - Stack Image.rar"; //enter the downloadable file link URL here
          window.location.href = download_href;
          manualDownloadLink.href = download_href;

          setTimeout(() => {
            pleaseWaitText.style.display = "none";
            manualDownloadText.style.display = "block";
          }, 4000);
        }
      }, 1000);
    });
    






const viewBtn = document.querySelector(".bx"),
popup = document.querySelector(".popup"),
close = popup.querySelector(".close"),
field = popup.querySelector(".field"),
input = field.querySelector("input"),
copy = field.querySelector("button");
viewBtn.onclick = () => {
popup.classList.toggle("show");
}
close.onclick = () => {
viewBtn.click();
}

// share wa
var element = document.getElementById("Whatsapp");
var parent = element.parentNode;
var link = document.createElement('a');
link.href = 'https://wa.me/?text=Download Design Weather Application | Stack Image https://www.stackimage.my.id/File/Download-Design/Design-Weather-Application/';
link.appendChild(element.cloneNode(true));
parent.replaceChild(link, element);
// share wa

// share telegram
var element = document.getElementById("Telegram");
var parent = element.parentNode;
var link = document.createElement('a');
link.href = 'https://telegram.me/share/url?text=Download Design Weather Application | Stack Image Image&url=https://www.stackimage.my.id/File/Download-Design/Design-Weather-Application/';
link.appendChild(element.cloneNode(true));
parent.replaceChild(link, element);
// share telegram

/* Gmail *
var element = document.getElementById("Gmail");
var parent = element.parentNode;
var link = document.createElement('a');
link.href = 'https://mail.google.com/mail/?view=cm&to=%7Bemail_address%7D&su=Download%20Design%20Yoga%20App%20%7C%20Stack%20Image&body=https://www.stackimage.my.id/File/Download-Design/Design-Yoga-App/&bcc=%7Bemail_address%7D&cc=%7Bemail_address%7D';
link.appendChild(element.cloneNode(true));
parent.replaceChild(link, element);
/* Gmail */

copy.onclick = () => {
input.select(); //select input value
if (document.execCommand("copy")) { //if the selected text copy
  field.classList.add("active");
  copy.innerText = "Copied";
  setTimeout(() => {
    window.getSelection().removeAllRanges(); //remove selection from document
    field.classList.remove("active");
    copy.innerText = "Copy";
  }, 3000);
}
}