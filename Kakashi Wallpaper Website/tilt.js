const div = document.querySelector(".tilt");


function isAndroid() {
    return /Android/i.test(navigator.userAgent);
}

function applyGyroscopeEffect() {
    window.addEventListener("deviceorientation", event => {
        const beta = event.beta;
        const gamma = event.gamma;

        const offsetX = gamma / 45;
        const offsetY = beta / 25;

        const shadowX = offsetX * 10;
        const shadowY = offsetY * 10;

        div.style.transform = `perspective(1000px) rotateY(${offsetX * 25}deg) rotateX(${offsetY * 5}deg) scale3d(1, 1, 1)`;
        div.style.boxShadow = `${shadowX}px ${shadowY}px 20px 0px #000000d6`;
    });
}

if (window.innerWidth < 600 || isAndroid()) {
    applyGyroscopeEffect();
}
else {
    div.addEventListener("mousemove", event => {
        const { top, bottom, left, right } = event.currentTarget.getBoundingClientRect();

        const middleX = (right - left) / 2;
        const middleY = (bottom - top) / 2;

        const clientX = event.clientX;
        const clientY = event.clientY;

        const offsetX = (clientX - left - middleX) / middleX;
        const offsetY = (clientY - top - middleY) / middleY;

        const shadowX = offsetX * 10;
        const shadowY = offsetY * 10;

        event.currentTarget.style.transform = `perspective(1000px) rotateY(${offsetX * 5}deg) rotateX(${offsetY * 5}deg) scale3d(1, 1, 1)`;
        event.currentTarget.style.boxShadow = `${shadowX}px ${shadowY}px 20px 0px #000000d6`;
    });
}