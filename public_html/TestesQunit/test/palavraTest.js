/* global palavra, QUnit */


QUnit.test("Palavra/nome", function (assert) {
    
       var result = palavra.nome();
       assert.equal(result, "Banana");
});

QUnit.test("Palavra/tema", function (assert) {
    
       var result = palavra.tema();
       assert.equal(result, "Fruta");
});

QUnit.test("Palavra2/nome", function (assert) {
    
       var result = palavra2.nome();
       assert.notEqual(result, "Banana");
});

QUnit.test("Palavra2/tema", function (assert) {
    
       var result = palavra2.nome();
       assert.notEqual(result, "Fruta");
});

QUnit.test("Palavra2/nome", function (assert) {
    
       var result = palavra2.nome();
       assert.equal(result, null);
});