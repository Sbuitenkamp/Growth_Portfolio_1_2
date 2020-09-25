let body;
const base = 0.35;
window.onload = () => {
    body = document.getElementById("background");
    body.style.opacity = base.toString();
};

window.onscroll = () => {
    const opacity = "0." + window.pageYOffset.toString().padStart(3, "0");
    if (opacity > base) body.style.opacity = opacity;
};