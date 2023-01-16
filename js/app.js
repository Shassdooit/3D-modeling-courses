let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');
let menuLinks = menu.querySelectorAll('.nav__link')

burger.addEventListener('click',

function() {

  burger.classList.toggle('burger--active');

  menu.classList.toggle('nav--active');

})

menuLinks.forEach(function(el){
el.addEventListener('click', function(){

  burger.classList.remove('burger--active');

  menu.classList.remove('nav--active');

  })
})
