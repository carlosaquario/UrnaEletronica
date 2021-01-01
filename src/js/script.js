const botao1 = document.querySelector(".teclado-botao1");
const numero = document.querySelector(".numero");

botao1.addEventListener("click", clicar);

console.log(botao1.value);

function clicar() {
    numero.innerHTML = 1;
}