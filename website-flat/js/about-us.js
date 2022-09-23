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
