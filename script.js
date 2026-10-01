const text = "KENCHIE SAWADIKA";
const typingElement = document.getElementById("typing");
const proceedButton = document.getElementById("proceedBtn");
const transition = document.getElementById("transition");

let index = 0;

function typeText() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 75);
    }
}

window.addEventListener("load", () => {
    setTimeout(typeText, 500);
});

proceedButton.addEventListener("click", () => {
    transition.classList.add("active");

    setTimeout(() => {
        // Change this when your main COF page is ready.
        window.location.href = "home.html";
    }, 650);
});
