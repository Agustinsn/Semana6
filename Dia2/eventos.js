let divContenido=document.getElementById("contenido");
let miboton = document.createElement("button");
miboton.innerText = "Dame Click";
divContenido.appendChild(miboton);

miboton.addEventListener("click",function(){
alert("Haz dado CLICK!")
});

let cancionesParaBailar =[
    "Loose Yourself to Dance",
    "La Macarena",
    "Gangnam Style",
    "Dance Monkey"
];

cancionesParaBailar.forEach(function(cancion){
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.innerText=cancion;
    divContenido.appendChild(nuevoParrafo);

    nuevoParrafo.addEventListener("click",function(){
        alert("Hiciste Click en una cancion")
    });
    nuevoParrafo.style.cursor = "pointer";
});
let input = document.createElement("input");
input.setAttribute("type","password");
divContenido.appendChild(input);

let btnVer= document.createElement("button");
btnVer.innerText = "Ver Password";
divContenido.appendChild(btnVer);

let esVisible= true;
btnVer.addEventListener("click",function(){

    // ! niega el valor
    esVisible = !esVisible
    if(esVisible === true){
        input.setAttribute("type","text")
    } else {
        input.setAttribute("type", "password")
    }
});
input.addEventListener("keyup",function(){

});

let gotogoogle = document.createElement("a");

gotogoogle.setAttribute("href","http://google.com");
gotogoogle.innerText= "Ir a google";

divContenido.appendChild(gotogoogle);

gotogoogle.addEventListener("click",function(e){
    e.preventDefault();

})