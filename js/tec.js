const tecnologias =[
  {
    tipo: 'LAUNCH VEHICLE',
    texto: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",   
    img: `
            <source media="(min-width:801px)" srcset="/assets/technology/image-launch-vehicle-portrait.jpg">
            <source media="(max-width:800px)" srcset="/assets/technology/image-launch-vehicle-landscape.jpg">
            <img src="/assets/technology/image-launch-vehicle-portrait.jpg" alt="">
          `
  },
  {
    tipo: 'SPACEPORT',
    texto:'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    img:`
    <source media="(min-width:801px)" srcset="/assets/technology/image-spaceport-portrait.jpg">
    <source media="(max-width:800px)" srcset="/assets/technology/image-spaceport-landscape.jpg">
    <img src="/assets/technology/image-spaceport-portrait.jpg" alt="">
  `
  },
  {
    tipo: 'SPACE CAPSULE',
    texto:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    img:`
    <source media="(min-width:801px)" srcset="/assets/technology/image-space-capsule-portrait.jpg">
    <source media="(max-width:800px)" srcset="/assets/technology/image-space-capsule-landscape.jpg">
    <img src="/assets/technology/image-space-capsule-portrait.jpg" alt="">
    `
  }

]

function tec() {
  const tipo= document.querySelector('.tec-name')
  const texto = document.querySelector('.tec-text')
  const img = document.querySelector('.tec-img picture')

  const teste = document.querySelectorAll("input[type='radio']")
  for(let i= 0; i < teste.length; i++){
    if(teste[i].checked){
      tipo.textContent = tecnologias[i].tipo
      texto.textContent = tecnologias[i].texto
      img.innerHTML = tecnologias[i].img      
      console.log(img);
      return
    }
  }
}