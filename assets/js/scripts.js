//#region - start of - number counter animation

//Counter Setup

const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
    const target = document.querySelector(qSelector);
    let startTimestamp = null;
    const step = (timestamp) => {
     if (!startTimestamp) startTimestamp = timestamp;
     const progress = Math.min((timestamp - startTimestamp) / duration, 1);
     target.innerText = Math.floor(progress * (end - start) + start);
     if (progress < 1) {
      window.requestAnimationFrame(step);
     }
    };
    window.requestAnimationFrame(step);
   };
   
   document.addEventListener("DOMContentLoaded", () => {
    counterAnim("#count1", 0, 567, 1000);
    counterAnim("#count2", 0, 86, 1000);
    counterAnim("#count3", 0, 456, 1000);
    counterAnim("#count4", 0, 12, 1000);
   });
   

//Tiny Slider Setup              

const slider = tns({
    container: document.querySelector(".slider"),
    nav: false,
    autoplay: true,
    
    items: 1,
    gutter: 20,
    controls: false,
    responsive: {
      640: {
          items: 2
      },
      768: {
          items: 3
      }
    }
});

document.querySelector(".next").onclick = (() => {
    slider.goTo("next");
})

document.querySelector(".prev").onclick = (() => {
    slider.goTo("prev");
});

const slideCount = (() => {
    
    const info = slider.getInfo();
    const slideCount = `slideCount: ${info.slideCount}`;
    const items = `items: ${info.items}`;
    
    console.log(slideCount, items);
    
});

window.onresize = function(e) {
    slideCount();
};

slideCount();



