export function validarNumero(e) {
    if (e.keyCode < 48 || e.keyCode > 57) {
        e.preventDefault(); // Esto evitará que se ingrese el valor
    }
}