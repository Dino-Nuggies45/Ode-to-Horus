const leftDoor = document.querySelector('.left-door');
const rightDoor = document.querySelector('.right-door');

document.querySelector('.door-container').addEventListener('click', () => {
    leftDoor.classList.add('open-left');
    rightDoor.classList.add('open-right');

    setTimeout(() => {
        window.location.href = "shrine.html"
    }, 2000);
})