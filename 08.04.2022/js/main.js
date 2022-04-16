let header=document.querySelector(".header")

window.onscroll=function(){
    if(window.scrollY>100){
        header.classList.add("header-active")
    }
    else{
        header.classList.remove("header-active")
    }
}
// window.onload=function(){
//     setTimeout(()=> {
//         document.querySelector(".loading").classList.add("d-none")
//         document.body.style="overflow-y:scroll"
//     }, 1000);
// }



let icon=document.querySelector(".nav-ico")
let menu=document.querySelector(".menu")
icon.addEventListener("click", function(){
    menu.classList.toggle("nav-active")
})