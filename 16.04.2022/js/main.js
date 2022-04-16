var slideWidth= document.querySelector(".slider").clientWidth
// console.log(slideWidth);
var slideLength=document.querySelectorAll(".slider li").length
// console.log(slideLength);
var mySlideWidth= slideWidth*slideLength
// console.log(mySlideWidth);
var slideUl=document.querySelector(".slider ul")

slideUl.style.width=mySlideWidth+"px";
var next = document.querySelector(".slider .next")
var prev = document.querySelector(".slider .prev")
var c=0
next.onclick=function(){
    clearInterval(stopInterval)
    siruz()
    setInterval(()=>{
    siruz()
    }, 5000);
}

function siruz(){
    c++;
    if(c==slideLength){
        c=0
    }
    slideUl.style.left=-c*(slideWidth) + "px"
}

var stopInterval=setInterval(()=>{
    siruz()
}, 2000);