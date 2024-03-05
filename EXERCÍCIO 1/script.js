function changeText() {
    const name = prompt("Digite seu Nome:");

    const alteracao = document.getElementsByTagName('p');
    alteracao[0].innerText = `E ai ${name}! Você está deixando o seu site dinâmico.`;
}