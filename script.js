/*
CASTING = CONVERTIR DATOS
string = String(), toString
numeros = Number(), parceInt()
decimal = Number(), parceFloat()

typeof = nos permite conocer el valor del dato

//ejemplo
let letra = 2;
letra = toString(letra);
console.log(typeof(letra)+'  '+letra);

let numero = '12';
numero = parseInt(numero);
console.log(numero);
*/

let arreglo = [];
let valores = [];

function Calcular() {
    let num1 = document.getElementById('txtNum1').value;
    let num2 = document.getElementById('txtNum2').value;
    let suma = parseFloat(num1) + parseFloat(num2);
    let resta = parseFloat(num1) - parseFloat(num2);
    let multi = parseFloat(num1) * parseFloat(num2);
    let division = parseFloat(num1) / parseFloat(num2);
    let residuo = parseFloat(num1) % parseFloat(num2);

    if (num1 == '' || num2 == '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El campo de valor 1 y valor 2, no deben estar vacío...',
        });
    } else {
        let valor = {
            numero1: num1,
            numero2: num2,
            Suma: suma,
            Resta: resta,
            Multi: multi,
            Division: division,
            Residuo: residuo
        };
        valores.push(valor);
        console.log(valores);

        //llamamos a la funcion que agrega una fila a la tabla
        agregarFilaTabla();
    }


}

function agregarFilaTabla() {
    let tabla = document.getElementById("miTabla");

    let fila = tabla.insertRow(-1);

    let celdaNum1 = fila.insertCell(0);

    let celdaNum2 = fila.insertCell(1);

    let celdaSuma = fila.insertCell(2);
    let celdaResta = fila.insertCell(3);
    let celdaMulti = fila.insertCell(4);
    let celdaDivision = fila.insertCell(5);
    let celdaResiduo = fila.insertCell(6);

    celdaNum1.innerHTML = valores[valores.length - 1].numero1;
    celdaNum2.innerHTML = valores[valores.length - 1].numero2;
    celdaSuma.innerHTML = valores[valores.length - 1].Suma;
    celdaResta.innerHTML = valores[valores.length - 1].Resta;
    celdaMulti.innerHTML = valores[valores.length - 1].Multi;
    celdaDivision.innerHTML = valores[valores.length - 1].Division;
    celdaResiduo.innerHTML = valores[valores.length - 1].Residuo;


    document.getElementById("txtNum1").value = '';
    document.getElementById("txtNum2").value = '';
}

function btnInfo() {
    Swal.fire({
        title: '<strong><u>Instrucciones</u></strong>',
        icon: 'info',
        html: '<ul><li>El usuario debe ingresar los dos valores.</li><li>Si no ingresa un valor le aparece un mensaje</li><li>Debe de presionar el botón para registrar los datos</li><li>En la tabla se muestra los datos registrados de las operaciones</li></ul>',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
    })
}