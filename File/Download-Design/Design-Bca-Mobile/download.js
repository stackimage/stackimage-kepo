const downloadBtn = document.querySelector(".download-btn-timer");
const countdown = document.querySelector(".countdown");
const pleaseWaitText = document.querySelector(".pleaseWait-text");
const manualDownloadText = document.querySelector(".manualDownload-text");
const manualDownloadLink = document.querySelector(".manualDownload-link");
var timeLeft = 10;

downloadBtn.addEventListener("click", () => {
  downloadBtn.style.display = "none";
  countdown.innerHTML = "Download will begin automatically in <span>" + timeLeft + "</span> seconds."; //for quick start of countdown

  var downloadTimer = setInterval(function timeCount() {
    timeLeft -= 1;
    countdown.innerHTML = "Download will begin automatically in <span>" + timeLeft + "</span> seconds.";

    if (timeLeft <= 0) {
      clearInterval(downloadTimer);
      pleaseWaitText.style.display = "block";
      let download_href = "Design BCA Mobile - Stack Image.rar"; //enter the downloadable file link URL here
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
link.href = 'https://wa.me/?text=Download%20Design%20BCA%20Mobile%20|%20Stack%20Image%20https://www.stackimage.my.id/File/Download-Design/Design-Bca-Mobile/';
link.appendChild(element.cloneNode(true));
parent.replaceChild(link, element);
// share wa

// share telegram
var element = document.getElementById("Telegram");
var parent = element.parentNode;
var link = document.createElement('a');
link.href = 'https://telegram.me/share/url?url={url}&text={text}';
link.appendChild(element.cloneNode(true));
parent.replaceChild(link, element);
// share telegram

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