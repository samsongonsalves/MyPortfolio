// Navbar sticky
window.onscroll= function()
{
    myfunction();
    tfunction();
}
var navimg = document.getElementById("center_nav");
var navbar = document.getElementById("navi");
var sticky = navbar.offsetTop;
function myfunction(){
    console.log(sticky);
    console.log(window.pageYOffset);
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
        navimg.style.display = "none";
        document.getElementById("center_name").style.display= "block";
    }
    else{
        navbar.classList.remove("sticky");
        navimg.style.display = "block";
        document.getElementById("center_name").style.display= "none";

    }
}

// Mobile Navigation
burger=document.getElementById("hamburger");
monav=document.getElementById("mobile_navi");
burger.addEventListener("click",function(){
    monav.classList.toggle('mobile_navi');
    monav.classList.toggle("hide");
})

// Mobile Navigation Navbar Sticky
var mmenu = document.getElementById("mobile_menu");
var stick = navbar.offsetTop;
function tfunction(){
    if(window.pageYOffset >= stick){
        mmenu.classList.add("stick");
    }
    else{
        mmenu.classList.remove("stick");
    }
}
// function navlink(){
//     document.getElementById('mobile_navi').style.display="none";
    
// }

// Page Top Padding
const navigationHeight = document.querySelector('.navi').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding',navigationHeight + "px");

// var stopline = gsap.timeline({repeat:-1});
//     stopline.to(".item",{y:"-=30", duration:1});