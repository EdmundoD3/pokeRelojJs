export const ligthWatch = (ligth = true) => {
    const screen = document.getElementById("screen");
    
    if (ligth === true) {
        if (screen.classList.contains("ligth")===false) {
            screen.classList.add("ligth")
        } 
    }else{
        if (screen.classList.contains("ligth")===true) {
            screen.classList.remove("ligth")
        } 
    }
}