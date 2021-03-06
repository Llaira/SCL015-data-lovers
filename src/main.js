import { ordenar, buscar, filtrar } from './data.js';
import data from './data/lol/lol.js';

//------VARIABLES CON ELEMENTOS-----------

let arrayDataLol = Object.values(data.data); 
const botonEntrar = document.getElementById("BotonEntrar")
const selectAz = document.getElementById("sltOrden")
botonEntrar.addEventListener("click", entrar);
const selectRoles = document.getElementById("sltRoles")


//------FUNCION NUEVA--------

function imprimirData (dataArray ){
  var obj = document.getElementById("containerData");
  obj.innerHTML = ""
  for(let i = 0; i < dataArray.length; i++){
    obj.innerHTML += `<div id="carta" class="card">
    <img class="splash" src="${dataArray[i].splash}">
    <div class="char-name"> ${dataArray[i].name} </div>
    <div class="title"> ${dataArray[i].title} </div>
    <div class="tagsCampeones"> ${dataArray[i].tags.join(' - ')} </div>
    <div id="infoCampeones" class="infoAttackCampeones"> Ataque:  ${dataArray[i].info.attack} </div>
    <div id="infoCampeones" class="infoDefenseCampeones"> Defensa: ${dataArray[i].info.defense} </div>
    <div id="infoCampeones" class="infoMagicCampeones"> Magia: ${dataArray[i].info.magic} </div>
    <div id="infoCampeones" class="infoDifficultyCampeones"> Dificultad: ${dataArray[i].info.difficulty} </div>
    <br>
  </div>`;
  }

}

//------FUNCION ENTRAR + MOSTRAR INFO EN PAGINA ---------

function entrar(){
   document.getElementById("Inicio").style.display="none";
   document.getElementById("AprendeaJugar").style.display="none";
   document.getElementById("SobreelJuego").style.display="none";
   document.getElementById("Tablero").style.display="block";
   document.getElementById("Principal").style.display= "block";
  

   imprimirData(arrayDataLol)
}



//----------FUNCION SELECT ORDENAR---------- 

function ordenarCampeones() {
  let ordenDeUsuario = selectAz.value
  let campeones = ordenar(ordenDeUsuario, arrayDataLol)
  imprimirData(campeones)
 }

 selectAz.addEventListener("change", ordenarCampeones);
 


//---------FUNCION INPUT BUSCADOR------------

const buscador = document.getElementById("buscador")

buscador.addEventListener("keyup", (event) => {

          var nombre = event.target.value;
        
          let campeones= buscar(nombre, arrayDataLol);

          imprimirData(campeones)
 });



//--------FUNCION SELECT FILTRO POR TIPOS-----------

function filtrarPorRoles() {

  let filtrarPor = selectRoles.value;

  let campeones = filtrar(filtrarPor, arrayDataLol)
 
  imprimirData(campeones)
 }
           
 selectRoles.addEventListener("change", filtrarPorRoles); 


// <------MENU BOTONES------->

const botonSobreJuego=document.getElementById("BotonSobreJuego")
botonSobreJuego.addEventListener("click", infoJuego);
 
function infoJuego() {
  document.getElementById("Inicio").style.display="none";
  document.getElementById("Tablero").style.display= "none";
  document.getElementById("AprendeaJugar").style.display= "none";
  document.getElementById("SobreelJuego").style.display= "block";
 }


 const botonAprende=document.getElementById("BotonAprende")
 botonAprende.addEventListener("click", desplegarLink);
  
 function desplegarLink() {
   document.getElementById("Inicio").style.display="none";
   document.getElementById("Tablero").style.display= "none";
   document.getElementById("SobreelJuego").style.display= "none";
   document.getElementById("AprendeaJugar").style.display= "block";
  }
 

//------FUNCION BOTON VOLVER-----------

const botonVolver=document.getElementById("BotonVolver")
botonVolver.addEventListener("click", volver);
 
function volver() {
  document.getElementById("Inicio").style.display="none";
  document.getElementById("Tablero").style.display= "block";
  document.getElementById("Principal").style.display= "block";
  document.getElementById("AprendeaJugar").style.display="none"
  document.getElementById("SobreelJuego").style.display="none"
 }







