var timeleft = 20;
const downloadButton = document.querySelector(".btn");
const countdown = document.querySelector(".countdown")
const waitText = document.querySelector(".waiting-text")
const downloadText = document.querySelector(".download-text")
const downloadLink = document.querySelector(".download-link")

downloadButton.addEventListener("click", () => {
    downloadButton.style.display = "none";
    countdown.innerHTML = "Download will begin automatically in <span>" + timeleft + " </span> seconds."; // For Fast Start

    var downloadtimer = setInterval(function timecount() {
        timeleft -= 1;
        countdown.innerHTML = "Download will begin automatically in <span>" + timeleft + " </span> seconds.";
        if (timeleft <= 0) {
            clearInterval(downloadtimer);
            waitText.style.display = "block";
            let download_href = "Design Pet Adoption app - Stack Image.rar";
            window.location.href = download_href;
            downloadLink.href = download_href;

            setTimeout(() => {
                waitText.style.display = "none";
                downloadText.style.display = "block";
            }, 4000);
        }
    }, 1000);
});
  $(document).ready(function () {
      $("button").click(function (event) {
          event.preventDefault();
          CopyToClipboard("Download Pet Adoption app | Stack Image Link : https://stackimage.github.io/Download/Design-Pet-Adoption-app/", true, "Value copied");
      });
  });

  function CopyToClipboard(value, showNotification, notificationText) {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val(value).select();
      document.execCommand("copy");
      $temp.remove();

      if (typeof showNotification === 'undefined') {
          showNotification = true;
      }
      if (typeof notificationText === 'undefined') {
          notificationText = "Copied to clipboard";
      }

      var notificationTag = $("div.copy-notification");
      if (showNotification && notificationTag.length == 0) {
          notificationTag = $("<div/>", { "class": "copy-notification", text: notificationText });
          $("body").append(notificationTag);

          notificationTag.fadeIn("slow", function () {
              setTimeout(function () {
                  notificationTag.fadeOut("slow", function () {
                      notificationTag.remove();
                  });
              }, 1000);
          });
      }
  }


  const shareData = {
    title: 'Stack Image',
    text: 'Download Pet Adoption app | Stack Image Link : ',
    url: 'https://stackimage.github.io/Download/Design-Pet-Adoption-app/'
  }

  const btn = document.querySelector('button');
  const resultPara = document.querySelector('.result');

  // Share must be triggered by "user activation"
  btn.addEventListener('click', async () => {
    try {
      await navigator.share(shareData)
      resultPara.textContent = 'Stack Image shared successfully'
    } catch(err) {
      resultPara.textContent = 'Error: ' + err
    }
  });