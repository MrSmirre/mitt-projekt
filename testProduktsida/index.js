const myH1 = document.getElementById("myH1")
const myBtn = document.getElementById("myBtn")
const darkBtn = document.getElementById("dark")
const body = document.querySelector("body")
const greenBtn = document.getElementById("green")

const darkmode = () =>{
    body.classList.toggle("darkmode")
}

darkBtn.addEventListener("click", darkmode)

const greenmode = () => {
    body.classList.toggle("greenmode")
}

greenBtn.addEventListener("click", greenmode)

myH1.textContent = "HEJ"
myBtn.textContent = "Klicka på mig"

myBtn.addEventListener("click", () => {
    if(myH1.textContent === "HEJ"){
        myH1.textContent = "HEJDÅ"
    } else if(myH1.textContent === "HEJDÅ"){
       myH1.textContent = "HEJ"
    }
})
