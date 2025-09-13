const result = document.getElementById ("txdresultado");
function mensaje (texto){
    console.log(texto);
    alert(texto);
    const result = document.getElementById ("txdresultado");
    result.textContent = texto;    
}   
function agregar(palabra){
    result.textContent = palabra;
}
function borrar(palabra){

}
function mostrar(palabra){

}       

function modificar(palabra){

}

const btnagregar = document.getElementById("btnagregar");


const btnborrar = document.getElementById("btnborrar");


const btnmostrar = document.getElementById("btnmostrar");
 
const btnmodificar = document.getElementById("btnmodificar");

btnagregar.addEventListener("click", agregar("klk"));

btnborrar.addEventListener("click", borrar("klk"));

btnmostrar.addEventListener("click", mostrar("klk"));

btnmodificar.addEventListener("click", modificar("klk"));








