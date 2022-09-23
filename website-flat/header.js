// adjust header on scroll

window.onscroll = function () {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.height = "45px";

    } else {
      document.getElementById("header").style.height = "100px";
      navItems = document.getElementsByClassName('.navitem')

    }
  }


document.getElementById('mobile-header-bars').addEventListener("click", mobileHeaderClick)

function mobileHeaderClick() {
  var x = document.getElementById('links')
  if (x.style.display == "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}