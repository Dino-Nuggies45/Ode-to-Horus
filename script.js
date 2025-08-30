
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");
    const closeBtn = document.getElementById("closeModal");

    function openModal(title, text) {
        modalTitle.textContent = title;
        modalText.textContent = text;
        modal.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
    }

    closeBtn.addEventListener("click", closeModal);

    document.getElementById("eye").addEventListener("click", () => {
        openModal("Eye of Horus", "The Eye of Horus...")
    });
});

