
//declaramos variables
const $formulario = document.querySelector("form")
const $nombre = document.querySelector("#name")
const $apellido = document.querySelector("#apellido")
const $telefono = document.querySelector("#telefono")
const $direccion = document.querySelector("#direccion")
const $tipo = document.querySelector("#tipo")
const $documento = document.querySelector("#documento")
const $email = document.querySelector("#email")
const $submitButton = document.querySelector('form button[type="submit"]');

const $ListaSelectores = [$nombre, $apellido, $direccion, $telefono, $tipo, $documento, $email];

//declaramos los metodos o funciones
const validar = (event) => {
    
    // if($nombre.value === ''){
    //     alert("campo vacio name")
    //     event.preventDefault()
    //     $nombre.focus()
    //     $nombre.classList.add("error")
    // }
    // if($apellido.value === ''){
    //     alert("campo vacio apellido")
    //     event.preventDefault()
    //     $apellido.focus()
    //     $apellido.classList.add("error")
    // }
    // if($telefono.value === ''){
    //     alert("campo vacio telefono")
    //     event.preventDefault()
    //     $telefono.focus()
    //     $telefono.classList.add("error")
    // }
    // if($direccion.value === ''){
    //     alert("campo vacio direccion")
    //     event.preventDefault()
    //     $direccion.focus()
    //     $direccion.classList.add("error")
    // }
    // if($tipo.value === ''){
    //     alert("campo vacio tipo")
    //     event.preventDefault()
    //     $tipo.classList.add("error")
    //     $tipo.focus()
    // }
    // if($documento.value === ''){
    //     alert("campo vacio documento")
    //     event.preventDefault()
    //     $documento.focus()
    //     $documento.classList.add("error")
    // }

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


$formulario.addEventListener('submit', validar);

$ListaSelectores.forEach((campo) => {
    campo.addEventListener('blur', (evt) => validacion(evt, campo));
});

$submitButton.setAttribute('disabled', 'disabled');
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
const correo = function (event) {
    if(event.keyCode = 64) event.preventDefault();
}

$nombre.addEventListener("keydown", function (event) {
    letras(event, $nombre)
});

$apellido.addEventListener("keypress", function (event) {
    letras(event, $apellido)
});


$documento.addEventListener("keypress", numero);
$telefono.addEventListener("keypress", numero);
$email.addEventListener("keypress", correo);



$documento.addEventListener("keypress", function(event) {
    console.log("keypress", event);
    console.log(this.value);
    console.log(event.keyCode);
})






