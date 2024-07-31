export function validarLetras(e) {
    let letras = /^[A-Za-zÀ-ÿ\s]*$/
    if(!letras.test(e.key)){
        e.preventDefault();
    }
}
