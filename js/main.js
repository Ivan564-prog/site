const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".menu__nav");

burger.addEventListener("click",function(){
    menu.classList.toggle("active");
})