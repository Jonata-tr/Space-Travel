const crewMembers = [
  {
    cargo: 'Commander',
    nome:'Dougla Hurley',
    sobre: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    img: "/assets/crew/image-douglas-hurley.png"
  },
  {
    cargo: 'Mission Specialist',
    nome:'MARK SHUTTLEWORTH',
    sobre: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    img: "/assets/crew/image-mark-shuttleworth.png"
  },
  {
    cargo: 'PILOT',
    nome:'Victor Glover',
    sobre: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
    img: "/assets/crew/image-victor-glover.png"
  },
  {
    cargo: 'Flight Engineer',
    nome:'Anousheh Ansari',
    sobre: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    img: "/assets/crew/image-anousheh-ansari.png"
  }
]

function crew() {
  const cargo = document.querySelector('.cargo')
  const nome = document.querySelector('.nome')
  const sobre = document.querySelector('.sobre')
  const img = document.querySelector('.img')

  const teste = document.querySelectorAll("input[type='radio']")
  for(let i= 0; i < teste.length; i++){
    if(teste[i].checked){
      cargo.textContent = crewMembers[i].cargo
      nome.textContent = crewMembers[i].nome
      sobre.textContent = crewMembers[i].sobre
      img.src = crewMembers[i].img
      return
    }
  }
}