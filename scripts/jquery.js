$(document).ready(function() {

   // xử lý auto swap slide
    const slides = $('.slide');
    let currentSlide = 0;
    slides.eq(currentSlide).addClass('active');

    function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
  
      slides.removeClass('active');
      slides.eq(currentSlide).addClass('active');
    }
  
    function prevSlide() {
      currentSlide--;
  
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
  
      slides.removeClass('active');
      slides.eq(currentSlide).addClass('active');
    }
    setInterval(nextSlide, 4000);
});