import { ligthWatch, pixNum, createChildInId } from "./Funciones.js";
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

export const pokeReloj = () => {
    ligthWatch(true)
    createChildInId("AppScreen","div",[["id", "pokeReloj"],["class","pokeReloj"]])
    let Clock = getArrayDate()
    for (let ejey = 0; ejey < 9; ejey++) {
        Clock.forEach(time => {
            pixNum(time,ejey)
        })
    }
    createChildInId("pokeReloj","img",[
        ["class",`pikareloj`],
        ["src", "./img/pika-memeOoO.png"],
        ["alt", "pikachu Meme"]
    ])
}
