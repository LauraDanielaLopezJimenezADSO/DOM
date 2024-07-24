
//declaramos variables
const $formulario = document.querySelector("form")
const $nombre = document.querySelector("#name")
const $apellido = document.querySelector("#apellido")
const $telefono = document.querySelector("#telefono")
const $direccion = document.querySelector("#direccion")
const $tipo = document.querySelector("#tipo")
const $documento = document.querySelector("#documento")
const $email = document.querySelector("#email")
const $politicas = document.querySelector("#politicas")
const $submitButton = document.querySelector('#button');

// console.log($politicas);
// console.log($submitButton);
const $ListaSelectores = [$nombre, $apellido, $direccion, $telefono, $tipo, $documento, $email];

//declaramos los metodos o funciones
const validar = (event) => {
    
    if($nombre.value === ''){
        // alert("campo vacio name")
        event.preventDefault()
        $nombre.focus()
        $nombre.classList.add("error")
    }
    if($apellido.value === ''){
        // alert("campo vacio apellido")
        event.preventDefault()
        $apellido.focus()
        $apellido.classList.add("error")
    }
    if($telefono.value === ''){
        // alert("campo vacio telefono")
        event.preventDefault()
        $telefono.focus()
        $telefono.classList.add("error")
    }
    if($direccion.value === ''){
        // alert("campo vacio direccion")
        event.preventDefault()
        $direccion.focus()
        $direccion.classList.add("error")
    }
    if($tipo.value === ''){
        // alert("campo vacio tipo")
        event.preventDefault()
        $tipo.classList.add("error")
        $tipo.focus()
    }
    if($documento.value === ''){
        // alert("campo vacio documento")
        event.preventDefault()
        $documento.focus()
        $documento.classList.add("error")
    }

}

console.log($formulario)

//eventos
$formulario.addEventListener("submit", validar)
$nombre.addEventListener("blur", function () {
    if($nombre.value != ""){
        $nombre.classList.remove("error")
    }
})

const validacion = (evt, selector) => {
    if (selector.value.trim() === '') {
        selector.classList.add('error');
        selector.classList.remove('correcto');
    } else {
        selector.classList.remove('error');
        selector.classList.add('correcto');
    }

    validar(evt);
};

// $ListaSelectores.forEach((selector) => {
//     selector.classList.add("uncheck"),
//     $submitButton.classList.add("uncheck"),
//     $submitButton.setAttribute("disabled"),
//     selector.disabled = true;
// })

// $formulario.addEventListener('submit', validar);

// $ListaSelectores.forEach((campo) => {
//     campo.addEventListener('blur', (evt) => validacion(evt, campo));
// });

// $submitButton.setAttribute('disabled', 'disabled');

// keydown ocurren cuando se presiona una tecla
// keyup cuando se suelta.
// keypress cuando pulsamos la tecla

// document.addEventListener("keypress", function(event){  
//     // console.log("keypress",event);
//     // console.log(this.value);
//     console.log("código del teclado",event.keyCode);

//     let una = event.keyCode >= 40 && event.keyCode <= 57 ? "si es valido" : event.preventDefault()

//     console.log(una);
//     // if (event.keyCode >= 40   && event.keyCode <= 57) {
//     //     console.log("si");
//     // } else{
//     //     event.preventDefault(); //no deja que se ejecute el evento.
//     // }
// });

// numeros
const numero = function(event) {
    if (event.keyCode < 48  || event.keyCode > 57) event.preventDefault(); //no deja que se ejecute el evento.
    
}

// letras
const letras = function(event, elemento) {
    // if (event.keyCode >= 97  || event.keyCode <= 122) event.preventDefault(); //no deja que se ejecute el evento. 
    // console.log(elemento.value);
    let letras = /^[a-zA-ZÀ\s]+$/
    if (letras.test(event.key)) {
        console.log("Claro que yes");
    }else{
        event.preventDefault()
    }
}


// correo
// const correo = function (event) {
//     if(event.keyCode = 64) event.preventDefault();
// }

$nombre.addEventListener("keydown", function (event) {
    letras(event, $nombre)
});

$apellido.addEventListener("keypress", function (event) {
    letras(event, $apellido)
});


$documento.addEventListener("keypress", numero);
$telefono.addEventListener("keypress", numero);
// $email.addEventListener("keypress", correo);



$documento.addEventListener("keypress", function(event) {
    console.log("keypress", event);
    console.log(this.value);
    console.log(event.keyCode);
})


// addEventListener("DOMContentLoaded", (event) => {
//     if(!$politicas.checked){
//         console.log($submitButton)
//         $submitButton.setAttribute("disabled");
//     }
// })

// $politicas.addEventListener("change", function (e) {
//     console.log(e.target.checked);
//     if(e.target.checked){
//         $submitButton.removeAttribute("disabled")
//     }
// })

$politicas.addEventListener("change", function(event) {
    if(!event.target.checked){
        $ListaSelectores.forEach((selector) => {
            selector.classList.add("uncheck");
            selector.disabled = true;
            $submitButton.setAttribute("disabled", "");
            $submitButton.classList.add("uncheck");
        })
    }else{
        $ListaSelectores.forEach((selector) => {
            selector.classList.remove("uncheck");
            selector.disabled = false;
            $submitButton.removeAttribute("disabled");
            $submitButton.classList.remove("uncheck");
        })
    }
})
"GRUPOS"
"1 => LETRAS 0-9 . - _"
"2 => @"
"3 => SENA"
"4 => ."
"5 => EDU"
""
emai = /[a-zA-Z0-9-._]+@[a-zA-Z0-9-._]+\.[a-zA-Z]{2,3}/;

$email.addEventListener('input', function() {
    campo = event.target;
        
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(campo.value)) {
        selector.classList.add('error');
        selector.classList.remove('correcto');
    } else {
        selector.classList.remove('error');
        selector.classList.add('correcto');
    }
});