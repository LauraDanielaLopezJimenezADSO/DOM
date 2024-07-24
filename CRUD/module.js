export function validarCorreo(e) {
    if (/^[\w-._]+@[\w-._]+\.([\w-._]{2,3}){1,2}$/.test(e.target.value)) {
        e.target.classList.remove("error");
        e.target.classList.add("correcto");
    } else {
        e.target.classList.remove("correcto");
        e.target.classList.add("error");
    }
}

export function validarCampos(event) {
    event.preventDefault()
    console.log(nombre.value);
    if (nombre.value === "") {
        nombre.focus()
        nombre.classList.add("error")
    }
    if( apellido.value === ""){
        apellido.focus()
        apellido.classList.add("error")

    }if(tipo_doc.value === "0"){
        tipo_doc.focus()
        tipo_doc.classList.add("error")
    }
    if(direccion.value === ""){
        direccion.focus()
        direccion.classList.add("error")
    }if(telefono.value === ""){
        telefono.focus()
        telefono.classList.add("error")
    }if(documento.value === ""){
        documento.focus()
        documento.classList.add("error")
    }

    if (email.value === "") {
        email.focus();
        email.classList.add("error");
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
