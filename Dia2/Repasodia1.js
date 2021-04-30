// console.log(document);

let divContenido = document.getElementById("contenido")
console.log(divContenido);
// innerHtml maneja contedio html como su fuese texto ( en comillas)
divContenido.innerHTML= "<h1> Mi Titulo </h1>";
// crear nodos de html
let Titulo2 = document.createElement("h2");
//appendChild agregar un nodoHtml como hijo de otro nodo html
divContenido.appendChild(Titulo2);
Titulo2.innerText=("Segundo titulo");
let imagen = document.createElement("img");
//prepend pone al inicio
divContenido.prepend(imagen);
imagen.setAttribute("src","");
Titulo2.style.color= "blue";
Titulo2.style.backgroundColor = "grey";
Titulo2.style.borderRadius ="10px";
imagen.setAttribute("alt", "pinguinos");

let frutas = ["mango", " piña","fresas"];

let ul =document.createElement("ul");

divContenido.appendChild(ul);

frutas.forEach(function(item){
    let nuevoli=document.createElement("li");
    nuevoli.innerHTML =item;
    ul.appendChild(nuevoli);

})