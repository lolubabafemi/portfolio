document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll('.scroll');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, { threshold: 0.1 });

  boxes.forEach(scroll => {
      observer.observe(scroll);
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll('.scroll_1');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, { threshold: 0.1 });

  boxes.forEach(scroll_1 => {
      observer.observe(scroll_1);
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll('.scroll_2');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, { threshold: 0.1 });

  boxes.forEach(scroll_2 => {
      observer.observe(scroll_2);
  });
});


const openMenu = () => {
    document.getElementById('nav').style.right = '0%'
  }
  const closeMenu = () => {
    document.getElementById('nav').style.right = '-100%'
  }



