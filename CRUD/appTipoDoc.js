import { validarLetras } from "./modules/validarLetras.js";
import { is_valid } from "./modules/is_valid.js";

const tipo_Doc = document.querySelector("#tipo_Doc");
const $formulario = document.querySelector("form");

$formulario.addEventListener("submit", (e)=>{
    let response = is_valid(e, "form [required]");
    const data = {
        tipo: tipo_Doc.value
    }

    if(response){
        fetch("http://localhost:3000/documentos", {
            method: 'POST', //metodo
            body: JSON.stringify(data),  //cuerpo
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response => {
            if(response.ok){
                alert(`Datos guardados:
                    Tipo:${data.tipo}` )
            }else{
                alert("Error al agregar los datos")
            }
        }))
    }
})
tipo_Doc.addEventListener("keypress", (e)=>{ validarLetras(e)});
tipo_Doc.addEventListener("keypress", (e)=>{ is_valid(e)});