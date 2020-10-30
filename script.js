const side = document.getElementById("sideBar")
const h2 = document.querySelector ("h2")


document.getElementById("rightclick").onclick = function () {
    side.style.marginLeft = "0%"
}

document.getElementById("toggleAway").onclick = function (){
    side.style.marginLeft = "-30%"
    side.style.transition ="all 500ms"
}

window.onresize = function() {
    if(window.innerWidth > 1200){
        side.style.width = "4rem" 
        side.style.marginLeft = "0"
    }
    else if (window.innerWidth < 1200) { 
        side.style.width = "15rem"
        side.style.marginLeft = "0"
    }
}

if (side.style.width == "6rem") {
    h2.innerText = ""
}

side.onmouseover = function() {
    side.style.width = "15rem"
}


