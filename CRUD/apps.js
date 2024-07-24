import {validarCampos, validarCorreo, remover} from "./module.js"

const $formulario = document.querySelector("form");

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const direccion = document.querySelector("#direc");
const telefono = document.querySelector("#tel");
const tipo_doc = document.querySelector("#tipo_doc");
const documento = document.querySelector("#num_doc");
const politicas = document.querySelector("#politicas");
const enviar = document.querySelector("#enviar");
const email = document.querySelector("#email");

function quitarCalse (valor) {
    valor.classList.remove("error");
}

// keydown -- cuando ecribo tecla por tecla 
// keypress -- cuando la presiono
// keyup -- cuando la oprimo 


// const validar = (event) => {
//     event.preventDefault()
//     console.log(nombre.value);
//     if (nombre.value === "") {
//         nombre.focus()
//         nombre.classList.add("error")
//     }
//     if( apellido.value === ""){
//         apellido.focus()
//         apellido.classList.add("error")

//     }if(tipo_doc.value === "0"){
//         tipo_doc.focus()
//         tipo_doc.classList.add("error")
//     }
//     if(direccion.value === ""){
//         direccion.focus()
//         direccion.classList.add("error")
//     }if(telefono.value === ""){
//         telefono.focus()
//         telefono.classList.add("error")
//     }if(documento.value === ""){
//         documento.focus()
//         documento.classList.add("error")
//     }

//     if (email.value === "") {
//         email.focus();
//         email.classList.add("error");
//     }
// }

$formulario.addEventListener("submit", (event) => validarCampos(event));  //boton, al dar click haga la funcion

// const remover = (input, validacion) => {
//     if (!input.value == "") {
//         input.classList.add("correcto");
//         input.classList.remove("error");
//     } else {
//         input.classList.remove("correcto");
//         input.classList.add("error");
//     }
// };

nombre.addEventListener("keyup", (e) => {
    remover(e);
});

apellido.addEventListener("keyup", (e) => {
    remover(e);
});

direccion.addEventListener("keyup", (e) => {
    remover(e);
});

telefono.addEventListener("keyup", (e) => {
    remover(e);
});

documento.addEventListener("keyup", (e) => {
    remover(e);
});

// tipo_doc.addEventListener("change", () => {
//     if (tipo_doc.value !== "0") {
//         tipo_doc.classList.remove("error");
//         tipo_doc.classList.add("correcto");
//     } else {
//         tipo_doc.classList.remove("correcto");
//         tipo_doc.classList.add("error");
//     }
// });



enviar.setAttribute('disabled', '');

politicas.addEventListener("change", () => {
    if(politicas.checked){
        enviar.removeAttribute("disabled","");
    }else{
        enviar.setAttribute("disabled","");
    }
})

console.log($formulario)

const numero = function(event) {
    if (event.keyCode < 48 || event.keyCode > 57) {
        event.preventDefault(); // Esto evitará que se ingrese el valor
    }
}

documento.addEventListener("keypress", numero);
telefono.addEventListener("keypress", numero)

const letras = function(event, elemento){
    let letras = /^[A-Za-zÀ-ÿ\s]*$/
    if (!letras.test(event.key)) {
        event.preventDefault();
    }
}

nombre.addEventListener("keypress", (event)=>{
    letras(event, nombre)
});
apellido.addEventListener("keypress", (event)=>{
    letras(event, apellido)
})


documento.addEventListener("keypress", function(event){
    console.log("keypress", event)
    console.log(this.value)
    console.log(event.keyCode)
    
})



"GRUPOS"
"1 => LETRAS 0-9 . - _"
"2 => @"
"3 => SENA"
"4 => ."
"5 => EDU"
""
// 
email.addEventListener('input', (e) => validarCorreo(e));



