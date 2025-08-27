const leftDoor = document.querySelector('.left-door');
const rightDoor = document.querySelector('.right-door');

document.querySelector('.door-container').addEventListener('click', () => {
    leftDoor.classList.add('open-left');
    rightDoor.classList.add('open-right');

    setTimeout(() => {
        window.location.href = "shrine.html"
    }, 2000);
})

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");

function openModal(title, text) {
    modalTitle.textContent = title;
    modalText.textContent = text;
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

document.getElementById("eye").addEventListener("click", () => {
    openModal(" ")
});

document.getElementById("scarab").addEventListener("click", () => {
    openModal(" ")
});

document.getElementById("falcon").addEventListener("click", () => {
    openModal(" ")
});
