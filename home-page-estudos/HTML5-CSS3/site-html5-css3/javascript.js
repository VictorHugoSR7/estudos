var botao = document.getElementById("meuBotao");
var audio = document.getElementById("meuAudio");

botao.addEventListener("click", function() {
  audio.currentTime = 0;
  audio.play();
});