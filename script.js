// Toggle menu button and navbar on click
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times'); // Toggle 'X' icon on menu button
    navbar.classList.toggle('active'); // Toggle the 'active' class for navbar
};

// Close navbar when scrolling
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

// Change main home image on clicking any slider image
document.querySelectorAll('.image-slider img').forEach(image => {
    image.onclick = () => {
        let src = image.getAttribute('src'); // Get source of clicked image
        document.querySelector('.main-home-image').src = src; // Set it to the main image
    };
});

// Initialize Swiper for review section
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // Allows clicking on pagination bullets
    },
    loop: true, // Enable continuous loop
    grabCursor: true, // Change cursor to grab on hover
    autoplay: {
        delay: 7500, // Slide change delay
        disableOnInteraction: false, // Keep autoplay on after interactions
    },
    breakpoints: {
        0: { slidesPerView: 1 }, // 1 slide on small screens
        768: { slidesPerView: 2 } // 2 slides on tablets and above
    },
});
