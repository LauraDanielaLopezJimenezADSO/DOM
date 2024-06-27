import { usuarios } from "../NODOS/modulo.js";


const $root = document.querySelector("#root");
const $fragment = document.createDocumentFragment();

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
        $fragment.appendChild($div) //se agregan los div al fragmentoo

    });
    $root.appendChild($fragment) //se agrega el fragmento al root que seria la cajita más grande
});



// const element = document.querySelector("#root") //traer lka caja principal
// const fragmento = document.createDocumentFragment();

// const navegador=["Firefox", "Chrome", "Opera", "Safari", "Internet Explorer"]

// navegador.forEach(function(navegado){
//     const p = document.createElement("p")
//     p.textContent = navegado;
//     fragmento.appendChild(p)
// });

// element.appendChild(fragmento);

