/* global palavra, QUnit */


QUnit.test("Palavra/nome", function (assert) {
    
       var result = sorteia.sorteio();
       assert.equal(result, "Banana");
});


QUnit.test("Palavra/nome", function (assert) {
    
       var result = sorteia.sorteio();
       assert.equal(result, "Pera");
});


QUnit.test("Palavra/nome", function (assert) {
    
       var result = sorteia.vetorsorteio();
       assert.equal(result, " ");
});