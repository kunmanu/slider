/*
ce code affiche un diaporama en changeant la source de la balise img.img contenue dans main.GeneralContainer-MiddlePanel
*/
let imgArr =["img_1.jpg","img_2.jpg","img_3.jpg","img_4.jpg","img_5.jpg","img_6.jpg","img_7.jpg","img_8.jpg"];

const img = document.querySelector(".img")
const leftBtn = document.querySelector(".LeftPanel-btn");
const rightBtn = document.querySelector(".RightPanel-btn");
const playBtn = document.querySelector(".Play-btn")
const IMG_PATH = 'img/';
let counterTxt= document.querySelector('.counter-txt')
let allDot = document.querySelectorAll(".SiteHeader-list-dot")

let currentIndex="0"
let chrono = null
img.src = IMG_PATH+imgArr[currentIndex]
const counter = currentIndex

//les boutons
leftBtn.addEventListener("click",slideBackward)
rightBtn.addEventListener("click",slideForward)
playBtn.addEventListener("click", playing)

//fonction qui crée les puces en fonction du nombre d'image

// function dotCreate(){
//     let oneDot =
// }



//fonction qui avance d'une image// 
function slideForward() {
    if (currentIndex>-1) {
        currentIndex++;
        img.src = IMG_PATH+imgArr[currentIndex];
        console.log(img.src, currentIndex);
        if (currentIndex >= imgArr.length){
            currentIndex=0
            img.src = IMG_PATH+imgArr[currentIndex]
        }
    }
    
    document.querySelector('.Current').classList.remove('Current')//modifie les puces grace a la classe current
    
    counterTxt.innerHTML = ((currentIndex)+'/'+(imgArr.length)) 
    allDot[currentIndex].classList.add("Current")
    console.log(allDot[currentIndex]);

}
//fontion qui recule d'une image 
function slideBackward() {
    if (currentIndex>-1) {
        currentIndex--;
        img.src = IMG_PATH+imgArr[currentIndex];
        console.log(img.src, currentIndex);
        if (currentIndex <0){
            currentIndex=imgArr.length-1
            img.src = IMG_PATH+imgArr[currentIndex];
        }
    }
    document.querySelector('.Current').classList.remove('Current')//modifie les puces grace a la classe current
    counterTxt.innerHTML = ((currentIndex+1)+'/'+(imgArr.length)) 
    allDot[currentIndex].classList.add("Current")
}

// reagie a .PlayBtn, vérifie si le bouton possède la classe playing, si non : l'attribu et repète slideforward() toutes les deux secondes, si oui, enlève la classe playing et annule la repetition de slideforward()
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
    document.querySelector('.Current').classList.remove('Current')//modifie les puces grace a la classe current

    counterTxt.innerHTML = ((currentIndex)+'/'+(imgArr.length))
    allDot[currentIndex].classList.add("Current")
    console.log(allDot[currentIndex]);
}

//déplacement grace aux puces (pb:ne reppart pas du bon index  quand on reprend le control au clavier ou avec les bouton changer all.Dot.lenth pour imgArr.length pr un compteur génal/dégager les puces pour mettre une bare de chargement ds le bouton play)
for (let y = 0; y < allDot.length; y++) {
    currentDot = allDot[y];
    currentDot.addEventListener("click", function () {
        img.src=IMG_PATH+imgArr[y]
        document.querySelector('.Current').classList.remove('Current')
        allDot[y].classList.add("Current")
        counterTxt.innerHTML = ((y+1)+'/'+(imgArr.length)) 

    })
}

//Control au clavier (https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript)
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










