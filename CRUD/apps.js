import {validarCampos, validarCorreo, remover, validarLetras, validarNumero, validarKey, validarPoliticas} from "./module.js"

const $formulario = document.querySelector("form");

//variables
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const direccion = document.querySelector("#direc");
const telefono = document.querySelector("#tel");
const tipo_doc = document.querySelector("#tipo_doc");
const documento = document.querySelector("#num_doc");
const politicas = document.querySelector("#politicas");
const enviar = document.querySelector("#enviar");
const email = document.querySelector("#email");

function quitarCalse (valor) {valor.classList.remove("error");}

// const validar 

$formulario.addEventListener("submit", (event) => validarCampos(event));  //boton, al dar click haga la funcion


const capturarElemento = document.querySelectorAll("form > *[required]")
console.log(capturarElemento);

//eventos remover
nombre.addEventListener("keyup", (e) => {remover(e)});

apellido.addEventListener("keyup", (e) => {remover(e)})

direccion.addEventListener("keyup", (e) => {remover(e)});

telefono.addEventListener("keyup", (e) => {remover(e)});

documento.addEventListener("keyup", (e) => {remover(e)});


email.addEventListener('input', (e) => validarCorreo(e));

enviar.setAttribute('disabled', '');

politicas.addEventListener('change ', (e) => validarPoliticas(e, enviar))

documento.addEventListener("keypress", (e) => validarNumero(e));

telefono.addEventListener("keypress", (e) => validarNumero(e))

nombre.addEventListener("keypress", (e)=>{validarLetras(e)});

apellido.addEventListener("keypress", (e)=>{validarLetras(e)})

documento.addEventListener("keypress", (e) => {validarKey(e)})
 




