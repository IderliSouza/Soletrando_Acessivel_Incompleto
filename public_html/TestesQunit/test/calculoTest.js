/* global calculo, QUnit */


QUnit.test("Palavra", function (assert) {
    
       var result = calculo.nome();
       assert.equal(result, "Macã");
});


QUnit.test("calculo", function (assert) {
    
       var result = calculo.tema();
       assert.equal(result, "Fruta");
});

QUnit.test("palavra2", function (assert) {
    
       var result = palavra.nome();
       assert.equal(result, "Banana");
});