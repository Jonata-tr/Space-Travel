const mobMenu = document.querySelector(".header-menu");
const hamburguer = document.querySelector(".mob-menu");

function activeMenu() { 
  mobMenu.classList.toggle("show");
  if (mobMenu.classList.contains('show')) {
    hamburguer.src = "/assets/shared/icon-close.svg";
    return
  }
    hamburguer.src = "/assets/shared/icon-hamburger.svg";
}

document.addEventListener('click', function(event) {
  var target = event.target;
  if (!mobMenu.contains(target) && !hamburguer.contains(target)) {
    mobMenu.classList.remove('show');
    hamburguer.src = "/assets/shared/icon-hamburger.svg";
  }
});


