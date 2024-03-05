var incrementar = document.getElementById("incrementar");
var zerar = document.getElementById("zerar_contador");
var contador = 0;
var mostrador = document.getElementById("mostrador");

incrementar = document.addEventListener("click", (e) => {
  var botao = e.target.id;
  if (botao == "incrementar") {
    contador++;

    mostrador.innerHTML = `O contador está com ${contador} cliques`;
    mostrador.style.display = "block";
  }
  if (botao == "zerar_contador") {
    contador = 0;
    mostrador.style.display = "none";
  }
});