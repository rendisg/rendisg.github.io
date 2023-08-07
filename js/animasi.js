AOS.init();
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

var navBar= document.getElementById('navBar')
window.onscroll = function (){
    if(window.scrollY > 22 ){
        navBar.classList.add('scrolled');
    }else{
        navBar.classList.remove('scrolled');
    }
};