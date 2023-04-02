let counter = 0;

function activeMenu() {
  const mobMenu = document.querySelector(".header-menu");
  const hamburguer = document.querySelector(".mob-menu");

  console.log(hamburguer);

  if (counter == 0) {
    hamburguer.src = "/assets/shared/icon-close.svg";
    mobMenu.classList.toggle("show");
    counter = 1;
    return
  } else {
    hamburguer.src = "/assets/shared/icon-hamburger.svg";
    mobMenu.classList.toggle("show");
  }
  counter = 0;
}