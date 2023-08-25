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

const tabs=document.querySelectorAll('.tab_btn');
        const all_content=document.querySelectorAll('.content');

        tabs.forEach((tab, index)=>{
            tab.addEventListener('click', (e)=>{
                tabs.forEach(tab=>{tab.classList.remove('active')});
                tab.classList.add('active'); 

            var line=document.querySelector('.line');
            line.style.width = e.target.offsetWidth + "px";
            line.style.left = e.target.offsetLeft + "px";
            
            all_content.forEach(content=>{content.classList.remove('active')});
            all_content[index].classList.add('active');
            })
        })