/**
 * Function that show the next carousel element when btn is pressed
 * @date 4/12/2024 - 2:26:59 PM
 */
function showNext() {
  carouselItem[activeIndex].classList.remove("active");

  if (activeIndex < images.length - 1) {
    activeIndex++;
  } else {
    activeIndex = 0;
  }

  carouselItem[activeIndex].classList.add("active");
}

/**
 * Function that show the previous carousel element when btn is pressed
 * @date 4/12/2024 - 2:27:33 PM
 */
function showPrev() {
  carouselItem[activeIndex].classList.remove("active");

  if (activeIndex > 0) {
    activeIndex--;
  } else {
    activeIndex = images.length - 1;
  }

  carouselItem[activeIndex].classList.add("active");
}
