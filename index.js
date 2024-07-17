var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var sum = document.getElementById('sum');
var sub = document.getElementById('sub');
var mult = document.getElementById('mult');
var div = document.getElementById('div');
var res = document.getElementById('res');
function addiction() {
    var a = parseFloat(num1.value);
    var b = parseFloat(num2.value);
    if (isNaN(a) || isNaN(b)) {
        alert("Não foi possível executar o cálculo ,  deves adicionar os números solicitados");
    }
    else {
        var result = a + b;
        res.textContent = result.toString();
    }
}
sum.addEventListener('click', addiction);
function subtraction() {
    var a = parseFloat(num1.value);
    var b = parseFloat(num2.value);
    if (isNaN(a) || (b)) {
        alert("Não foi possível executar o cálculo ,  deves adicionar os números solicitados");
    }
    else {
        var result = a - b;
        res.textContent = result.toString();
    }
}
sub.addEventListener('click', subtraction);
function multiplication() {
    var a = parseFloat(num1.value);
    var b = parseFloat(num2.value);
    if (isNaN(a) || isNaN(b)) {
        alert("Não foi possível executar o cálculo ,  deves adicionar os números solicitados");
    }
    else {
        var result = a * b;
        res.textContent = result.toString();
    }
}
mult.addEventListener('click', multiplication);
function division() {
    var a = parseFloat(num1.value);
    var b = parseFloat(num2.value);
    if (isNaN(a) || isNaN(b)) {
        alert("Não foi possível executar o cálculo ,  deves adicionar os números solicitados");
    }
    else {
        var result_1 = a / b;
        res.textContent = result_1.toString();
    }
    var result = a / b;
    res.textContent = result.toString();
}
div.addEventListener('click', division);
