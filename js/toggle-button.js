let clicked = false;

function open_content(id) {
    const block = document.getElementById(id);
    block.classList.add("opened");
    setTimeout(() => block.classList.add("visually-opened"), 20);
}

function close_content(id) {
    if (clicked) return;
    clicked = true;
    const block = document.getElementById(id);
    block.classList.remove("visually-opened");
    block.addEventListener('transitionend', () => {
        setTimeout(() => {
            block.classList.remove('opened');
            clicked = false;
        }, 100);
    }, {
        capture: false,
        once: true,
        passive: false
    });
}