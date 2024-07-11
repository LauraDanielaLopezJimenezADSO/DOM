//declaramos variables
const $formulario = document.querySelector("form")
const $nombre = document.querySelector("#name")
const $apellido = document.querySelector("#apellido")
const $telefono = document.querySelector("#telefono")
const $direccion = document.querySelector("#direccion")
const $tipo = document.querySelector("#tipo")
const $documento = document.querySelector("#documento")

//declaramos los metodos o funciones
const validar = (event) => {
    
    if($nombre.value === ''){
        alert("campo vacio name")
        event.preventDefault()
        $nombre.focus()
        $nombre.classList.add("error")
    }
    if($apellido.value === ''){
        alert("campo vacio apellido")
        event.preventDefault()
        $apellido.focus()
        $apellido.classList.add("error")
    }
    if($telefono.value === ''){
        alert("campo vacio telefono")
        event.preventDefault()
        $telefono.focus()
        $telefono.classList.add("error")
    }
    if($direccion.value === ''){
        alert("campo vacio direccion")
        event.preventDefault()
        $direccion.focus()
        $direccion.classList.add("error")
    }
    if($tipo.value === ''){
        alert("campo vacio tipo")
        event.preventDefault()
        $tipo.classList.add("error")
        $tipo.focus()
    }
    if($documento.value === ''){
        alert("campo vacio documento")
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