/*let titulo = document.querySelector('h1')
titulo.innerHTML = "Juego del número secreto"

let parrafo = document.querySelector('p')
parrafo.innerHTML = "Ingrese un número de 1 a 10: "
*/

let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function numeroSecretoAleatorio(){
    let numeroSecreto = Math.floor(Math.random()*10)+1;

    if(listaDeNumerosSorteados.length == 10){
        asignarTextoElemento('p', 'Se sortearon todos los números');
    } else {
        if(listaDeNumerosSorteados.includes(numeroSecreto)){
            return numeroSecretoAleatorio();
        }else {
            listaDeNumerosSorteados.push(numeroSecreto);
            return numeroSecreto;
        }  
    }  
}

function intentoDeUsuario(){
    console.log(numeroSecreto)
    let numeroDeUsuario = parseInt(document.getElementById('inputNumero').value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Felicidades!!! Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarInput();
    }
}
function condicionInicial(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Ingrese un número del 1 al 10');
    numeroSecreto = numeroSecretoAleatorio();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarInput();
    condicionInicial();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

function limpiarInput(){
    let valorInput = document.querySelector('#inputNumero');
    valorInput.value = '';

}

condicionInicial();
