var v1 = 0, v2 = 0;

function add() {
    document.getElementById('operator').innerHTML = '<strong> + </strong>';
    v1 = parseFloat(document.getElementById('v1').value);
    v2 = parseFloat(document.getElementById('v2').value);
    document.getElementById('ans').innerHTML = '<strong> = ' + (v1 + v2) + '</strong>';
}

function substract() {
    document.getElementById('operator').innerHTML = '<strong> - </strong>';
    v1 = parseFloat(document.getElementById('v1').value);
    v2 = parseFloat(document.getElementById('v2').value);
    document.getElementById('ans').innerHTML = '<strong> = ' + (v1 - v2) + '</strong>';
}

function multiply() {
    document.getElementById('operator').innerHTML = '<strong> x </strong>';
    v1 = parseFloat(document.getElementById('v1').value);
    v2 = parseFloat(document.getElementById('v2').value);
    document.getElementById('ans').innerHTML = '<strong> = ' + (v1 * v2) + '</strong>';
}

function divide() {
    document.getElementById('operator').innerHTML = '<strong> &#247; </strong>';
    v1 = parseFloat(document.getElementById('v1').value);
    v2 = parseFloat(document.getElementById('v2').value);
    document.getElementById('ans').innerHTML = '<strong> = ' + (v1 / v2) + '</strong>';
}

function c() {
    if (confirm('Are you sure to Clear?')) {
        v1 = document.getElementById('v1').value = '0';
        v2 = document.getElementById('v2').value = '0';
        document.getElementById('ans').innerHTML = null;
        document.getElementById('operator').innerHTML = null;
    }
}

function developer() {
    alert('This App is developed by : Sajid Jamali');
}