document.addEventListener("DOMContentLoaded", function () {
  // debounce: wrap called function in this function to mimic 20ms delay before executing
  function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const sliderImages = document.querySelectorAll(".slide-in");

  function checkSlide(e) {
    sliderImages.forEach((sliderImage) => {
      // calculates the following: (halfway through image)
      // viewport height + scrollY position (ie: height 625 scrolled down 10px = 635)
      // subtract half the height of the image (ie: 50% of the image height)
      // this should calculate when the image is halfway scrolled into view
      const slideInAt =
        window.scrollY + window.innerHeight - sliderImage.height / 2;
      // find the bottom of the image in relation to where it's located offset to top of page
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      // is the image half shown? (half image greater than offset of top)
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      // is not scrolled past (slide image back out of view if image scrolls off the screen again)
      const isNotScrolledPast = window.scrollY < imageBottom;
      // add class 'active' if half-shown and not already scrolled past
      if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add("active");
      } else {
        sliderImage.classList.remove("active");
      }
    });
  }

  // call checkSlide but only after debouncing with 50ms delay overridden
  window.addEventListener("scroll", debounce(checkSlide, 50));
});
