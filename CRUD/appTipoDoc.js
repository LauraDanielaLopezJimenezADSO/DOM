import { validarLetras } from "./modules/validarLetras.js";
import { is_valid } from "./modules/is_valid.js";
const enviar = document.querySelector("#enviar");

const tipoDoc = document.querySelector("#tipoDocc");
const $formulario = document.querySelector("form");

$formulario.addEventListener("submit", (e)=>{
    let response = is_valid(e, "form [required]");
    const data = {
        tipoDoc: tipoDoc.value
    }

    if(response){
        enviar.setAttribute('disabled', '')

        fetch("http://localhost:3000/documentos", {
            method: 'POST', //metodo this. reset formulario.reset headerlocation reload
            body: JSON.stringify(data),  //cuerpo
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response => {
            if(response.ok){
                alert(`Datos guardados:
                    Tipo:${data.tipoDoc}` )
            }else{
                alert("Error al agregar los datos")
            }
        }))
        
        .then((json) => {
            tipoDoc.value = '';
            enviar.removeAttribute('disabled', '')

        });
    }
})

tipoDoc.addEventListener("keypress", (e)=>{ validarLetras(e)});
tipoDoc.addEventListener("submit", (e) => { is_valid(e)});