// --- Page Loader ---
const pageLoader = document.querySelector('.page-loader');
if (pageLoader) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            pageLoader.classList.add('hidden');
        }, 2500);
    });
}

// --- Sidebar Logic (Desktop) ---
const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navigation.classList.toggle('open');
    });
}

// --- Mobile Toggle Logic ---
const mobileToggle = document.querySelector('.mobileToggle');
const menuPrincipal = document.querySelector('.menuPrincipal');

if (mobileToggle && menuPrincipal) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        menuPrincipal.classList.toggle('active');
    });
}

// --- Theme Toggle (Dark/Light Mode) ---
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check saved preference
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    themeToggle?.classList.add('active');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        themeToggle.classList.toggle('active');
        body.classList.toggle('light-mode');

        // Save preference
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });
}

// --- Active Link ---
const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');

    // Close mobile menu when clicking a link
    if (mobileToggle && menuPrincipal) {
        mobileToggle.classList.remove('active');
        menuPrincipal.classList.remove('active');
    }
}
list.forEach((item) => item.addEventListener('click', activeLink));


// --- Parallax Name Effect ---
if (typeof Parallax !== 'undefined') {
    const nameScene = document.getElementById('nameScene');
    if (nameScene) {
        new Parallax(nameScene, {
            relativeInput: true,
            hoverOnly: true,
            scalarX: 15,
            scalarY: 15
        });
    }
}

// --- Experience Master-Detail ---
const expPreviews = document.querySelectorAll('.exp-preview');
const expDetail = document.getElementById('expDetail');

const experiences = [
    {
        icon: 'bx-shield-quarter',
        date: '2024 - Present',
        title: 'Safety System',
        company: 'Mina Huarón - Pan American Silver',
        desc: 'Electrohydraulic foot-entrapment prevention using Radar sensors & CODESYS PLC programming. Real-time safety monitoring for underground mining operations.'
    },
    {
        icon: 'bx-joystick',
        date: '2024',
        title: 'Wireless Simulator',
        company: 'Perumin Mining Convention',
        desc: 'Real-time Jumbo/Scoop controls with CAN Bus ↔ HMI Wireless Gateway integration. Presented at Peru\'s largest mining convention.'
    },
    {
        icon: 'bx-ruler',
        date: '2023 - 2024',
        title: 'Angle Measurement System',
        company: 'Mina El Brocal',
        desc: 'Precision drilling system for Simba S7D using 5-Encoder kinematics integration. High-accuracy angle detection for mining drills.'
    },
    {
        icon: 'bx-cog',
        date: '2023',
        title: 'Raptor Training Simulator',
        company: 'Resemin S.A.',
        desc: 'Full training simulator for mining equipment. Complete mechanical & electrical hardware implementation for operator training.'
    }
];

function updateExpDetail(index) {
    const exp = experiences[index];
    if (!expDetail || !exp) return;

    expDetail.innerHTML = `
        <div class="exp-detail-header">
            <div class="exp-detail-icon"><i class='bx ${exp.icon}'></i></div>
            <div>
                <span class="exp-detail-date">${exp.date}</span>
                <h3>${exp.title}</h3>
                <h4>${exp.company}</h4>
            </div>
        </div>
        <p>${exp.desc}</p>
    `;
}

expPreviews.forEach((preview, index) => {
    preview.addEventListener('click', () => {
        expPreviews.forEach(p => p.classList.remove('active'));
        preview.classList.add('active');
        updateExpDetail(index);
    });
});

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

// --- Counter Animation ---
const counters = document.querySelectorAll('.counter');
let countersStarted = false;

const startCounters = () => {
    if (countersStarted) return;
    countersStarted = true;

    counters.forEach(counter => {
        counter.innerText = '0';
        const target = +counter.getAttribute('data-target');
        const increment = target / 80;

        const updateCounter = () => {
            const value = +counter.innerText;
            if (value < target) {
                counter.innerText = Math.ceil(value + increment);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target + '+';
            }
        };
        updateCounter();
    });
};

// Start counters when contact section is in view
const contactSection = document.getElementById('contact');
if (contactSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounters();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(contactSection);
}