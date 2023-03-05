//menu resposive
$(document).ready(function(){
    $(".header__menu").on("click",function(){
        $("nav").slideToggle();
    });




});

//barra fija

function navegacionFija(){

    window.addEventListener("scroll", function(){
      //leemos el scroll y agregamos las clases a los elementos 
      header = document.querySelector(".header__contenido");
       header.classList.toggle("abajo",window.scrollY > 0);


        

 }); 


}


//imagen
const imagen = document.getElementById("header__logo");
window.addEventListener("scroll", function() {
  if (window.scrollY > 0) {
    imagen.src = "build/img/logo2.png";
  } 

  else {
  imagen.src = "build/img/logo.png";
    }
});


//navegacion
let previousPosition = window.pageYOffset;

window.onscroll = function() {
  let currentPosition = window.pageYOffset;

  if (currentPosition <= 1) {
    // El usuario ha regresado a la parte superior de la página
    const navLinks = document.querySelectorAll('.navegacion__link');

    navLinks.forEach(link => {
      link.classList.remove('link');
    });
  } else if (previousPosition > currentPosition) {
    // El usuario está haciendo scroll hacia arriba
    const navLinks = document.querySelectorAll('.navegacion__link');

    navLinks.forEach(link => {
      link.classList.add('link');
    });
  } else {
    // El usuario está haciendo scroll hacia abajo
    const navLinks = document.querySelectorAll('.navegacion__link');

    navLinks.forEach(link => {
      link.classList.add('link');
    });
  }

  previousPosition = currentPosition;
};

   navegacionFija();
