var swiper = new Swiper(".card_Swiper", {
  spaceBetween: 30,
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
    el: ".swiper-pagination-1",
    
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      
    },
    480: {
      slidesPerView: 2,
      
    },
    768: {
      slidesPerView: 3,
      
    },
    1100: {
      slidesPerView: 4,
      
    },
 
  },
});

var swiper = new Swiper(".card_Swiper-1", {
  spaceBetween: 30,
  loop:true,
  speed:1500,
  autoplay:{
    delay:2000
  },
  navigation: {
    nextEl: ".swiper-button-next-1",
    prevEl: ".swiper-button-prev-1",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    
    
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      
    },
    480: {
      slidesPerView: 2,
      
    },
    768: {
      slidesPerView: 3,
      
    },
    1400: {
      slidesPerView: 3,
      
    },
 
  },
});