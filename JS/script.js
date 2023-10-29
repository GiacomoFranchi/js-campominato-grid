document.getElementById("play").addEventListener("click", function(){

const container = document.querySelector(".container")
const box = "";
for(let i = 1; i <= 100; i++){
    const box = document.createElement("div")
    box.classList.add("box")
    box.innerHTML = i

    box.addEventListener("click", function(){
        this.classList.add("blue")
        console.log(this.textContent);
    })
    container.append(box)
}
})

document.getElementById("play2").addEventListener("click", function(){

    const container = document.querySelector(".container")
    const box = "";
    for(let i = 1; i <= 81; i++){
        const box = document.createElement("div")
        box.classList.add("box2")
        box.innerHTML = i
    
        box.addEventListener("click", function(){
            this.classList.add("blue")
            console.log(this.textContent);
        })
        container.append(box)
    }
    })


document.getElementById("play3").addEventListener("click", function(){

    const container = document.querySelector(".container")
    const box = "";
    for(let i = 1; i <= 49; i++){
        const box = document.createElement("div")
        box.classList.add("box3")
        box.innerHTML = i
        
        box.addEventListener("click", function(){
            this.classList.add("blue")
            console.log(this.textContent);
        })
        container.append(box)
    }       
})