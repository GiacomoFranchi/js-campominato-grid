// EventListener click play
document.getElementById("play").addEventListener("click", function(){
    
    let num = "";
    const griglia = document.querySelector(".container");
    
    const grigliaFin = grigliaGioco(1, 100)

    griglia.innerHTML = grigliaFin
})








// Funzioni

function grigliaGioco(min,max) {
    let grigliaNum = "";
    for (let i = min; i <= max; i++) {
        num = i;
        grigliaNum += `<div class="box">${num}</div>`;
    }
    return grigliaNum;
}