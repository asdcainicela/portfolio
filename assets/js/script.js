// --- Sidebar Logic ---
const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navigation.classList.toggle('open');
    });
}

const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) => item.addEventListener('click', activeLink));


// --- Swiper Slider Initialization (3D Coverflow) ---
if (typeof Swiper !== 'undefined') {
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 20,     // Angle of rotation
            stretch: 0,
            depth: 200,     // Depth perspective
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // Auto-play optional
        // autoplay: { delay: 2500, disableOnInteraction: false },
    });
}

// --- Vanilla Tilt Initialization ---
if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
        max: 15,            // Max tilt angle
        speed: 400,         // Animation speed
        glare: true,        // Add glare effect
        "max-glare": 0.2,   // Glare opacity
        scale: 1.05         // Scale up on hover
    });
}

// --- Scroll Spy (Active Link) ---
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });

    list.forEach(li => {
        li.classList.remove('active');
        const a = li.querySelector('a');
        if (a && a.getAttribute('href').includes(current)) {
            li.classList.add('active');
        }
    });
});