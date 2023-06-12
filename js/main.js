var data = document.querySelector('#ag-data');
var hora = document.querySelector('#ag-hora');
var resultadoData = document.querySelector('#ag-resultado-data');
var resultadoHora = document.querySelector('#ag-resultado-hora');

function enviar() {
    resultadoData.innerHTML = data.value;
    resultadoHora.innerHTML = hora.value;
}