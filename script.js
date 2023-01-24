const revealElements = document.querySelectorAll("data-reveal");

const scrollReaveal = function (){

  for(let i = 0, len =revealElements.length; i < len; i++) {
    const isElementsOnScreen = revealElements[i].getBouncingClientRect().top < window.innerHeight;
    if(isElementsOnScreen){
      revealElements[i].classList.add("revealed")
    }else {
      revealElements[i].classList.remove("revealed")
    }
  }
}

window.addEventListener("scroll", scrollReaveal);