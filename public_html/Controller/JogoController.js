
/*
 *  Classe de controle do game, contendo alguns dos metodos basicos para o funcionamento.
 *  adcionar metodos para fazer as conecxoes intermadiarias entre view e model, ou adcionar novas 
 *  controllers para essa função.
 */

function JogoController() {

    var tema = "Fruta";
    var palavra = " ";

//    this.configuracao = function (tema) {
//
//    };

    this.sorteio = function () {
        document.write("alo")

        var sort = new sorteiapalavra();
        this.palavra = sort.SorteiaPalavra(this.tema);

    };

//    this.criapalavra = function () {
//
//    };

    this.chamaview = function () {
        document.write(palavra)
    };


}
