var v1 = 0, v2 = 0;

function add() {
    document.getElementById('operator').innerHTML = '<strong> + </strong>';
    v1 = parseFloat(document.getElementById('v1').value);
    v2 = parseFloat(document.getElementById('v2').value);
    var total = v1 + v2;
    document.getElementById('ans').innerHTML = '<strong> = ' + total + '</strong>';
    document.getElementById('v1').value = total;
    document.getElementById('v2').value = '0';
}

function substract() {
    document.getElementById('operator').innerHTML = '<strong> - </strong>';
    v1 = parseFloat(document.getElementById('v1').value);
    v2 = parseFloat(document.getElementById('v2').value);
    var total = v1 - v2;
    document.getElementById('ans').innerHTML = '<strong> = ' + total + '</strong>';
    document.getElementById('v1').value = total;
    document.getElementById('v2').value = '0';
}

function multiply() {
    document.getElementById('operator').innerHTML = '<strong> x </strong>';
    v1 = parseFloat(document.getElementById('v1').value);
    v2 = parseFloat(document.getElementById('v2').value);
    var total = v1 * v2;
    document.getElementById('ans').innerHTML = '<strong> = ' + total + '</strong>';
    document.getElementById('v1').value = total;
    document.getElementById('v2').value = '0';
}

function divide() {
    document.getElementById('operator').innerHTML = '<strong> &#247; </strong>';
    v1 = parseFloat(document.getElementById('v1').value);
    v2 = parseFloat(document.getElementById('v2').value);
    var total = v1 / v2;
    document.getElementById('ans').innerHTML = '<strong> = ' + total + '</strong>';
    document.getElementById('v1').value = total;
    document.getElementById('v2').value = '0';
}

function c() {
    v1 = document.getElementById('v1').value = '0';
    v2 = document.getElementById('v2').value = '0';
    document.getElementById('ans').innerHTML = null;
    document.getElementById('operator').innerHTML = null;
}
