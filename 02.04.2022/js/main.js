// GLOBAL, FUNCTION, BLOCK SCOPE


// function text() {
//     var a = 40
//     let b = 50
//     const c = 60
//     console.log(a, b, c);
// }

// test()

// var a = 10
// let b = 20
// const c = 30

// if (true) {
//     var a = 40
//     let b = 50
//     const c = 60
//     console.log(a, b, c);
// }
// console.log(a, b, c);
// ----------------


// function karate(name, lastName){
//     return name
// }

// const karate2 = (name, soyad) => name;

// var text = document.querySelector(".txt")

// text.onclick=()=>{
//     this.style="color:red"
// }
// console.log(this);






var mySlider = [
    "photo/photo1.jpg",
    "photo/photo2.jpg",
    "photo/photo3.jpg",
    "photo/photo4.png"
]

var img = document.querySelector('#slider img')
img.src = mySlider[0]
var next = document.querySelector('#slider .next')
var prev = document.querySelector('#slider .prev')
var currentSlide = 0

next.onclick = function () {
    currentSlide++;
    if (currentSlide >= mySlider.length) {
        currentSlide = 0
    }
    img.src = mySlider[currentSlide]
}

prev.onclick = function () {
    currentSlide--;
    if (currentSlide == -1) {
        currentSlide = mySlider.length - 1
    }
    img.src = mySlider[currentSlide]
}