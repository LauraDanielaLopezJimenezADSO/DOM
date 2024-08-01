import {validarRemover } from "./modules/validarRemover.js";
import {validarCorreo } from "./modules/validarCorreo.js";
import {validarPoliticas } from "./modules/validarPoliticas.js";
import {validarTipDoc } from "./modules/validarTipDoc.js";
import {validarValidar } from "./modules/validarValidar.js";
import {validarNumero  } from "./modules/validarNumero.js";
import {validarLetras } from "./modules/validarLetras.js"
import {validarDoc  } from "./modules/validarDocumento.js";
import {is_valid } from "./modules/is_valid.js";
import solicitud from "./ajax.js";

const $formulario = document.querySelector("form");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const direccion = document.querySelector("#direc");
const telefono = document.querySelector("#tel");
const tipo_doc = document.querySelector("#tipo_doc");
const documento = document.querySelector("#num_doc");
const politicas = document.querySelector("#politicas");
const enviar = document.querySelector("#enviar");
const email = document.querySelector("#email");
const fragment = document.createDocumentFragment();

// function quitarCalse (valor) {valor.classList.remove("error");}

// const validar = (e) => validarValidar(e)
   
const documentos = ( ) => {
    fetch('http://localhost:3000/documentos')
    .then((response) => response.json())
    .then((data) => {

        let optionDefault = document.createElement("option")
        optionDefault.textContent = "Seleccionar..";
        optionDefault.value = "";
        fragment.appendChild(optionDefault)

        data.forEach(element => {
            console.log(element);
            let option = document.createElement("option")
            option.value = element.id;
            option.textContent = element.tipoDoc;
            
            fragment.appendChild(option)
        });
        tipo_doc.appendChild(fragment)

        // const tabla = `<tr>
        //                 <th>Nombre</th>
        //                 <th>Apellido</th>
        //                 <th>Direccion</th>
        //                 <th>Télefono</th>
        //                 <th>Tipo de documento</th>
        //                 <th>Documento</th>
        //                 <th>Email</th>
        //                 </tr>`;
        // for(let dato of data){
        //     tabla += `<tr>
        //                 <td>${data.name}</td>
        //                     <td>${data.apellido}</td>
        //                     <td>${data.direccion}</td>
        //                     <td>${data.telefono}</td>
        //                     <td>${data.documento}</td>
        //                     <td>${data.email}</td>
        //             </tr>`;
        // }
        // document.querySelector("#tabla1").innerHTML = tabla
    });
}

const listarTabla = () =>{
    const data = solicitud("user").then(data => {console.log(data);})

    

} 


addEventListener("DOMContentLoaded", (event) => {
    documentos()
    listarTabla()
    if(!politicas.checked){
        enviar.setAttribute("disabled", "")
    }

})

$formulario.addEventListener("submit", (e)=>{
    let response = is_valid(e, "form [required]");
    // alert(response) 

    const data = {
        nombre: nombre.value,
        apellido: apellido.value,
        direccion: direccion.value,
        telefono: telefono.value,
        tipo_doc: tipo_doc.value,
        documento: documento.value,
        email: email.value
    }
    if(response){
        fetch("http://localhost:3000/user", {
            method: 'POST', //metodo
            body: JSON.stringify(data),  //cuerpo
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response => {
            if(response.ok){
                alert(`Datos guardados:
                    Nombre: ${data.nombre} 
                    Apellido: ${data.apellido} 
                    Direccion: ${data.direccion}
                    Telefono: ${data.telefono}
                    Documento:${data.documento}
                    Email: ${data.email}` )
            }else{
                alert("Error al agregar los datos")
            }
        }))

        .then((json) => {
            nombre.value = '',
            apellido.value = '',
            direccion.value = '',
            telefono.value = '',
            tipo_doc.value = '',
            documento.value = '',
            email.value = ''
        });
    }
    
});

const remover = (e) => validarRemover(e)


nombre.addEventListener("keyup", (e) => {remover(e);});

apellido.addEventListener("keyup", (e) => {remover(e);});

direccion.addEventListener("keyup", (e) => {remover(e);});

telefono.addEventListener("keyup", (e) => {remover(e);});

tipo_doc.addEventListener("change", (e) => validarTipDoc(e));

documento.addEventListener("keyup", (e) => {remover(e);});

enviar.setAttribute('disabled', '');

politicas.addEventListener("change", (e) => validarPoliticas(e, enviar));    
console.log($formulario)

documento.addEventListener("keypress", (e) => validarNumero(e));

telefono.addEventListener("keypress", (e) => validarNumero(e));

nombre.addEventListener("keypress", (e)=>{ validarLetras(e)});

apellido.addEventListener("keypress", (e)=>{validarLetras(e)});

documento.addEventListener("keypress", (e) => validarDoc(e));

email.addEventListener('input', (e) => validarCorreo(e));
