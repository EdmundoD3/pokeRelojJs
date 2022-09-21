import { tablaDeNumeros } from "./pixelArt.js";
import { apagarReloj } from "./Reloj.js";

export const ligthWatch = (ligth = true) => {
    const screen = document.getElementById("screen");
    
    if (ligth === true) {
        if (screen.classList.contains("ligth")===false) {
            screen.classList.add("ligth")
            screen.classList.add("shadow-Reloj")
        } 
    }else{
        if (screen.classList.contains("ligth")===true) {
            screen.classList.remove("ligth")
            screen.classList.remove("shadow-Reloj")
            
        } 
    }
}

export const createChildInId = (whathId = "none",whatElem="div",
    addAttribute=[
        ["id","NameID"],
        ["Class","NameClass"]
    ]) => {
    const pixeles = document.getElementById(`${whathId}`);
    const pixel = document.createElement(`${whatElem}`)
    addAttribute.forEach(atrubute =>{
        pixel.setAttribute(atrubute[0], atrubute[1])
    } )
    pixeles.appendChild(pixel)
}

export const deleteElement = (element="none") => {
    const deleteElement = document.getElementById(`${element}`)
    if (deleteElement!==null) {
        deleteElement.remove()
    }
}
// Con un array creo numeros o letras para el pixel art
export const pixNum = (numero=2,ejey=0,childIn="",classFunction="") => {
    tablaDeNumeros[numero][ejey].forEach( ejex => {
        const tipCuadro = ejex === 1? "cuadro-marcado":"cuadro-vacio";
        createChildInId(`${childIn}`,"span",[
            ["class",`${classFunction} ${tipCuadro}`]
        ])
    })
}

export let apagarFunciones = () =>{
    apagarReloj()
}