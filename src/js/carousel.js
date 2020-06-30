document.addEventListener("DOMContentLoaded", () => {
 

  const carousels = document.querySelectorAll(".carousel");
  for (i = 0; i < carousels.length; i++) {
    carasoule(carousels[i]);
  }
});

const carasoule=(carouselElement)=>{
    const delayInMilliseconds = 3500;  
    let autoSlide = true;
    let current=0;

    const items = carouselElement.querySelectorAll(".item");
    
    let indicator = carouselElement.querySelectorAll(".carousel-indicator");
    let circleIndicators=[];

    
    const slideOut = (elements,indicators, order) => {
      console.log("out " + order);
      elements[order].classList.remove("slide-in");
      elements[order].classList.add("slide-out");
      if(indicators!=null)
      indicators[order].classList.remove("selected");
 
      if (!autoSlide) return;
      if (order == elements.length - 1) {
        slideIn(elements,indicators, 0, delayInMilliseconds);
      } else {
        slideIn(elements,indicators, order + 1, delayInMilliseconds);
      }
    };
  
    const slideIn = (elements, indicators,order, delay) => {
      current=order;
      console.log("in " + order);
      elements[order].classList.remove("slide-out");
      elements[order].classList.add("slide-in");
      if(indicators!=null)
      indicators[order].classList.add("selected");
      if (!autoSlide) return;
      setTimeout(() => {
        slideOut(elements,indicators, order);
      }, delay);
    };

   

   
  
    if(indicator.length>0){
        /**only take first indicator */
 
        indicator=indicator[0];
        for (i = 0; i < items.length; i++) {
            const circle= document.createElement("div");
            circle.classList.add("carousel-indicator-circle");
            indicator.appendChild(circle);
            circleIndicators.push(circle);
        }
        
    }else{
        indicator=null;
        circleIndicators=null;
    }

   
   

    slideIn(items,circleIndicators, current, 0);

    
}
