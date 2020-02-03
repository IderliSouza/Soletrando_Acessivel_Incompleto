


	 //Sorteio da palavra
	 function SorteiaPalavra(tema){
             
	 	var sorteioArray = new Array("Maçã","Banana", "Abacaxi", "Pera", "Mamão");
	 		
	 	var tema = tema;



	 	if(this.tema == "Fruta" && sorteioArray == null){
	 		sorteioArray =  new Array("Maçã","Banana", "Abacaxi", "Pera", "Mamão");
	 		
	 	}

	 	if (this.tema=="Geral"&& sorteioArray == null) {

	 		var geral = new Array();
	 		sorteioArray = geral;
	 	}



	 	this.sorteio = function (){
	 		
	 		var palavraSorteio = sorteioArray[Math.floor(Math.random()*sorteioArray.length)];
	 		
	 		this.atualizaArray(palavraSorteio);

	 		return palavraSorteio;                

	 	}



	 	this.vetorsorteio = function(){

	 		return sorteioArray;
	 	}

	//FunÃ§Ã£o que atualiza os elementos do array so qual sera sorteada a palavra, 
	//tentar impedir que os sorteios sejam repetidos.
	//Buscar uma refatoraÃ§Ã£o adequada para o problema. 

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
