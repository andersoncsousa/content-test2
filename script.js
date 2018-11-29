/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
let menuHamburger = () => {
    let x = document.getElementById("myLinks")
    if (x.style.display === "block") {
        x.style.display = "none"
        } else {
            x.style.display = "block"
        }
}

let sessaoPlus = () => {
    let y = document.getElementById("sessao1")
    let j = document.getElementById("sessao2")
    let k = document.getElementById("sessao3")

    if(y.style.display === "block"){
        y.style.display = "none"

    } else {
        y.style.display = "block"
    }

    if(j.style.display === "block"){
        j.style.display = "none" 

    } else {
        j.style.display = "block"

    }if(k.style.display === "block"){
        k.style.display = "none"

    } else {
        k.style.display = "block"
    }
}
