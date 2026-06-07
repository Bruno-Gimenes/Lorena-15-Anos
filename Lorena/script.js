function abrirConvite(){
  const musica = document.getElementById("musica");

  musica.volume = 0.4;
  musica.play();

  document.getElementById("conteudo").scrollIntoView({
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

  document.getElementById("contador").innerHTML =
    dias + " dias, " + horas + " horas e " + minutos + " minutos";
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