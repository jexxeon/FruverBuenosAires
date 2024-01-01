document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

  function showSlide(index) {
      if (index < 0) {
          currentIndex = slider.children.length - 1;
      } else if (index >= slider.children.length) {
          currentIndex = 0;
      } else {
          currentIndex = index;
      }

      const transformValue = -currentIndex * 100 + '%';
      slider.style.transform = 'translateX(' + transformValue + ')';
  }

  function nextSlide() {
      showSlide(currentIndex + 1);
  }

  function prevSlide() {
      showSlide(currentIndex - 1);
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
  setInterval(nextSlide, 5000); 
});
