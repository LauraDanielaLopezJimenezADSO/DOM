export function validarTipDoc(e) {
    if (tipo_doc.value !== "0") {
        e.target.classList.remove("error");
        e.target.classList.add("correcto");
    } else {
        e.target.classList.remove("correcto");
        e.target.classList.add("error");
    } 
}