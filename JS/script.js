
let imgArr =["img/img_1.jpg","img/img_2.jpg","img/img_3.jpg","img/img_4.jpg","img/img_5.jpg","img/img_6.jpg","img/img_7.jpg","img/img_8.jpg",];

const img = document.querySelector(".img")
img.src = imgArr[0] 
let i=0
let chrono = null
const leftBtn = document.querySelector(".LeftPanel-btn");
const rightBtn = document.querySelector(".RightPanel-btn");
const playBtn = document.querySelector(".Play-btn")
let counterTxt= document.querySelector('.counter-txt')
let allDot = document.querySelectorAll(".SiteHeader-list-dot")


leftBtn.addEventListener("click",slideBackward)
rightBtn.addEventListener("click",slideForward)
playBtn.addEventListener("click", playing)

function play() {
    chrono=setInterval(slideForward, 2000);
}

function pause() {
        clearInterval(chrono)

}

function slideForward() {
    if (i>-1) {
        i++;
        img.src = imgArr[i];
        console.log(img.src, i);
        if (i > 7){
            i=0
            img.src = imgArr[i]
        }
    }
    
    document.querySelector('.Current').classList.remove('Current')
    
    counterTxt.innerHTML = ((i+1)+'/'+(imgArr.length)) 
    allDot[i].classList.add("Current")
    console.log(allDot[i]);

}


function slideBackward() {
    if (i>-1) {
        i--;
        img.src = imgArr[i];
        console.log(img.src, i);
        if (i ==-1){
            i=imgArr.length-1
            img.src = imgArr[i]
        }
    }
    document.querySelector('.Current').classList.remove('Current')
    counterTxt.innerHTML = ((i+1)+'/'+(imgArr.length)) 
    allDot[i].classList.add("Current")
}

// fonction du bouton play
function playing() {
    if (playBtn.classList.contains("playing")===false){
        playBtn.classList.add("playing")
        chrono=setInterval(slideForward, 2000);
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'
    }
    else{
        playBtn.classList.remove("playing")
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>'
        clearInterval(chrono)
    }
}

//déplacement grace au puces
for (let y = 0; y < allDot.length; y++) {
    currentDot = allDot[y];
    currentDot.addEventListener("click", function () {
        img.src=imgArr[y]
        document.querySelector('.Current').classList.remove('Current')
        allDot[y].classList.add("Current")
        counterTxt.innerHTML = ((y+1)+'/'+(imgArr.length)) 

    })
}

//Control au clavier https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
document.onkeydown = function (e) {
    switch (e.key) {
        case 'ArrowLeft':
            slideBackward()
            break;
        case 'ArrowRight':
            slideForward()
            break;
        }
};










