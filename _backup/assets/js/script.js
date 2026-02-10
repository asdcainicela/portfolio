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
const menuPrincipal = document.querySelector('.menuPrincipal');

if (menuToggle && navigation && menuPrincipal) {
    menuToggle.onclick = function () {
        navigation.classList.toggle('open');
        menuPrincipal.classList.toggle('open');
        document.body.classList.toggle('sidebar-open');
    };
}

// --- Mobile Toggle Logic ---
const mobileToggle = document.querySelector('.mobileToggle');

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
const experienceContainer = document.getElementById('experienceContainer');

const experienceData = [
    {
        company: 'Smartech Latam SAC',
        period: '2025 - Present',
        url: 'https://www.linkedin.com/company/smartechlatam/posts/?feedView=all',
        projects: [
            {
                id: 'exp-sl-1',
                icon: 'bx-layer',
                date: '2025 - Present',
                title: 'Ruma Analytics',
                location: 'Client: Minera Titan / Alma Perú',
                desc: 'A flagship Industrial AI project designed for high-availability mining operations. I architected a high-performance system capable of processing industrial stockpiles at 30 FPS with high data stability. The solution integrates advanced computer vision algorithms protected by an intelligent guard system to ensure precise volumetric measurement and structural data integrity under harsh environmental conditions.',
                year: '2025'
            },
            {
                id: 'exp-sl-2',
                icon: 'bx-cylinder',
                date: '2024 - Present',
                title: 'SmartTank System',
                location: 'Client: Alma Perú',
                desc: 'An automated industrial inventory architecture for vertical storage facilities. I implemented a robust end-to-end pipeline that captures high-precision sensor data and provides real-time visualization of material volume. The system features custom alert logic and historical analytics, optimized for massive data ingestion and precise resource management in mission-critical environments.',
                year: '2025'
            },
            {
                id: 'exp-sl-3',
                icon: 'bx-user-voice',
                date: '2025',
                title: 'Face Recognition',
                location: 'Client: Smartech Latam (Internal)',
                desc: 'High-performance biometric authentication system designed for access control. I implemented a modular architecture utilizing state-of-the-art neural networks for reliable identification in varied lighting conditions. The system features low-latency processing and high-accuracy vector matching, providing a scalable foundation for secure facility management and employee verification.',
                year: '2025'
            },
            {
                id: 'exp-sl-4',
                icon: 'bx-group',
                date: '2025',
                title: 'People Counting',
                location: 'Client: CC Quinde',
                desc: 'Intelligent flow analytics for high-traffic commercial environments. I engineered a robust spatial monitoring solution that utilizes edge-processed vision data to track and count occupancy in real-time. By implementing advanced filtering algorithms, the system delivers high accuracy despite environmental noise, enabling data-driven optimization of facility operations.',
                year: '2025'
            },
            {
                id: 'exp-sl-5',
                icon: 'bx-shopping-bag',
                date: '2025',
                title: 'Retail Analytics',
                location: 'Client: CC Quinde',
                desc: 'A comprehensive visual analytics platform for commercial behavior mapping. I developed a high-fidelity monitoring system that identifies patterns in customer movement and engagement within retail spaces. The architecture transforms raw vision pipelines into actionable business intelligence, allowing operators to visualize traffic heatmaps and optimize spatial utilization.',
                year: '2025'
            },
            {
                id: 'exp-sl-6',
                icon: 'bx-broadcast',
                date: '2024',
                title: 'IoT Broker Connection',
                location: 'Client: Smartech Latam',
                desc: 'Back-end infrastructure for large-scale industrial telemetry. I architected a centralized broker connection service that standardizes data communication across diverse hardware nodes. By implementing robust protocol handling and buffering logic, the system ensures seamless integration between field sensors and cloud-based analytics platforms for real-time monitoring.',
                year: '2024'
            }
        ]
    },
    {
        company: 'Alys Peru SA',
        period: '2025 - Present',
        url: 'https://www.alysglobal.ai/',
        projects: [
            {
                id: 'exp-al-1',
                icon: 'bx-cube',
                date: '2024',
                title: 'Visual Coin System',
                location: 'Client: CNM (Mining)',
                desc: 'An advanced visual classification system for high-speed industrial lines. I developed a multi-language processing engine optimized for high-performance edge platforms, utilizing neural networks for real-time object detection and quality control. This architecture delivers sub-millisecond precision in identifying and counting mineral components on conveyor belts in mission-critical mining environments.',
                year: '2024'
            },
            {
                id: 'exp-al-2',
                icon: 'bx-broadcast',
                date: '2024',
                title: 'Textile Telemetry',
                location: 'Client: Iberoplast',
                desc: 'Full-stack industrial telemetry architecture designed for large-scale machinery. I engineered an end-to-end data pipeline leveraging low-power wireless protocols to monitor critical production metrics such as RPM and motor health. The system synchronizes real-time data with cloud-integrated analytics for predictive maintenance, significantly optimizing energy consumption and operational yield.',
                year: '2024'
            },
            {
                id: 'exp-al-3',
                icon: 'bx-water',
                date: '2024 - Present',
                title: 'Shrimp Monitoring',
                location: 'Client: MarinaSol / DC Capital',
                desc: 'I designed a large-scale industrial wireless network for sustainable aquaculture operations. The system utilizes industrial-grade gateways to capture and process critical water quality metrics from specialized submerged sensors. Featuring automated calibration logic and comprehensive monitoring dashboards, this project ensures high-survival rates and biological stability for large-scale breeding facilities.',
                year: '2025'
            }
        ]
    },
    {
        company: 'Mining Mechatronick',
        period: '2023 - 2024',
        url: 'https://mintronick.com/',
        projects: [
            {
                id: 'exp-mm-1',
                icon: 'bx-shield-quarter',
                date: '2024 - Present',
                title: 'Safety System',
                location: 'Client: Pan American Silver (Huarón)',
                desc: 'A sophisticated automated safety solution for underground mining activities. I implemented a proximity-based prevention system using high-precision industrial sensors and robust PLC control logic. The system monitors operational perimeters in real-time and executes automated safety overrides to prevent mechanical hazards, ensuring human protection in mechanized drilling environments.',
                year: '2024'
            },
            {
                id: 'exp-mm-2',
                icon: 'bx-joystick',
                date: '2024',
                title: 'Wireless Simulator',
                location: 'Client: Resemin (Perumin Concept)',
                desc: 'A high-fidelity remote operation concept developed for international mining conventions. I engineered a wireless gateway that synchronizes machine-level signals with interactive interfaces, allowing low-latency remote control of heavy mining equipment from safety. This project highlights the intersection of industrial reliability and advanced wireless communication protocols for future mining.',
                year: '2024'
            },
            {
                id: 'exp-mm-3',
                icon: 'bx-ruler',
                date: '2023 - 2024',
                title: 'Angle System',
                location: 'Client: Resemin (Mina El Brocal)',
                desc: 'A precision guidance system for heavy mechanized drilling rigs. I developed a complex kinematics model based on high-resolution position sensors to calculate the exact orientation of industrial booms. This mathematical approach provides operators with sub-degree numerical precision, significantly improving the accuracy of drilling patterns and excavation efficiency in underground operations.',
                year: '2023'
            },
            {
                id: 'exp-mm-4',
                icon: 'bx-cog',
                date: '2023',
                title: 'Raptor Sim',
                location: 'Client: Resemin S.A.',
                desc: 'A comprehensive training platform for heavy machinery operators. I led the full mechanical and control hardware implementation, creating a high-fidelity operational replica of machine systems. By integrating industrial-grade interfaces with virtual environments, the platform provides a safe and cost-effective method for training personnel on complex mechanized maneuvers.',
                year: '2023'
            }
        ]
    }
];

