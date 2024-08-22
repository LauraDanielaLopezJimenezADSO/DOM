import {validarRemover } from "./modules/validarRemover.js";
import {validarCorreo } from "./modules/validarCorreo.js";
import {validarPoliticas } from "./modules/validarPoliticas.js";
import {validarTipDoc } from "./modules/validarTipDoc.js";
import {validarValidar } from "./modules/validarValidar.js";
import {validarNumero  } from "./modules/validarNumero.js";
import {validarLetras } from "./modules/validarLetras.js"
import {validarDoc  } from "./modules/validarDocumento.js";
import {is_valid } from "./modules/is_valid.js";
import solicitud, {envia} from "./ajax.js";
import { URL } from "./modules/config.js";


const $formulario = document.querySelector("form");
const id = document.querySelector("#id");
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



const buscar = async(element) =>{
    
    let data = await envia(`user/${element.dataset.id}`, {
        method: "PATCH",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    loadForm(data)
}

const save = (event) => {
    // event.preventDefault()
    let response = is_valid(event, "form [required]");
    const data = {
        nombre: nombre.value,
        apellido: apellido.value,
        direccion: direccion.value,
        telefono: telefono.value,
        tipo_doc: tipo_doc.value,
        documento: documento.value,
        email: email.value
    }

    event.preventDefault();
    if(response){
        if(id.value === ""){
            console.log("guardadoooo");
            guardar(data)
            
            
        }else{
            actualizar(data)
        }
    }
    return;
}

const guardar = (data)=>{
    console.log(data);
    
    // return
    fetch(`${URL}/user`, {
        method: 'POST', //metodo
        body: JSON.stringify(data),  //cuerpo
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => {

        
        limpiar()
        createRow(json)
    });
    
}
                                                                                                                                                                                                                                                   
const actualizar = async (data)=>{
    
    // console.log("la data es"+data, id.value);
    const response = await envia(`user/${id.value}`, {        
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    //limpiar formulario
    limpiar()
    //modificar la fila el tr
    editRow(response)
}

const eliminar = async(element) =>{
    let data = element.dataset.id
    const tr = document.querySelector(`#user_${data}`)
    const username = tr.querySelector(".nombre").textContent;
    const confirmDelete = confirm(`Desea eliminar al Usuario: ${username} del registro?`)

    if(confirmDelete){
        const response = await envia(`user/${data}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        tr.remove();
    }

    // let data = await envia(`user/${element.dataset.id}`, {
    //     method: "PATCH",
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     }
    // })
    // let confirmar = confirm(`Desea eliminar al Usuario: 
    //     ${data.nombre} del regisro`)
    // if(confirmar === true){
    //     await envia(`user/${element.dataset.id}`, {
    //         method: 'DELETE'
    //     })
    //     document.querySelector(`#user_${element.dataset.id}`).remove()
    // }
}

const limpiar = () => {
    nombre.value = '',
    apellido.value = '',
    direccion.value = '',
    telefono.value = '',
    tipo_doc.value = '',
    documento.value = '',
    email.value = '',
    politicas.checked = false

    nombre.classList.remove("correcto")
    apellido.classList.remove("correcto")
    direccion.classList.remove("correcto")
    telefono.classList.remove("correcto")
    tipo_doc.classList.remove("correcto")
    documento.classList.remove("correcto")
    email.classList.remove("correcto")
}

const editRow = async (data) =>{
    const tipo = await solicitud("documentos")
    let name = tipo.find((e) => e.id === data.tipo_doc ? e.tipoDoc : null);
    const tr = document.querySelector(`#user_${data.id}`)
    // nombre = tr.querySelector(".nombre")
    tr.querySelector(".nombre").textContent = data.nombre;
    // tr.querySelector(".nombre").textContent = data.apellido;
    // tr.querySelector(".nombre").textContent = data.direccion;
    // tr.querySelector(".nombre").textContent = data.telefono;
    // tr.querySelector(".tipo_doc").textContent = name;
    // tr.querySelector(".nombre").textContent = data.documento;
    // tr.querySelector(".nombre").textContent = data.email;
    console.log(tr);
    
}

const loadForm =(data) =>{
    const {
        //alias en la destructuracion user_id
        id:user_id,
        nombre:user_nombre,
        apellido:user_apellido,
        direccion:user_direccion,
        telefono:user_telefono,
        tipo_doc:user_tipo_doc,
        documento:user_documento,
        email:user_email
    } = data
    console.log(data);
    
    id.value = user_id,
    nombre.value= user_nombre,
    apellido.value= user_apellido,
    direccion.value= user_direccion,
    telefono.value= user_telefono,
    tipo_doc.value= user_tipo_doc,
    documento.value= user_documento,
    email.value= user_email
    politicas.checked = true,
    enviar.removeAttribute("disabled") 
}
   
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

const listarTabla = async (page) =>{ 
    const _page = page ? page : 1;
    //traer los usuarios
    const data = await solicitud(`user?_page=${_page}&_per_page=5`);
    //traer los documentos
    const tipo = await solicitud("documentos")

    //manegacion con los botones
    const nav = document.querySelector(".navegacion")

    //carga los datos quw trae la api
    const first = data.first;
    const prev = data.prev;
    const next = data.next;
    const last = data.last;
    console.log(`first: ${first}, prev: ${prev},next: ${next},last: ${last}`);
    

    nav.querySelector(".first").disabled = prev ? false : true;
    nav.querySelector(".prev").disabled = prev ? false : true;
    nav.querySelector(".next").disabled = next ? false : true;
    nav.querySelector(".last").disabled = next ? false : true;

    nav.querySelector(".first").setAttribute("data-first", first)
    nav.querySelector(".prev").setAttribute("data-prev", prev)
    nav.querySelector(".next").setAttribute("data-next", next)
    nav.querySelector(".last").setAttribute("data-last", last)


    // console.log(nav);
    // console.log(tipo);
    // console.log(data);
    // return
    

    data.data.forEach(element => {
        let name = tipo.find((e) => e.id === element.tipo_doc ? e.tipoDoc : null);
        // console.log(tbUser.querySelector("tr"))
        tbUser.querySelector("tr").id = `user_${element.id}`
        
        tbUser.querySelector(".nombre").textContent = element.nombre;
        tbUser.querySelector(".apellido").textContent = element.apellido;
        tbUser.querySelector(".direccion").textContent = element.direccion;
        tbUser.querySelector(".telefono").textContent = element.telefono;
        tbUser.querySelector(".email").textContent = element.email;

        //traer los tipos de documentos al momento de listar la tabla con su valor 
        tipo.forEach(e => e.id === element.tipo_doc ? tbUser.querySelector(".tipoDoc").textContent = e.tipoDoc : null)
        
        //trae el id de los tipos de documentos
        // tbUser.querySelector(".tipoDoc").textContent = element.tipo_doc;
        tbUser.querySelector(".document").textContent = element.documento;
        // tbUser.querySelector(".tipo_doc").textContent = name;

        tbUser.querySelector('.modificar').setAttribute('data-id', element.id)
        tbUser.querySelector('.eliminar').setAttribute('data-id', element.id)

        const clone = document.importNode(tbUser, true);
        tb_fragment.appendChild(clone);
    });
    tbody.appendChild(tb_fragment)
    
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

document.addEventListener("click", (e) => {
    if(e.target.matches(".modificar")){
        buscar(e.target)
        
    }
    if(e.target.matches(".eliminar")){
        eliminar(e.target)
        
    }

    if(e.target.matches(".first")){
        const nodos = tbody;
        const first = e.target.dataset.first;
        while (nodos.firstChild) {
            nodos.removeChild(nodos.firstChild)
            
        }
        listarTabla(first)
    }
    if(e.target.matches(".prev")){
        const nodos = tbody;
        const prev = e.target.dataset.prev;
        while (nodos.firstChild) {
            nodos.removeChild(nodos.firstChild)
            
        }
        listarTabla(prev)
    }
    if(e.target.matches(".next")){
        const nodos = tbody;
        const next = e.target.dataset.next;
        while (nodos.firstChild) {
            nodos.removeChild(nodos.firstChild)
            
        }
        listarTabla(next)
    }
    if(e.target.matches(".last")){
        const nodos = tbody;
        const last = e.target.dataset.last;
        while (nodos.firstChild) {
            nodos.removeChild(nodos.firstChild)
            
        }
        listarTabla(last)
    }
})

addEventListener("DOMContentLoaded", (event) => {
    documentos()
    listarTabla()
    if(!politicas.checked){
        enviar.setAttribute("disabled", "")
    }

})

$formulario.addEventListener("submit", save );



const remover = (e) => validarRemover(e)


nombre.addEventListener("keyup", (e) => {remover(e);});

apellido.addEventListener("keyup", (e) => {remover(e);});

direccion.addEventListener("keyup", (e) => {remover(e);});

telefono.addEventListener("keyup", (e) => {remover(e);});

tipo_doc.addEventListener("change", (e) => validarTipDoc(e));

documento.addEventListener("keyup", (e) => {remover(e);});

enviar.setAttribute('disabled', '');

politicas.addEventListener("change", (e) => {validarPoliticas(e, enviar)});    
// console.log($formulario)

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
