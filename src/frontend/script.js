// Toast Notification System
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Interactive Functions
function buyNow(product) {
    showToast(`Adding ${product} to your basket...`);
    // Simulate redirection/processing
    setTimeout(() => {
        showToast("Order initiated successfully!");
    }, 1500);
}

function contactFunction() {
    showToast("Opening our secure communication portal...");
    // Future: Open a modal or mailto
    setTimeout(() => {
        window.location.href = "mailto:sales@farmtechacademy.com?subject=Inquiry from Website";
    }, 1000);
}

// Scroll Reveal Animation Logic
function reveal() {
    var reveals = document.querySelectorAll(".card, #about, .contact-item");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Initialize Reveal Classes
document.addEventListener("DOMContentLoaded", () => {
    const itemsToReveal = document.querySelectorAll(".card, #about, .contact-item");
    itemsToReveal.forEach(item => item.classList.add("reveal"));

    window.addEventListener("scroll", reveal);

    // Initial check
    reveal();
});
