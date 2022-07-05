/* menu */
const nav = document.querySelector('.nav-links');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const section = document.querySelector('#section-00');

//show menu when click on bars icon
function menuShow(){
    nav.classList.add('active');
}

//hide menu when click on close icon
function menuHide(){
    nav.classList.remove('active');
}

//show menu when click on bars icon
menu.addEventListener('click', menuShow);
//show menu when click on bars icon
close.addEventListener('click', menuHide);
//show menu when click on first section icon
section.addEventListener('click', menuHide);