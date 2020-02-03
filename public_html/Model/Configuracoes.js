function Configurações(modoJogo, dificuldade) {

    var modoJogo = modoJogo;
    var dificuldade = dificuldade;

    this.modoJogo = function () {
        return modoJogo;
    };

    function (modoJogo) {
        this.modoJogo = modoJogo;
    }
    
    this.dificuldade = function () {
        return dificuldade;
    };

    function (dificuldade) {
        this.dificuldade = dificuldade;
    }

}