
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

    this.nome = function () {
         return nome;
     };

    this.tema = function () {
        return tema;
    };
}