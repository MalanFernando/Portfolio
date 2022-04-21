const menuNav = document.querySelector(".menu-nav")
const toggleBtn = document.querySelector(".toggle-btn")
const iconHamburger = document.querySelector(".hamb-btn")
const iconClose= document.querySelector(".cls-btn")
const menuNavLinks = document.querySelectorAll('.menu-nav a[href^="#"]')

toggleBtn.addEventListener("click", () =>{
    menuNav.classList.toggle("visibility")
})

if (iconHamburger.addEventListener("click", () =>{
    iconHamburger.classList.add("hidden-btn")
    iconClose.classList.remove("close-btn")
})){
}else if (iconClose.addEventListener("click", () =>{
    iconHamburger.classList.remove("hidden-btn")
    iconClose.classList.add("close-btn")
})) {  
}

menuNavLinks.forEach(menuNavLinks =>{
    menuNavLinks.addEventListener("click", function(){
        menuNav.classList.remove("visibility")
        iconHamburger.classList.remove("hidden-btn")
        iconClose.classList.add("close-btn")
    })
})