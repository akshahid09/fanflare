let next = document.getElementById('next');
let prev = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let items = document.querySelectorAll('.carousel .item');
let countItem = items.length;
let active = 1;
let other_1 = null;
let other_2 = null;
next.onclick = () => {
    carousel.classList.remove('prev');
    carousel.classList.add('next');
    active =active + 1 >= countItem ? 0 : active + 1;
    other_1 =active - 1 < 0 ? countItem -1 : active - 1;
    other_2 = active + 1 >= countItem ? 0 : active + 1;
    changeSlider();
}
prev.onclick = () => {
    carousel.classList.remove('next');
    carousel.classList.add('prev');
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    other_1 = active + 1 >= countItem ? 0 : active + 1;
    other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
    changeSlider();
}
const changeSlider = () => {
    let itemOldActive = document.querySelector('.carousel .item.active');
    if(itemOldActive) itemOldActive.classList.remove('active');

    let itemOldOther_1 = document.querySelector('.carousel .item.other_1');
    if(itemOldOther_1) itemOldOther_1.classList.remove('other_1');

    let itemOldOther_2 = document.querySelector('.carousel .item.other_2');
    if(itemOldOther_2) itemOldOther_2.classList.remove('other_2');

    items.forEach(e => {
        e.querySelector('.image img').style.animation = 'none';
        e.querySelector('.image figcaption').style.animation = 'none';
        void e.offsetWidth;
        e.querySelector('.image img').style.animation = '';
        e.querySelector('.image figcaption').style.animation = '';
    })

    items[active].classList.add('active');
    items[other_1].classList.add('other_1');
    items[other_2].classList.add('other_2');

    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        next.click();
    }, 5000);
}
let autoPlay = setInterval(() => {
    next.click();
}, 5000);



document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.artist-container');
    const artists = document.querySelectorAll('.artist');

    const positions = [
        { left: '0px', zIndex: 6 },
        { left: '120px', zIndex: 5 },
        { left: '240px', zIndex: 4 },
        { left: '360px', zIndex: 3 },
        { left: '480px', zIndex: 2 },
        { left: '600px', zIndex: 1 },
    ];

    artists.forEach((artist, index) => {
        const pos = positions[index];
        artist.style.left = pos.left;
        artist.style.zIndex = pos.zIndex;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const signUpButton = document.querySelector('.signUp');
    const signUpForm = document.getElementById('signup-form');
    const closeButton = document.getElementById('close-form');

    // Show the sign-up form
    signUpButton.addEventListener('click', function() {
        signUpForm.classList.add('show');
    });

    // Hide the sign-up form
    closeButton.addEventListener('click', function() {
        signUpForm.classList.remove('show');
    });

    // Hide the sign-up form if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target === signUpForm) {
            signUpForm.classList.remove('show');
        }
    });
});
