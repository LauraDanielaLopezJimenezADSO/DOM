export function validarPoliticas(e, boton) {
    if(e.target.checked){
        boton.removeAttribute("disabled","");
    }else{
        boton.setAttribute("disabled","");
    }
}