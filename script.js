

const side = document.getElementById("sideBar")
const h2 = document.querySelector ("h2")

const image = document.querySelector("img")
const image1 = document.getElementById("firstImage")
const image2 = document.getElementById("secondImage")
const image3 = document.getElementById("thirdImage")


let imageArray = [image1, image2, image3]


setInterval(startSlideShow, 3000)
function startSlideShow(){
    for(i = 0; i < imageArray.length; i++){
        if(imageArray[i].classList.contains("show")){
            imageArray[i].classList.toggle("show")
            imageArray[2].classList.toggle("show")
        }
        else if(imageArray[2].classList.contains("show")){
            imageArray[i].classList.toggle("show")
            imageArray[2].classList.toggle("show")
        }
    }
}


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

side.onmouseover = function() {
    side.style.width = "15rem"
}

side.onmouseout = function() {
    if(window.innerWidth > 1200){
    side.style.width = "4rem"
    } 
}
