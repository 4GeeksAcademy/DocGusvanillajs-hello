import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  // console.log("Hello Rigo from the console!");
  generarCarta()
  document.getElementById("boton").addEventListener("click", generarCarta)
};
function generarCarta() {
  let numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "K", "Q", "J"]
  let numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)]
  // console.log(numeroAleatorio)
  let palos = ["♦", "♥", "♠", "♣"]
  let palosAleatorio = palos[Math.floor(Math.random() * palos.length)]
  // console.log(palosAleatorio)
  document.getElementById("palo").innerHTML = palosAleatorio
  document.getElementById("numero").innerHTML = numeroAleatorio
  document.getElementById("paloDos").innerHTML = palosAleatorio


  if (palosAleatorio == "♥" || palosAleatorio == "♦") {
    document.getElementById("palo").style.color = "red"
    document.getElementById("paloDos").style.color = "red"
  } else {
    document.getElementById("palo").style.color = "black"
    document.getElementById("paloDos").style.color = "black"
  }
}



