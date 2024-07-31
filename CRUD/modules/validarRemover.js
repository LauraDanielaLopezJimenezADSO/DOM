export function validarRemover(e){
    if (!e.target.value == "") {
        e.target.classList.add("correcto");
        e.target.classList.remove("error");
    } else {
        e.target.classList.remove("correcto");
        e.target.classList.add("error");
    }
}