function abrirConvite(){
  document.getElementById("conteudo").scrollIntoView({
    behavior: "smooth"
  });
}

function mostrarSecao(id){
  const secoes = ["dress", "local", "presentes", "confirmacao"];

  secoes.forEach(secao => {
    document.getElementById(secao).style.display = "none";
  });

  document.getElementById(id).style.display = "block";

  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

const destino = new Date("2026-10-23T20:30:00").getTime();

function atualizarContador(){
  const agora = new Date().getTime();
  const distancia = destino - agora;

  if(distancia <= 0){
    document.getElementById("contador").innerHTML =
      "Chegou o grande dia!";
    return;
  }

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((distancia / (1000 * 60)) % 60);
  const segundos = Math.floor((distancia / 1000) % 60);

  document.getElementById("contador").innerHTML =
    `
    <div class="contador-grid">
      <div>${dias}<span>Dias</span></div>
      <div>${horas}<span>Horas</span></div>
      <div>${minutos}<span>Minutos</span></div>
      <div>${segundos}<span>Segundos</span></div>
    </div>
    `;
}

atualizarContador();
setInterval(atualizarContador, 1000);

function criarFlor(){
  const flor = document.createElement("div");
  flor.classList.add("flower");

  const flores = ["🌸", "🌷", "🌺", "💮"];
  flor.innerHTML = flores[Math.floor(Math.random() * flores.length)];

  flor.style.left = Math.random() * 100 + "vw";
  flor.style.fontSize = Math.random() * 14 + 18 + "px";
  flor.style.animationDuration = Math.random() * 5 + 6 + "s";

  document.body.appendChild(flor);

  setTimeout(() => {
    flor.remove();
  }, 11000);
}

setInterval(criarFlor, 900);