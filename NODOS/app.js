// "use strict";

// import { usuarios } from "./modulo.js"
// const $root = document.querySelector("#root")
// const $div = document.createElement("div")
// const $p = document.createElement("p") //se crea la etiqueta p
// let texto = "Este sera el texto del elemento"
// $p.textContent = texto
// $div.classList.add("box")
// $root.appendChild($div) //se agrega el div al root
// $div.appendChild($p) //se agrega la p al div
// $p.classList.add("b") //modificar color a negro


// usuarios().then((usuario) => {
//     console.log(usuario)
// })

import { usuarios } from "./modulo.js";

const $root = document.querySelector("#root");

$root.classList.add("container")
// const $div = document.createElement("div");
// const $p = document.createElement("p");
// let texto = "Este seria el texto del elemento";
// // $div.textContent = texto;
// $div.classList.add("box");

// $p.textContent = texto;
// $p.classList.add("box__texto");

// $root.appendChild($div);
// $div.appendChild($p);

usuarios().then((usuario) => {
    usuario.forEach(element => {
        const $div = document.createElement("div") //creamos un elemnto div
        $div.classList.add("box", "border") //agregamos la clase al div

        const $h = document.createElement("p")
        $h.textContent = ` Nombre: ${element.name}` //le agregamos el contenido name

        const $id = document.createElement("p")
        $id.textContent = ` Id: ${element.id}`

        const $username = document.createElement("p")
        $username.textContent = `Username: ${element.username}`

        const $tel = document.createElement("p")
        $tel.textContent = `Phone: ${element.phone}`
        
        const $emai = document.createElement("p")
        $emai.textContent = `Email: ${element.email}`

        const $website = document.createElement("p")
        $website.textContent = `Website: ${element.website}`

        const $company = document.createElement("p")
        $company.textContent = `Name Company: ${element.company.name}` //accedemos por notacion de piuntos al objeto de la company

        const $address = document.createElement("p")
        $address.textContent = `City address: ${element.address.city}`

        $div.appendChild($id)
        $div.appendChild($h)
        $div.appendChild($tel)
        $div.appendChild($emai)
        $div.appendChild($username)
        $div.appendChild($website)
        $div.appendChild($company)
        $div.appendChild($address)
        $root.appendChild($div) 
    });
});



