let nombre = prompt("Ingresa tu nombre");

localStorage.setItem("miNombre", nombre);

setTimeout(function(){
     let obtenido= localStorage.getItem("miNombre");
     alert(obtenido)
}, 2000)

let obj ={
    fruta: "manzana",
    colores :["verder", "roja","mixta"],
    tama:10,
    sabor:"dulce y acida"
}

let objJson=JSON.stringify(obj);
console.log(obj)