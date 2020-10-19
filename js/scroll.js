window.onload = () => {
    const base = 0.0;
    const background = document.getElementById("background");
    const body = document.getElementById("content");
    const button = document.getElementById("scroller");
    background.style.opacity = base.toString();

    body.addEventListener('scroll', () => {
        const opacity = "0." + body.scrollTop.toString().padStart(3, "0");
        if (opacity > base) background.style.opacity = opacity;
    });

    button.addEventListener('click', () => body.scrollTo({
        top: 700,
        left: 0,
        behavior: 'smooth'
    }));
};