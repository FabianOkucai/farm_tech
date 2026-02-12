import { coreValues, innovationHighlights, problemsSolved, products, outcomes, stats } from './data.js';

// Toast Notification System
export function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Global scope attachment for HTML onclicks
window.buyNow = function (product) {
    showToast(`Adding ${product} to your basket...`);
    setTimeout(() => showToast("Order initiated successfully!"), 1500);
};

window.contactFunction = function () {
    showToast("Opening our secure communication portal...");
    setTimeout(() => {
        window.location.href = "mailto:sales@farmtechacademy.com?subject=Inquiry from Website";
    }, 1000);
};

// Component Rendering Engine
const Renderer = {
    render(selector, data, templateFn) {
        const container = document.querySelector(selector);
        if (!container) return;
        container.innerHTML = data.map(templateFn).join('');
    },

    templates: {
        value: (item) => `
            <article class="card">
                <div class="card-content">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>
            </article>
        `,
        highlight: (item) => `
            <div class="highlight-item">
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
            </div>
        `,
        challenge: (item) => `
            <div class="challenge-card">
                <div class="challenge-header">
                    <span class="bad-tag">Problem</span>
                    <h4>${item.title}</h4>
                </div>
                <p class="problem-text">${item.problem}</p>
                <div class="divider"></div>
                <div class="solution-content">
                    <span class="good-tag">Solution</span>
                    <p>${item.solution}</p>
                </div>
            </div>
        `,
        product: (item) => `
            <article class="card">
                <div class="card-content">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                    <button onclick="buyNow('${item.title}')">${item.btn}</button>
                </div>
            </article>
        `,
        outcome: (item) => `
            <div class="outcome-pill">
                <h5>${item.title}</h5>
                <p>${item.desc}</p>
            </div>
        `,
        stat: (item) => `
            <div class="stat-item">
                <h3>${item.value}</h3>
                <p>${item.label}</p>
            </div>
        `
    }
};

// Scroll Reveal Logic
function initScrollReveal() {
    const items = document.querySelectorAll(".card, #about, .contact-item, .highlight-item, .challenge-card, .outcome-pill, .stat-item");
    items.forEach(item => item.classList.add("reveal"));

    const reveal = () => {
        const windowHeight = window.innerHeight;
        items.forEach(item => {
            const elementTop = item.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                item.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", reveal);
    reveal(); // Initial check
}

// Initialization
function renderValues() {
    Renderer.render('#values .grid', coreValues, Renderer.templates.value);
}

function renderHighlights() {
    Renderer.render('#innovation-highlights .highlights-grid', innovationHighlights, Renderer.templates.highlight);
}

function renderChallenges() {
    Renderer.render('#challenges .challenges-grid', problemsSolved, Renderer.templates.challenge);
}

function renderProducts() {
    Renderer.render('#products .grid', products, Renderer.templates.product);
}

function renderOutcomes() {
    Renderer.render('#outcomes .outcomes-grid', outcomes, Renderer.templates.outcome);
}

function renderStats() {
    Renderer.render('#stats .stats-grid', stats, Renderer.templates.stat);
}

function initApp() {
    renderStats();
    renderValues();
    renderHighlights();
    renderChallenges();
    renderProducts();
    renderOutcomes();
    initScrollReveal();
}

document.addEventListener("DOMContentLoaded", initApp);
