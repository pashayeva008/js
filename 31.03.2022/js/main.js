// var btn1 = document.querySelector('#accordion .btn1')
// var btn2 = document.querySelector('#accordion .btn2')
// var btn3 = document.querySelector('#accordion .btn3')

// var p1 = document.querySelector("#accordion .p1")
// var p2 = document.querySelector("#accordion .p2")
// var p3 = document.querySelector("#accordion .p3")

// btn1.addEventListener("click", function(){
//     p1.style="display:block"
//     p2.style="display:none"
//     p3.style="display:none"
// })
// btn2.addEventListener("click", function(){
//     p1.style="display:none"
//     p2.style="display:block"
//     p3.style="display:none"
// })
// btn3.addEventListener("click", function(){
//     p1.style="display:none"
//     p2.style="display:none"
//     p3.style="display:block"
// })

// ---------------- uzun yol bitti


// -------------qisa start

// var btn=document.querySelectorAll("#accordion button")
// var p=document.querySelectorAll("#accordion p")
// console.log(btn);

// for(let i=0; i<btn.length; i++){
//     btn[i].addEventListener("click", function(){
//         // for (let j=0; j<p.length; j++){
//         //     p[j].classList.remove("active")
//         // }
//         this.nextElementSibling.classList.toggle("active")
//     })
// }

// remove olanda toggle islemir, add isleyir

// PROTOTYPE







var tabbtn = document.querySelectorAll(".tab button")
var tabp = document.querySelectorAll(".tab p")
for (let i = 0; i < tabbtn.length; i++) {
    tabbtn[i].onclick = function () {
        for (let j = 0; j < tabp.length; j++) {
            tabp[j].classList.remove("active")
        }
        var btni = this.getAttribute("data-btn")
        tabp[btni].classList.add("active")
    }
}







