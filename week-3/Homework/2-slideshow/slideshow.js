// Write your code here
let images =["images/xps-dpbXgTh0Lac-unsplash.jpg" ,
"images/xps-B5rNNkGtRXI-unsplash.jpg",
"images/windows-12OZwblVQUg-unsplash.jpg",
"images/windows-9YwGR6H0Pu8-unsplash.jpg"]
let img = document.querySelector(".slide img")
img.setAttribute("src",images[0])
let currentslide = 0;
let BtnForward =document.querySelector("#forward")
let BackBtn =document.querySelector("#back")
BtnForward.addEventListener("click",goforward)
BackBtn.addEventListener("click",goback)
function goforward(){
    currentslide=currentslide + 1;
    if (currentslide>images.length-1){
        currentslide=0;
    }
    console.log(currentslide)
    img.setAttribute("src",images[currentslide])

}
function goback(){
    currentslide=currentslide -1;
    if (currentslide<0){
        currentslide=images.length-1;
    }
    img.setAttribute("src",images[currentslide])
}