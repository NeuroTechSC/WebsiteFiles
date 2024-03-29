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

  // Image carousel

  images = document.getElementsByClassName('carousel-img');
  numImages = images.length;
  console.log(numImages)

  let i = 0;

  setInterval(() => {
    images[i].classList.remove('active');
    images[i].classList.add('inactive');
    i += 1;
    if (i >= numImages) {
      i = 0;
    }
    images[i].classList.remove('inactive');
    images[i].classList.add('active');
  }, 5000);

  // On scroll animation using intersection observer

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      }
    });
  });

  const hiddenElementsLeft = document.querySelectorAll('.hidden-left');
  const hiddenElementsDown = document.querySelectorAll('.hidden-down');
  hiddenElementsLeft.forEach((el) => observer.observe(el));
  hiddenElementsDown.forEach((el) => observer.observe(el));