// Flat list for easy lookup
const allProjects = experienceData.flatMap(c => c.projects.map(p => ({ ...p, companyName: c.company })));

function updateExpDetail(projectId, companyIndex) {
    const exp = allProjects.find(p => p.id === projectId);
    const detailPanel = document.getElementById(`expDetail-${companyIndex}`);
    if (!detailPanel || !exp) return;

    detailPanel.innerHTML = `
        <div class="exp-detail-card">
            <div class="exp-detail-header">
                <div class="exp-detail-icon"><i class='bx ${exp.icon}'></i></div>
                <div>
                    <span class="exp-detail-date">${exp.date}</span>
                    <h3>${exp.title}</h3>
                    <h4>${exp.companyName} | <small>${exp.location}</small></h4>
                </div>
            </div>
            <p>${exp.desc}</p>
        </div>
    `;
}

function renderExperiences() {
    if (!experienceContainer) return;

    experienceContainer.innerHTML = experienceData.map((company, cIndex) => `
        <div class="exp-company-section">
            <h5 class="exp-company-header" ${company.url ? `data-url="${company.url}"` : ''}>
                ${company.company} <small>${company.period}</small>
            </h5>
            
            <div class="experience-layout">
                <!-- Left: Preview Grid -->
                <div class="exp-previews">
                    <div class="exp-projects-list">
                        ${company.projects.map((proj, pIndex) => `
                            <div class="exp-preview ${pIndex === 0 ? 'active' : ''}" 
                                 data-project-id="${proj.id}" 
                                 data-company-index="${cIndex}">
                                <i class='bx ${proj.icon} exp-preview-icon'></i>
                                <div class="exp-preview-title">${proj.title}</div>
                                <div class="exp-preview-year">${proj.year}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Right: Detail Panel for this company -->
                <div class="exp-detail" id="expDetail-${cIndex}">
                    <!-- Initial detail logic will be called below -->
                </div>
            </div>
        </div>
    `).join('');

    // Click events for Projects
    const previews = document.querySelectorAll('.exp-preview');
    previews.forEach((preview) => {
        preview.addEventListener('click', () => {
            const companyIndex = preview.getAttribute('data-company-index');
            // Remove active from other previews IN THE SAME COMPANY
            document.querySelectorAll(`.exp-preview[data-company-index="${companyIndex}"]`)
                .forEach(p => p.classList.remove('active'));

            preview.classList.add('active');
            updateExpDetail(preview.getAttribute('data-project-id'), companyIndex);
        });
    });

    // Initial load for each company
    experienceData.forEach((company, cIndex) => {
        if (company.projects.length > 0) {
            updateExpDetail(company.projects[0].id, cIndex);
        }
    });

    // Stealth Click events for Company Names
    const companyHeaders = document.querySelectorAll('.exp-company-header');
    companyHeaders.forEach(header => {
        if (header.hasAttribute('data-url')) {
            header.addEventListener('click', () => {
                window.open(header.getAttribute('data-url'), '_blank');
            });
        }
    });
}

// Initial Boot
document.addEventListener('DOMContentLoaded', () => {
    renderExperiences();
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
const listItems = document.querySelectorAll('.list');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY || document.documentElement.scrollTop;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Detect section with a 150px offset for smoother transition
        if (scrollPos >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    // Special check for bottom of page to highlight last item
    if ((window.innerHeight + scrollPos) >= document.body.offsetHeight - 50) {
        current = 'contact';
    }

    listItems.forEach(li => {
        li.classList.remove('active');
        const a = li.querySelector('a');
        if (a && a.getAttribute('href') === `#${current}`) {
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

// --- PDF Export ---
// --- PDF Export (Harvard Style) ---
function downloadPDF() {
    const cvContainer = document.getElementById('cv-export-container');
    if (!cvContainer) return;

    // Feedback logic
    const btn = document.querySelector('a[onclick*="downloadPDF"]') || document.querySelector('button[onclick*="downloadPDF"]');
    const originalText = btn ? btn.innerHTML : '';
    if (btn) btn.innerHTML = '<span class="icon"><i class="bx bx-loader-alt bx-spin"></i></span><span class="text">Processing...</span>';

    // 1. Enter Export Mode (CSS handles hiding rest)
    document.body.classList.add('is-exporting-pdf');

    // 2. Build the "Harvard Style" HTML using defined classes
    const heroTitle = document.querySelector('.big-heading')?.innerText || 'Edge AI & Industrial IoT';
    const heroDesc = document.querySelector('.hero-desc')?.innerText || '';
    const skillList = Array.from(document.querySelectorAll('.tech-badge')).map(el => el.innerText).join(' • ');

    let expHTML = '';
    experienceData.forEach(company => {
        expHTML += `
            <div class="harvard-company-block">
                <div class="harvard-company-header">
                    <strong>${company.company}</strong>
                    <span>${company.period}</span>
                </div>
                ${company.projects.map(proj => `
                    <div class="harvard-project">
                        <div class="harvard-project-title">
                            <strong>${proj.title}</strong>
                            <em>${proj.year}</em>
                        </div>
                        <div class="harvard-project-meta">${proj.location}</div>
                        <p class="harvard-project-desc">${proj.desc}</p>
                    </div>
                `).join('')}
            </div>
        `;
    });

    cvContainer.innerHTML = `
        <div class="harvard-cv">
            <header class="harvard-header">
                <h1 class="harvard-name" style="font-size: 28px !important;">GERALD CAINICELA</h1>
                <div class="harvard-contact-info">
                     gerald.cainicela.a@gmail.com • github.com/asdcainicela • linkedin.com/in/gerald-cainicela/
                </div>
                <div class="harvard-title-heading">${heroTitle}</div>
            </header>

            <section class="harvard-section">
                <h2 class="harvard-section-title">Professional Summary</h2>
                <p class="harvard-summary-text">${heroDesc}</p>
            </section>

            <section class="harvard-section">
                <h2 class="harvard-section-title">Experience</h2>
                ${expHTML}
            </section>

            <section class="harvard-section">
                <h2 class="harvard-section-title">Technical Skills</h2>
                <div class="harvard-skills-list">${skillList}</div>
            </section>
        </div>
    `;

    // 2. Capture Setup: Ensure we are at the top of the page
    window.scrollTo(0, 0);
    cvContainer.style.display = 'block';

    // 3. Capture Logic with html2pdf (Restoring Working Step 179 Version)
    window.scrollTo(0, 0);
    setTimeout(() => {
        window.scrollTo(0, 0); // Double check scroll position
        const opt = {
            margin: 25.4, // EXACTLY 1 INCH (APA / Harvard Standard)
            filename: 'CV_Gerald_Cainicela.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                letterRendering: true,
                logging: false,
                width: 624, // Matches 6.5 inches exactly
                windowWidth: 624,
                scrollX: 0,
                scrollY: 0,
                x: 0,
                y: 0
            },
            jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' },
            pagebreak: { mode: ['css', 'legacy'] }
        };

        // Focus html2pdf on the container
        html2pdf().set(opt).from(cvContainer).save()
            .then(() => {
                cleanup();
            })
            .catch(err => {
                console.error('PDF Error:', err);
                cleanup();
            });
    }, 1200);

    function cleanup() {
        cvContainer.style.display = 'none';
        document.body.classList.remove('is-exporting-pdf');
        if (btn) btn.innerHTML = originalText;
        window.scrollTo(0, 0);
    }
}
