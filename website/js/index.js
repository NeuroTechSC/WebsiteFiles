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

  sdfg = document.getElementsByClassName('.navitem')

  // reveal elements. Adapted from: https://alvarotrigo.com/blog/css-animations-scroll/
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);