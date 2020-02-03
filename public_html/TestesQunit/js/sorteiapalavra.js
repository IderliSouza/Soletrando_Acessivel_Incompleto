	/*
	* Classe Sorteiapalavra. Recebe uma string tema, instancia um vetor relacionado
	* com o tema e a cada sorteio é removido o elemento sorteado do vetor
	*
	*/	

	 
	 function SorteiaPalavra(tema){
	 	var sorteioArray = null;
	 	var tema = tema;
	 	
	 	this.sorteio = function (){

	 		if(this.tema == "Fruta" && sorteioArray == null){

	 			sorteioArray =  new Array("Maça","Banana", "Abacaxi", "Pera", "Mamão");


	 		}

	 		if (this.tema=="Geral"&& sorteioArray == null) {

	 			var geral = new Array();
	 			sorteioArray = geral;
	 		}
	 		
	 		var palavraSorteio = sorteioArray[Math.floor(Math.random()*sorteioArray.length)];
	 		
	 		this.atualizaArray(palavraSorteio);

	 		return palavraSorteio;                

	 	}

           /*  Metodo criado esclusivamente pra testar o arrayde vetores apos chamar o 
            *  Atualiza vetor.
			*
            */

	 	this.vetorsorteio = function(){

	 		return sorteioArray;
	 	}

	//Função que atualiza os elementos do array so qual sera sorteada a palavra, 
	//tentar impedir que os sorteios sejam repetidos.
	//Buscar uma refatoração adequada para o problema. 

	this.atualizaArray = function(palavraSorteio){

		var sorteioArrayAtualiza = new Array();

		for (var i =0; i < sorteioArray.length; i++) {        
			if (palavraSorteio != sorteioArray[i] ) {
				sorteioArrayAtualiza.push(sorteioArray[i]);
			}
		}

		sorteioArray = sorteioArrayAtualiza;
	}

}
