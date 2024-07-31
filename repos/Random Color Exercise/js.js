const botao = document.querySelector('button');
const body = document.querySelector('body');
const titulo = document.querySelector('h1');
let randomColor;
function setRandomColor() {
	randomColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
	body.style.backgroundColor = randomColor;
}

botao.addEventListener('click', setRandomColor);
botao.addEventListener('click', () => {
	titulo.innerText = randomColor
})