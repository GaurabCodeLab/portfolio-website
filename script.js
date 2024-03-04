const navBar = document.getElementsByClassName("nav");
const listItems = document.getElementsByClassName("list-item");
const logo = document.querySelector(".logo span");
const icon = document.querySelector(".fa-angle-up");
const links = Array.from(document.querySelectorAll(".link"));
const menuBtn = document.getElementsByClassName("fa-bars");
const closeBtn = document.getElementsByClassName("fa-xmark");
const menu = document.getElementsByClassName("menu");

menuBtn[0].addEventListener("click", ()=>{
    menu[0].style.left = "0%";
    menu[0].style.transitionProperty = "all";
    menu[0].style.transitionDuration = "0.5s";
    menu[0].style.transitionTimingFunction = "ease";
})

closeBtn[0].addEventListener("click", ()=>{
    menu[0].style.left = "-100%";
})


window.addEventListener("scroll", ()=>{
    if(window.scrollY>20){
        navBar[0].classList.add("sticky");
       logo.style.color = "white";
        navBar[0].style.transitionProperty = "All";
        navBar[0].style.transitionDuration = "0.6s";
        navBar[0].style.transitionTimingFunction = "ease";

    } else{
        navBar[0].classList.remove("sticky");
        logo.style.color = "#DC143C";
    }
if(window.scrollY>500){
    icon.style.display = "flex";
} else{
    icon.style.display = "none";
}
    
})

links.forEach((link)=>{
    link.addEventListener("click", ()=>{
    menu[0].style.left = "-100%";
    })
})


const typed = new Typed("#text", {
    strings : ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed : 100,
    backSpeed : 60,
    loop : true
});

const typed2 = new Typed(".text-2", {
    strings : ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed : 100,
    backSpeed : 60,
    loop : true
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav : false
            },
            600:{
                items:2,
                nav : false
            },
            1000:{
                items:3,
                nav : false
            }
        }});
  });


