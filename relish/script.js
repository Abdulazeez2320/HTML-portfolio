var swiper = new Swiper(".card_Swiper", {
  spaceBetween: 10,
  loop:true,
  speed:1000,
  autoplay:{
    delay:2000
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true
    
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      
    },
    480: {
      slidesPerView: 1,
      
    },
    768: {
      slidesPerView: 2,
      
    },
    1400: {
      slidesPerView: 3,
      
    },
 
  },
});