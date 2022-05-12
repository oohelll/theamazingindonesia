const navbar = document.querySelector('nav');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
        navbar.classList.add('dark-navbar');
    } else {
        navbar.classList.remove('dark-navbar');
    }
})

burger.addEventListener('click', () => {
    menu.classList.toggle('menu-click')
    navbar.style.backgroundColor = `rgba(0, 0, 0, 0.719)`;
})

let windowWidth = window.innerWidth;
if(windowWidth <= 992) {
    const h1 = document.querySelector('.item-content h1')
    const div = document.createElement('div')
    div.innerHTML = `
    <h1>Feel The Beauty</h1>
    <h1>Indonesia Island</h1>
    `
    h1.replaceWith(div);
}

if(windowWidth <= 576) {
    const h1 = document.querySelector('.content-gallery h1');
    const h2 = document.querySelector('.content-gallery h1:nth-child(2)');
    h2.parentElement.removeChild(h2)

    const div = document.createElement('div');
    div.innerHTML = `
    <h1>Visit Indonesia</h1>
    <h1>And Be Part</h1>
    <h1>Of The Culture</h1>
    `
    h1.replaceWith(div)
}

let slider = tns({
    container : ".myslider",
    "slideBy" : "1",
    "speed" : 300,
    "nav" : false,
    controlsContainer: "#controls",
    prevButton: ".previous",
    nextbutton: ".next",
    responsive: {
        1600: {
            items: 6,
            autoWidth: true,
        },
        992: {
            items: 5,
            autoWidth: true,
            gutter: 20
        },
        768: {
            items: 4,
            autoWidth: true,
            gutter: 15
        },
        650: {
            items: 4,
            autoWidth: true,
            gutter: 10
        },
        576: {
            items: 3,
            autoWidth: true,
            gutter: 10
        }
    }
})