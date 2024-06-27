let na = window
let dom = document
let head = dom.head
let body = dom.body
// let header = dom.header

const $header = dom.querySelector("header");
const $header_class = dom.querySelector(".header");
const $header_class_all = dom.querySelectorAll(".header");
const $header_id = dom.querySelector("#header");

console.log(head);
console.log(body);

console.log(dom.title)
console.log(dom.styleSheets)
console.log($header)
console.log($header_class)
console.log($header_id)

const id = document.getElementById("header")
const _class = document.getElementsByClassName("header")
const $main = dom.querySelector("main");

console.log(id);
console.log(_class[0]);
console.log($header_class_all);

console.clear()
console.log(body.childNodes);
console.log($main.childNodes);

$main.childNodes.forEach((nodo) =>console.log(nodo[5]));

// OPCION 1 DE COLUCION
// Array.from($main.childNodes).filter((nodo) => {
//     if(nodo.nodeType === nodo.TEXT_NODE){
//         return nodo
//     }
// })

// OPCION 2 DE SOLUCION
// const arreglo = Array.from($main.childNodes)
// const nuevo2 = arreglo.filter((nodo) => {
//     if(nodo.nodeType === nodo.TEXT_NODE){
//         return nodo
//     }
// })
// console.log(nuevo2)

// OPCION 3 DE SOLCUON
// console.log(Array.from($main.childNodes).filter((nodo) =>nodo.nodeType === nodo.TEXT_NODE ? true : false));

// OPCION 4 CON PARAMETROS REST
const arregloNodo = [...$main.childNodes]
console.log(arregloNodo);

console.clear();
console.log($main.children) //los hijos de main
console.log($main.parentElement) //el papá de main
console.log($main.previousElementSibling) //el hermano previo a main (anterior)
console.log($main.nextElementSibling) //el hermano posterior a main (siguiente)

//SELECTORES CONBINADOS PARA TRAER ELEMENTOS DEL HTML
console.clear()
// const $buscar = dom.querySelectorAll("div.card > ul.list > li.list__item > a");
const $buscar = dom.querySelector("#propiedad");
console.log($buscar);


console.clear()
const $form = dom.querySelector("#search")
console.log($form);


$form.setAttribute('method', 'GET') //le doy atributos
$form.firstElementChild.removeAttribute("placeholder") //le quito atributos
$form.firstElementChild.setAttribute('autocomplete', 'on')
$form.classList.add("otra") //agregar una nueva clase

console.log($form.classList);  //classList gnera un DOMTokenList


$form.classList.remove("otra") //quitar una nueva clase
console.log($form.classList);

$form.classList.toggle("otra")  //valida si la tiene y hace lo contrario, si la tiene la quita, si no la tiene la coloca
console.log($form.classList);

// console.clear()






