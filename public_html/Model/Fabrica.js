//Classe Fabrica com EcmaScript6
import * from "Palavra.js";
class Fabrica{
	//Instanciando a palavra do sorteio.
	constructor(Nome){
		if(this.Nome == "Maca"){
			Palavra maca = new Palavra("Fruta", "Maçã","Alguma aplicação",
				"Algum significado", "MacaAudio", "MacaImagem");
			return maca; 
		}
		if(this.Nome == "Mamao"){
			Palavra Mamao = new Palavra("Fruta", "Mamao","Alguma aplicação",
				"Algum significado", "MamaoAudio", "MamaoImagem");
			return Mamao; 
		}
		if(this.Nome == "Abacaxi"){
			Palavra Abacaxi = new Palavra("Fruta", "Abacaxi","Alguma aplicação",
				"Algum significado", "AbacaxiAudio", "AbacaxiImagem");
			return Abacaxi; 
		}
		if(this.Nome == "Banana"){
			Palavra Banana = new Palavra("Fruta", "Banana","Alguma aplicação",
				"Algum significado", "BananaAudio", "BananaImagem");
			return Banana; 
		}
		if(this.Nome == "Pera"){
			Palavra Pera = new Palavra("Fruta", "Pera","Alguma aplicação",
				"Algum significado", "PeraAudio", "PeraImagem");
			return Pera; 
		}
	}
}
