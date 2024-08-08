export function validarPoliticas(e, boton, Listar) {
    if(e.target.checked){
        boton.removeAttribute("disabled","");
    }else{
        boton.setAttribute("disabled","");
    }
}