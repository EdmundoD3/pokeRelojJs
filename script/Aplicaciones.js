import { pokeReloj } from "./Reloj.js";
import { pokeContador } from "./contador.js";
import { deleteElement, createChildInId } from "./Funciones.js";

const buttonUp = document.getElementById("btnTop")
const buttonBottom = document.getElementById("btnBottom")
let listPosition=1
const App = (numero) => {
    if (numero===0) {
        pokeReloj()
    }else if (numero === 1) {
        pokeContador()
    }
}
const clickButtonUp = () =>{
    listPosition++
    if (listPosition>1) {
        listPosition=0
    }
    deleteElement("AppScreen")
    createChildInId("screen","div",[["id", "AppScreen"],["class","App-screen"]])
    App(listPosition)
}
const clickButtonBottom = () => {
    listPosition--
    if (listPosition<0) {
        listPosition=1
    }
    deleteElement("AppScreen")
    createChildInId("screen","div",[["id", "AppScreen"],["class","App-screen"]])
    App(listPosition)
}
export function start() {
    pokeContador()
    buttonUp.addEventListener("click",clickButtonUp)
    buttonBottom.addEventListener("click",clickButtonBottom)
    
}