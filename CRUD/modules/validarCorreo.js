export function validarCorreo(e) {
    if (/^[\w-._]+@[\w-._]+\.([\w-._]{2,3}){1,2}$/.test(e.target.value)) {
        e.target.classList.remove("error");
        e.target.classList.add("correcto");
    } else {
        e.target.classList.remove("correcto");
        e.target.classList.add("error");
    }
}