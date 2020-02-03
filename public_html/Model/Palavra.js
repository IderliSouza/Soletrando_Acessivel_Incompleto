
/*
* Class palavra
* 
*/
function Palavra(tema, nome, dificuldade, significado, aplicacao, imagem, audio) {
    
    var tema = tema;
    var nome = nome;
    var dificuldade = dificuldade;
    var significado = significado;
    var aplicacao = aplicacao;
    var imagem = imagem;
    var audio = audio;


    /*
    * Metodos para acessar as propriedades dos objetos.
    *
    */


    this.nome = function () {
         return nome;
     };

    this.tema = function () {
        return tema;
    };

    this.dificuldade = function(){
        return dificuldade;
    };

    this.significado = function() {
        return significado;
    };

    this.aplicacao =function(){
        return aplicacao;  
    };

    this.imagem = function () {

        return imagem;
    };

    this.audio = function(){
        return audio;
    };

}