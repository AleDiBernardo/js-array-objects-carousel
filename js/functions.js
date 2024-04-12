/**
 * Function that show the next carousel element when btn is pressed
 * @date 4/12/2024 - 2:26:59 PM
 */
function showNext() {
  carouselItem[activeIndex].classList.remove("active");
  thumbElem[activeIndex].classList.remove("active");


  if (activeIndex < images.length - 1) {
    activeIndex++;
  } else {
    activeIndex = 0;

  }

  thumbElem[activeIndex].classList.add("active");
  carouselItem[activeIndex].classList.add("active");
}

/**
 * Function that show the previous carousel element when btn is pressed
 * @date 4/12/2024 - 2:27:33 PM
 */
function showPrev() {
  carouselItem[activeIndex].classList.remove("active");
  thumbElem[activeIndex].classList.remove("active");


  if (activeIndex > 0) {
    activeIndex--;
  } else {
    activeIndex = images.length - 1;
    thumbElem[activeIndex].classList.remove("active");

  }

  thumbElem[activeIndex].classList.add("active");
  carouselItem[activeIndex].classList.add("active");
}


//BONUS 2 e 3
/**
 * Start and stop autoplay
 * @date 4/12/2024 - 3:28:20 PM
 */
function autoPlay() {
    const order = invertOrder();

    if (clicked === 0) {
        startPlay = setInterval(order, 3000);
        clicked++;
        console.log("start:\n" + order);
    } else {
        clearInterval(startPlay);
        console.log("stop:\n"+ order);
        clicked--;
    }
}

/**
 * Invert the order of showing carousel item
 * @date 4/12/2024 - 3:57:36 PM
 *
 * @returns {() => void}
 */
function invertOrder() {
    
    let order;
    if (orderCount === 0) {
        order = showPrev;
        orderCount++;
    } else {
        order = showNext
        orderCount--;

    }
    return order;
}
