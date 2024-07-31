export function validarCorreo(e) {
    if (/^[\w-._]+@[\w-._]+\.([\w-._]{2,3}){1,2}$/.test(e.target.value)) {
        e.target.classList.remove("error");
        e.target.classList.add("correcto");
    } else {
        e.target.classList.remove("correcto");
        e.target.classList.add("error");
    }
}

export function validarCampos(e) {
    e.preventDefault()
    console.log(nombre.value);
    if (nombre.value === "") {
        e.target.focus()
        e.target.classList.add("error")
    
    }if( apellido.value === ""){
        e.target.focus()
        e.target.classList.add("error")

    }if(tipo_doc.value === "0"){
        e.target.classList.add("error")
        e.target.focus()
    }
    if(direccion.value === ""){
        e.target.focus()
        e.target.classList.add("error")
    }if(telefono.value === ""){
        e.target.focus()
        e.target.classList.add("error")
    }if(documento.value === ""){
        e.target.focus()
        e.target.classList.add("error")
    }

    if (email.value === "") {
        e.target.focus();
        e.target.classList.add("error");
    }
}

export function remover(e) {
    if (!e.target.value == "") {
        e.target.classList.add("correcto");
        e.target.classList.remove("error");
    } else {
        e.target.classList.remove("correcto");
        e.target.classList.add("error");
    }
}

export function validarTipoDoc(e) {
    if (e.target.value !== "0") {
        e.target.classList.remove("error");
        e.target.classList.add("correcto");
    } else {
        e.target.classList.remove("correcto");
        e.target.classList.add("error");
    }
}

export function validarLetras(e) {
    let letras = /^[A-Za-zÀ-ÿ\s]*$/
    if (!letras.test(e.key)) {
        e.preventDefault();
    }
}

export function validarNumero(e) {
    if (e.keyCode < 48 || e.keyCode > 57) {
        e.preventDefault(); // Esto evitará que se ingrese el valor
    }
}


export function validarPoliticas(e, boton) {
    if(e.target.checked){
        boton.removeAttribute("disabled","");
    }else{
        boton.setAttribute("disabled","");
    }
}


export function validarKey(e) {
    console.log("keypress", e)
    console.log(e.target.value)
    console.log(e.keyCode)
}


export function is_valid(event, form) {
    alert("..")
    event.preventDefault();
    const elementos = document.querySelectorAll(form)
    let formularioValido = true
    // console.log(elementos);
    elementos.forEach(function(elemento) {
        if(elemento.value){
            formularioValido= false;
            elemento.classList.add("error");
        }
    })

    if(formularioValido){
        alert("todo ookk")
    }else{
        alert("ni modo, toca otra vez")
    }

}
