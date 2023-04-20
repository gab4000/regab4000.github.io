const nav = document.querySelector('.wrapper');
const title = document.querySelector('.title');
const footer = document.querySelectorAll('.f-item');
const photo = document.querySelector('.photo');
const para1 = document.querySelectorAll('.para1');

// window.addEventListener('load', () => {

//     const TL = gsap.timeline({paused: true});

//     TL
//     .from(title, 0.7, {top: -25, opacity: 0, ease: "power2.out"})
//     .from(photo, 0.7, {opacity: 0, padding: 20, ease: 'power2.out'}, '-=0.5')
//     .from(nav, 1.2, {opacity: 0, ease: "power2.out"}, '-=0.5')
//     .staggerFrom(para1, 0.7, {opacity: 0, right: -100, ease: "power2.out" }, 0.1, '-=1')
//     .staggerFrom(footer, 0.7, {bottom: -100, ease: "power2.out"}, 0.1, '-=0.5');

//     TL.play();
// })

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const loader = document.querySelector(".loader");

window.addEventListener('load', () => {

    loader.classList.add('fondu-out');sleep(500).then(() => {
        loader.classList.add('no-display');
    });

})