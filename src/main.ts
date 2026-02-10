import './styles/main.scss';
import { Scene } from '@/three/core/Scene';
import { Navigation } from '@/components/Navigation';
import { ScrollController } from '@/utils/ScrollController';
import { Loader } from '@/components/Loader';
import { experience } from '@/data/experience';
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';

// Init UI Components first to ensure feedback
// --- UI Init ---
const loader = new Loader();
new Navigation();

// Custom Parallax Implementation
const parallaxContainer = document.getElementById('nameScene');
const parallaxText = document.getElementById('parallaxText');

if (parallaxContainer && parallaxText) {
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;

        // Apply parallax to text
        parallaxText.style.transform = `translateX(${x * 2}px) translateY(${y * 2}px)`;

        // Optional: specific span movement if needed, but overall text move is usually sufficient
        // const spans = parallaxText.querySelectorAll('span');
        // spans.forEach((span, i) => {
        //     const factor = (i + 1) * 0.2;
        //     (span as HTMLElement).style.transform = `translateX(${x * factor}px) translateY(${y * factor}px)`;
        // });
    });
}

// --- Rendering Logic ---

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    grid.innerHTML = projects.filter(p => p.featured).map(proj => `
        <div class="project-card" data-tilt data-tilt-glare data-tilt-max="10">
            <div class="p-icon"><i class='bx ${proj.icon}'></i></div>
            <div class="project-meta">${proj.company} | ${proj.year}</div>
            <h3>${proj.title}</h3>
            <p>${proj.description}</p>
            <ul class="technologies">
                ${proj.technologies.slice(0, 4).map(tech => `<li>#${tech}</li>`).join('')}
            </ul>
            <div class="project-links">
                ${proj.githubUrl ? `<a href="${proj.githubUrl}" target="_blank"><i class='bx bxl-github'></i></a>` : ''}
                <a href="#"><i class='bx bx-link-external'></i></a>
            </div>
        </div>
    `).join('');
}

function renderExperience() {
    const container = document.getElementById('experienceContainer');
    if (!container) return;

    container.innerHTML = experience.map((exp, idx) => `
        <div class="exp-company-section">
            <h5 class="exp-company-header" ${exp.url ? `onclick="window.open('${exp.url}', '_blank')"` : ''}>
                ${exp.company} <small>${exp.period}</small>
            </h5>
            <div class="experience-layout">
                <div class="exp-previews">
                    <div class="exp-projects-list">
                        ${exp.projects.map((projId, pIdx) => {
        const proj = projects.find(p => p.id === projId);
        if (!proj) return '';
        return `
                                <div class="exp-preview ${pIdx === 0 && idx === 0 ? 'active' : ''}" 
                                     data-project-id="${projId}" 
                                     data-company-index="${idx}">
                                    <i class='bx ${proj.icon} exp-preview-icon'></i>
                                    <div class="exp-preview-title">${proj.title}</div>
                                    <div class="exp-preview-year">${proj.year}</div>
                                </div>
                            `;
    }).join('')}
                    </div>
                </div>
                <div class="exp-detail" id="expDetail-${idx}">
                    <!-- Initial detail logic below -->
                </div>
            </div>
        </div>
    `).join('');

    // Setup clicks
    setupExperienceClicks();

    // Initial content for each company
    experience.forEach((exp, idx) => {
        if (exp.projects.length > 0) {
            updateExperienceDetail(exp.projects[0], idx);
        }
    });
}

function updateExperienceDetail(projId: string, companyIdx: number) {
    const proj = projects.find(p => p.id === projId);
    const detailPanel = document.getElementById(`expDetail-${companyIdx}`);
    if (!detailPanel || !proj) return;

    detailPanel.innerHTML = `
        <div class="exp-detail-card" data-tilt>
            <div class="exp-detail-header">
                <div class="exp-detail-icon"><i class='bx ${proj.icon}'></i></div>
                <div>
                    <span class="exp-detail-date">${proj.year}</span>
                    <h3>${proj.title}</h3>
                    <h4>${proj.client || proj.company}</h4>
                </div>
            </div>
            <p>${proj.description}</p>
        </div>
    `;

    // Re-init tilt for new card
    if ((window as any).VanillaTilt) {
        (window as any).VanillaTilt.init(detailPanel.querySelectorAll('[data-tilt]'));
    }
}

function setupExperienceClicks() {
    const container = document.getElementById('experienceContainer');
    if (!container) return;

    container.addEventListener('click', (e) => {
        const target = (e.target as HTMLElement).closest('.exp-preview');
        if (!target) return;

        const preview = target as HTMLElement;
        const companyIdx = parseInt(preview.getAttribute('data-company-index') || '0');
        const projId = preview.getAttribute('data-project-id') || '';

        // UI Update
        const allPreviews = container.querySelectorAll(`.exp-preview[data-company-index="${companyIdx}"]`);
        allPreviews.forEach(p => p.classList.remove('active'));
        preview.classList.add('active');

        updateExperienceDetail(projId, companyIdx);
    });
}

function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target as HTMLElement;
                const countTo = parseInt(target.innerText);
                let current = 0;
                const duration = 2000;
                const step = countTo / (duration / 16);

                const update = () => {
                    current += step;
                    if (current < countTo) {
                        target.innerText = Math.floor(current).toString() + (countTo > 100 ? '+' : '');
                        requestAnimationFrame(update);
                    } else {
                        target.innerText = countTo.toString() + (countTo > 100 ? '+' : '');
                    }
                };
                update();
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}

function initTilt() {
    if ((window as any).VanillaTilt) {
        (window as any).VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.3,
        });
    }
}
declare const html2pdf: any;

async function downloadPDF() {
    const cvContainer = document.getElementById('cv-export-container');
    if (!cvContainer) return;

    const btn = document.getElementById('download-cv');
    const originalText = btn ? btn.innerHTML : '';
    if (btn) btn.innerHTML = 'Processing...';

    // 1. Enter Export Mode
    document.body.classList.add('is-exporting-pdf');

    // 2. Build the "Harvard Style" HTML
    const heroTitle = "Edge AI & Industrial IoT";
    const heroDesc = "Mechatronics Engineer & Applied Mathematician specializing in architecting high-performance Edge AI systems for industrial and mining surveillance.";

    // Skills formatting
    const skillList = skills.flatMap(cat => cat.skills).join(' • ');

    // Experience formatting
    let expHTML = '';
    experience.forEach(exp => {
        const companyProjects = projects.filter(p => exp.projects.includes(p.id));

        expHTML += `
            <div class="harvard-company-block">
                <div class="harvard-company-header">
                    <strong>${exp.company}</strong>
                    <span>${exp.period}</span>
                </div>
                <div class="harvard-project-meta" style="font-size: 11px; margin-bottom: 5px; color: #444;">${exp.role}</div>
                ${exp.description ? `<p class="harvard-project-desc" style="margin-bottom: 15px;">${exp.description}</p>` : ''}
                ${companyProjects.map(proj => `
                    <div class="harvard-project">
                        <div class="harvard-project-title">
                            <strong>${proj.title}</strong>
                            <em>${proj.year}</em>
                        </div>
                        <p class="harvard-project-desc">${proj.description}</p>
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

    // 3. Generate PDF
    window.scrollTo(0, 0);
    cvContainer.style.display = 'block';

    setTimeout(() => {
        const opt = {
            margin: 15,
            filename: 'CV_Gerald_Cainicela.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, letterRendering: true },
            jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(cvContainer).save()
            .then(() => {
                cleanup();
            })
            .catch((err: any) => {
                console.error('PDF Error:', err);
                cleanup();
            });
    }, 500);

    function cleanup() {
        cvContainer!.style.display = 'none';
        document.body.classList.remove('is-exporting-pdf');
        if (btn) btn.innerHTML = originalText;
    }
}

// Link button to function
document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target && target.id === 'download-cv') {
        downloadPDF();
    }
});

try {
    ScrollController.getInstance(); // Start scroll logic early

    // Initialize content
    renderExperience();
    renderProjects();
    initCounters();
    initTilt();

    const canvas = document.querySelector('#webgl') as HTMLCanvasElement;
    if (canvas) {
        new Scene(canvas);
    } else {
        console.error('Canvas #webgl not found');
    }
} catch (error) {
    console.error('CRITICAL APP ERROR:', error);
    // If scene/scroll fails, force loader to finish so user isn't stuck
    setTimeout(() => loader.finish(), 2000);
}
