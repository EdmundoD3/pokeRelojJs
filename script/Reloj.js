import { tablaDeNumeros } from "./pixelArt.js";

const getArrayDate = () => {
    const clock = new Date()
    let time=clock.getHours();
    time = time.toString()
    const Dates =[0,0,10,0,0]
    if (time<10) {
        Dates[0]=0
        Dates[1]=Number(time)
    }else{
        Dates[0]=Number(time[0])
        Dates[1]=Number(time[1])
    }
    time=clock.getMinutes();
    time=time.toString()
    if (time<10) {
        Dates[3]=0
        Dates[4]=Number(time)
    }else{
        Dates[3]=Number(time[0])
        Dates[4]=Number(time[1])
    }
    return [...Dates];
}
const pixNum = (numero=2,ejey=0) => {
    tablaDeNumeros[numero][ejey].forEach( ejex => {
        const pixeles = document.getElementById("pokeReloj");
        const pixel = document.createElement("span")
        const tipCuadro = ejex === 1? "cuadro-marcado":"cuadro-vacio";
        pixel.setAttribute("class",`pkrel ${tipCuadro}`)
        pixeles.appendChild(pixel)
    })
}
const pikaImg = () => {
    const pixeles = document.getElementById("pokeReloj");
    const pixel = document.createElement("img")
    pixel.setAttribute("class",`pikareloj`)
    pixel.setAttribute("src", "./img/pika-memeOoO.png")
    pixel.setAttribute("alt", "pikachu Meme")
    pixeles.appendChild(pixel)
}
const createDiv = () => {
    const pixeles = document.getElementById("AppScreen");
    const pixel = document.createElement("div")
    pixel.setAttribute("id",`pokeReloj`)
    pixel.setAttribute("class",`pokeReloj`)
    pixeles.appendChild(pixel)
}
export const pokeReloj = () => {
    createDiv()
    let Clock = getArrayDate()
    for (let ejey = 0; ejey < 9; ejey++) {
        Clock.forEach(time => {
            pixNum(time,ejey)
        })
    }
    pikaImg()
}
