const side = document.getElementById("sideBar")
let text = document.querySelector("p")

document.getElementById("rightclick").onclick = function () {
    side.style.marginLeft = "0%"
}

document.getElementById("toggleAway").onclick = function (){
    side.style.marginLeft = "-30%"
    side.style.transition ="all 500ms"
}

document.getElementsByClassName("search").onmouseover = function() {
    text.style.display = "block"
    console.log("da")
}

