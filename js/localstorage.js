'use strict'

//Disponibilidad de localstorage
if(typeof(Storage) !== 'undefined'){
    console.log("Localstorage disponible");
}else{
    console.log("Localstorage no disponible");
}

//Guardar datos
localStorage.setItem("titulo", "Curso de Victor");

//Recuperar elemento
//document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar objetos
var usuario = {
    nombre:  "Thalia",
    email: "thalia@thalia.com",
    web: "thalia.es"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#peliculas").append(" "+userjs.web+" - "+userjs.nombre);

localStorage.removeItem("usuario");

localStorage.clear();