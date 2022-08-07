import { ligthWatch, createChildInId, pixNum } from "./Funciones.js";
let numero;
const numberArray = (number) => {
    const numbStr = number.toString()
    let arraynumber=[0,0,0,0]
    if (number<10){
        arraynumber=[0,0,0,number]
    } else if (number<100){
        arraynumber=[0,0,numbStr[0],numbStr[1]]
    } else if (number<1000){
        arraynumber=[0,numbStr[0],numbStr[1],numbStr[2]]
    } else if (number<10000){
        arraynumber=[numbStr[0],numbStr[1],numbStr[2]],numbStr[3]
    } else {
        number=0
        arraynumber=[0,0,0,0]
    }
    return arraynumber;
}

export const boxPokeContador = () => {
    ligthWatch(false)
    
    console.log(numero)
    createChildInId("AppScreen","div",[["id", "counter"],["class","box-counter"]])
    const numArray = numberArray(numero)
    for (let ejey = 0; ejey < 9; ejey++) {
        numArray.forEach((num,indice) => {
            pixNum(num,ejey,"counter","pkcontador")
            if (indice<3) {
                pixNum(11,0,"counter","pkcontador")
            }
        })
    }
}

const pokeContadorplus = () => {
    const element = document.getElementById(`AppScreen`);
    const elementDelete = document.getElementById("counter")
    element.removeChild(elementDelete)
    numero++
    boxPokeContador()
}

export const pokeContador = () => {
    numero = 0;
    boxPokeContador()
    const button = document.getElementById("btnCounter")
    button.addEventListener("click", pokeContadorplus)
}