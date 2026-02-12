import { coreValues, innovationHighlights, problemsSolved, products, outcomes } from './data.js';

// Toast Notification System
export function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Global scope attachment for HTML onclicks
window.buyNow = function (product) {
    showToast(`Adding ${product} to your basket...`);
    setTimeout(() => {
        showToast("Order initiated successfully!");
    }, 1500);
};

window.contactFunction = function () {
    showToast("Opening our secure communication portal...");
    setTimeout(() => {
        window.location.href = "mailto:sales@farmtechacademy.com?subject=Inquiry from Website";
    }, 1000);
};

// Section Rendering Logic
function renderValues() {
    const container = document.querySelector('#values .grid');
    if (!container) return;
    container.innerHTML = coreValues.map(item => `
        <article class="card">
            <div class="card-content">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        </article>
    `).join('');
}

function renderHighlights() {
    const container = document.querySelector('#innovation-highlights .highlights-grid');
    if (!container) return;
    container.innerHTML = innovationHighlights.map(item => `
        <div class="highlight-item">
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
        </div>
    `).join('');
}

function renderChallenges() {
    const container = document.querySelector('#challenges .challenges-grid');
    if (!container) return;
    container.innerHTML = problemsSolved.map(item => `
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
    `).join('');
}

function renderProducts() {
    const container = document.querySelector('#products .grid');
    if (!container) return;
    container.innerHTML = products.map(item => `
        <article class="card">
            <div class="card-content">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                <button onclick="buyNow('${item.title}')">${item.btn}</button>
            </div>
        </article>
    `).join('');
}

function renderOutcomes() {
    const container = document.querySelector('#outcomes .outcomes-grid');
    if (!container) return;
    container.innerHTML = outcomes.map(item => `
        <div class="outcome-pill">
            <h5>${item.title}</h5>
            <p>${item.desc}</p>
        </div>
    `).join('');
}

// Scroll Reveal Animation Logic
function reveal() {
    var reveals = document.querySelectorAll(".card, #about, .contact-item, .highlight-item, .challenge-card, .outcome-pill");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Initialization
document.addEventListener("DOMContentLoaded", () => {
    // Render all dynamic sections
    renderValues();
    renderHighlights();
    renderChallenges();
    renderProducts();
    renderOutcomes();

    // Prepare reveal classes
    const itemsToReveal = document.querySelectorAll(".card, #about, .contact-item, .highlight-item, .challenge-card, .outcome-pill");
    itemsToReveal.forEach(item => item.classList.add("reveal"));

    window.addEventListener("scroll", reveal);
    reveal(); // Initial check
});
