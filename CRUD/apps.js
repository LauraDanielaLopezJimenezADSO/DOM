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
import { URL } from "./modules/config.js";


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
const tbUser = document.querySelector("#tp_user").content;
const tb_fragment = document.createDocumentFragment();
const tbody = document.querySelector("tbody")



// let $Listar = document.querySelectorAll('form > *[required]')
// console.log($Listar);

   
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
    });
}

const listarTabla = async () =>{
    const data = await solicitud("user");
    data.forEach(element => {
        tbUser.querySelector(".nombre").textContent = element.nombre;
        tbUser.querySelector(".apellido").textContent = element.apellido;
        tbUser.querySelector(".direccion").textContent = element.direccion;
        tbUser.querySelector(".telefono").textContent = element.telefono;
        tbUser.querySelector(".email").textContent = element.email;
        tbUser.querySelector(".tipoDoc").textContent = element.tipo_doc;
        tbUser.querySelector(".document").textContent = element.documento;

        const clone = document.importNode(tbUser, true);
        tb_fragment.appendChild(clone);
    });
    tbody.appendChild(tb_fragment)
    // tbUser
    
} 

const createRow = (data) =>{
    const tr = tbody.insertRow(-1)

    const tdNombre = tr.insertCell(0)
    const tdApellido = tr.insertCell(1)
    const tDireccion= tr.insertCell(2)
    const tdTelefono = tr.insertCell(3)
    const tdEmail= tr.insertCell(4)
    const tdTipoDoc = tr.insertCell(5)
    const tDocument= tr.insertCell(6)

    tdNombre.textContent = data.nombre; //nombre nombre del json
    tdApellido.textContent = data.apellido;
    tDireccion.textContent = data.direccion;
    tdTelefono.textContent = data.telefono;
    tdEmail.textContent = data.email;
    tdTipoDoc.textContent = data.tipo_doc;
    tDocument.textContent = data.documento;
    
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
        fetch(`${URL}/user`, {
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
                    Tipo de documento: ${data.tipo_doc}
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
            email.value = '',
            politicas.checked = false,

            nombre.classList.remove("correcto")
            apellido.classList.remove("correcto")
            direccion.classList.remove("correcto")
            telefono.classList.remove("correcto")
            tipo_doc.classList.remove("correcto")
            documento.classList.remove("correcto")
            email.classList.remove("correcto")

            createRow(json)
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

politicas.addEventListener("change", (e) => {validarPoliticas(e, enviar)});    
console.log($formulario)

documento.addEventListener("keypress", (e) => validarNumero(e));

telefono.addEventListener("keypress", (e) => validarNumero(e));

nombre.addEventListener("keypress", (e)=>{ validarLetras(e)});

apellido.addEventListener("keypress", (e)=>{validarLetras(e)});

documento.addEventListener("keypress", (e) => validarDoc(e));

email.addEventListener('input', (e) => validarCorreo(e));

// $formulario.addEventListener('submit', (e) => {
//     $Listar.forEach((selector) => {
//         selector.setAttribute('disabled', '')
//     })
//     politicas.checked = false;

// })
