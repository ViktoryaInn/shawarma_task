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
    ]
  });

let menuLinks = document.querySelectorAll('.header__link');
let footerMenuLinks = document.querySelectorAll('.menu_link a');

window.onload = function(){
    scrollToSection(menuLinks);
    scrollToSection(footerMenuLinks);
}

function scrollToSection(listItems){
    for(let item of listItems){
        item.addEventListener('click', (e) => {
            if(menu.matches('.header__menu--active')){
                menu.classList.toggle("header__menu--active");
                hamburger.classList.toggle("hamburger--active");
            }
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

let modalWindow = document.querySelector('.modal__window');

function toOrder(str){
    modalWindow.classList.toggle('modal__window--active');
    let shawaLabel = document.getElementById('designation');
    shawaLabel.value = str;
    let clientName = document.getElementById('clientName');
    clientName.focus();
}

window.addEventListener('click', (e) => {
    if(e.target == modalWindow){
        modalWindow.classList.toggle('modal__window--active');
    }
});

let closeButton = document.querySelector('.modal__close');

closeButton.addEventListener('click', () => {
    modalWindow.classList.toggle('modal__window--active');
});
