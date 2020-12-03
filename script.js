let menu = document.querySelector('.header__menu');
let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    menu.classList.toggle("header__menu--active");
    hamburger.classList.toggle("hamburger--active");
});



$('.clients__slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  let menuLinks = document.querySelectorAll('.header__link');
  let footerMenuLinks = document.querySelectorAll('.menu_link a');
  
  window.onload = function(){
      scrollToSection(menuLinks);
      scrollToSection(footerMenuLinks);
  }

//   for(let menuLink of menuLinks){
//       menuLink.addEventListener('click', (e) => {
//         e.preventDefault();
//         let scrollToElem = menuLink.getAttribute('href');
//         let coordinates = document.querySelector(scrollToElem).offsetTop;
//         window.scrollTo({
//             top: coordinates - 100,
//             behavior: "smooth"
//         });
//       });
//   }

  function scrollToSection(listItems){
      for(let item of listItems){
          item.addEventListener('click', (e) => {
              e.preventDefault();
              let scrollToElem = item.getAttribute('href');
              let coordinates = document.querySelector(scrollToElem).offsetTop;
              window.scrollTo({
                  top: coordinates - 100,
                  behavior: "smooth"
              });
          });
      }
  }