// Chargement

const nav = document.querySelector('.wrapper');
const title = document.querySelector('.title');
const footer = document.querySelectorAll('.f-item');
const photo = document.querySelector('.photo');
const para1 = document.querySelectorAll('.para1');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const loader = document.querySelector(".loader");

window.addEventListener('load', () => {

    loader.classList.add('fondu-out');sleep(500).then(() => {
        loader.classList.add('no-display');
    });

})


// Menu hamburger

const menu = document.querySelector('.fa-bars');
const navList = document.querySelector('.nav-list');

menu.addEventListener('click', () => {
    navList.classList.toggle('mobile-menu')
})


// Hover effects
VanillaTilt.init(document.querySelectorAll(".content"), {
    max: 5,
    speed: 400
});