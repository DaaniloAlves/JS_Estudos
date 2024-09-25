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
	titulo.innerText = randomColor;
})

class Teste {
	constructor() {
		this.nome;
		this.idade;
	}

	metodo() {
		console.log(`Seu nome � ${this.nome} e sua idade � ${this.idade}`)
	}
	somar(valor) {
		console.log(this.nome + valor)
	}
	atribuirValores(nome, idade) {
		this.nome = nome;
		this.idade = idade;
	}
}

const meuTeste = new Teste();
meuTeste.metodo();
meuTeste.atribuirValores("Danilo", 20);
meuTeste.metodo();
meuTeste.somar(23);