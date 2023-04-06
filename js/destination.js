const planets = [
  {
    img: "/assets/destination/image-moon.png",
    nome: "MOON",
    texto:
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distancia: "384,400 KM",
    tempo: "3 DAYS",
  },
  {
    img: "/assets/destination/image-mars.png",
    nome: "MARS",
    texto:
    "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distancia: "225 MIL. km",
    tempo: "9 MONTHS",
  },
  {
    img: "/assets/destination/image-europa.png",
    nome: "EUROPA",
    texto:
    "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distancia: "600 MIL. KM",
    tempo: "3 YEARS",
  },
  {
    img: "/assets/destination/image-titan.png",
    nome: "TITAN",
    texto:
    "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distancia: "1.6 BIL. KM",
    tempo: "7 YEARS",
  },
];


function changeDestiny(props){
  const navList = document.querySelectorAll('.conteudo-menu > li')
  const planetImg = document.querySelector(".planet-img");
  const planetName = document.querySelector(".planet-name")
  const planetText = document.querySelector(".planet-texto")
  const distancia = document.querySelector(".distancia")
  const tempo = document.querySelector(".tempo")

  planetImg.src = planets[props].img
  for(let i = 0; i < navList.length; i++ ){
    if(props != i){
      navList[i].classList.remove('active')
    } else{
      navList[props].classList.add('active')
    }
  }
  planetName.textContent = planets[props].nome;
  planetText.textContent = planets[props].texto;
  distancia.textContent = planets[props].distancia;
  tempo.textContent = planets[props].tempo;

}