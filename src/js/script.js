var hamburgerBtn = document.getElementById('hamburgerBtn');
var nav = document.querySelector('.nav-menu');
var cta = document.querySelectorAll('.cta-links');

// Toggle On & Off Class for the navigation 
function btnClick() {
    hamburgerBtn.classList.toggle('close');
    hamburgerBtn.classList.toggle('open');
    nav.classList.toggle('show');
    nav.classList.toggle('site-nav--open');
}

// Set the Btn To Wait for a Click
hamburgerBtn.addEventListener("click", () => {
    btnClick();
});

// Close Nav When Click on Liks
for(var i = 0; i < cta.length; i++) {
    cta[i].onclick = function() {
        btnClick();
    }
}

// Glider.js

// Service
new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    resizeLock: true,
    dots: '#resp-dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });

// Testimonial
new Glider(document.querySelector('.glider_testimonial'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: '#resp-dots',
    arrows: {
      prev: '.glider-prev-testimonial',
      next: '.glider-next-testimonial'
    }
  });

// Jquey for the nav scrolling
$(document).ready(function() {

  $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  $('html, body').animate({
                      scrollTop: target.offset().top
                  }, 1000);
                  return false;
              }
          }
      });
  });
  
});