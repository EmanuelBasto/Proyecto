let search =document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}
//hacer que tenga gesto las 3 barritas de opciones
let menu =document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}
//quita the Menu and Search box on  Scroll
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');

}
//header
let header = document.querySelector('header');

window.addEventListener('scroll' ,() => {
    header.classList.toggle('shadow', window.scrollY > 0);
});