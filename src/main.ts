import './styles/main.scss';
import { Scene } from '@/three/core/Scene';
import { Navigation } from '@/components/Navigation';
import { ScrollController } from '@/utils/ScrollController';
import { Loader } from '@/components/Loader';
import { experience } from '@/data/experience';
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';

// Init UI Components first to ensure feedback
const loader = new Loader();
new Navigation();

// --- PDF Export Logic ---
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
