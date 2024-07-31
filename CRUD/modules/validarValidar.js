export function validarValidar(e) {
    e.preventDefault()
    console.log(nombre.value);
    if (nombre.value === "") {
        e.target.focus()
        e.target.classList.add("error")
    
    }if(apellido.value === ""){
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