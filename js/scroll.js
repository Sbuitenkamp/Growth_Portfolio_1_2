window.onload = () => {
    const base = 0.0;
    const background = document.getElementById("background");
    const body = document.getElementById("content");
    background.style.opacity = base.toString();

    body.addEventListener('scroll', () => {
        const opacity = "0." + body.scrollTop.toString().padStart(4, "0");
        if (opacity > base) background.style.opacity = opacity;
    });
};