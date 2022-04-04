
let imgArr =["img/img_1.gif","img/img_2.jpeg","img/img_3.jpeg","img/img_4.jpg","img/img_5.jpg","img/img_6.jpg","img/img_7.jpg","img/img_8.jpg",];

const img = document.querySelector(".img")
img.src = imgArr[0] 
let i=0
let chrono = null

const leftBtn = document.querySelector(".LeftPanel-ArrowNav-btn");
const rightBtn = document.querySelector(".RightPanel-ArrowNav-btn");
const playBtn = document.querySelector(".Play-btn")
const pauseBtn = document.querySelector(".Pause-btn")


leftBtn.addEventListener("click",slideBackward)
rightBtn.addEventListener("click",slideForward)
playBtn.addEventListener("click", play)
pauseBtn.addEventListener("click", pause)



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
}

//completement pompé sur https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
document.onkeydown = function (e) {
    switch (e.key) {
        case 'ArrowLeft':
            slideBackward()
            break;
        case 'ArrowRight':
            slideForward()
    }
};