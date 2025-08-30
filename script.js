
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
        openModal("Eye of Horus", "The Eye of Horus also known as the Wedjat Eye is one of the most powerful and enduring symbols of protection, healing, and divine power in ancient Egypt mythology. Its story begins with the legendary conflict between Horus, the falcon-headed god of kingship, and Set, the god of chaos and disorder. After the murder of Osiris(Horus's father), Horus sought to avenge him and reclaim the throne of Egypt. The battles between Horus and Set were long and brutal. During one of these struggles, Horus's left eye was gouged out by Set. This eye, however, was not lost forever. The god of wisdom, Thoth, restored the eye through his magical powers. Once healed, the eye came to represent restoration, wholeness, and healing. The Egyptians believed the Eye of Horus could ward off evil, ensure safety, and protect the pharaohs in both life and death. It became a sacred amulet, often painted on tomb walls, carved into jewelry, and placed on mummies to safegaurd them in the afterlife. The eye also had a mystical mathematical meaning: its design was divided into fractional parts, which together nearly added to 1 whole. This was seen as a metaphor for the restoration of order from chaos, and the completion of the self. The Eye of Horus is often mistaken for the Eye of Ra. Both have juxtaposing meanings: the Eye of Horus is lunar and healing whilst the Eye of Ra is solar and destruction. To tell the difference the Eye of Horus is the left eye and is associated with the moon. It has a teardrop-like line curving down and a spiral beneath. On the other hand the Eye of Ra is on the right and is associated with the sun. Together they are to represent balance. It has a spot on the shrine because it is used as a guardian symbol, ensuring that the space is protected from harmful forces or negative energy. It acts as a spiritual safeguard over offerings, prayers and rituals.")
    });
    document.getElementById("scarab").addEventListener("click", () => {
        openModal("Scarab", "The scarab beetle was scared in ancient Egpyt because it represented the god Khepri, a form of the sun god Ra. Egyptians observed how the dung beetle rolled balls of dung across the sand and likened this to the movement of the sun across the sky. Just as the beetle tirelessly pushed its sphere, Khepri rolled the sun into the heavens each morning, ensuring the cycle of dawn and renewal. The scarab came to symbolize rebirth and renewal of life, the transformation and the souls journey, and the immortality and resurrection after death. Scarab amulets were some of the most common artifacts in Egypt. They were placed over the heart of mummies to ensure safe passage to the afterlife, often inscribed with spells from the Book of the Dead. These 'heart scarabs' were believed to protect the deceased from being judged too harshly in the afterlife, keeping their soul pure and light. Unlike the Eye of Horus, which is about protection and healing. The scarab is about movement, rebirth, and transformation. The Eye ensures safety. the scarab ensures continuity, keeping the spiritual cycle flowing. On an alter the scarab becomes a symbol of ongoing spiritual growth and transformation. It reminds the practitioner that just as the sun rises each morning, there is always the chance for renewal, rebirth, and change. The scarab ensures offerings, prayers, and intentions are carried forward into new life and cycles of growth.")
    });
    document.getElementById("falcon").addEventListener("click", () => {
        openModal("Falcon", "The falcon was one of the most sacred animals in ancient Egypt, closely tied to the god Horus, the sky god and divine protector of pharaohs. Horus was often depicted as a falcon or a man with a falcon's head, his sharp eyes representing omniscience and his wings symbolizing sovereignty over both heaven and earth. Because falcons soar higher than most birds, the Egyptians associated them with the sun and the sky, connecting them to both Horus and sometimes Ra. Their ability to dive swiftly and strike prey with precision made them a symbol of divine justice, protection, and authority. In myth after Osiris was slain by Set, it was Horus as the falcon who avenged his father and reclaimed balance to the cosmos. This myth positioned the falcon as a living representation of order conquering chaos. Pharaohs took on Horus' mantle, being considered the falcon in human form, ruling as his earthly manifestation. The falcon stood for kingship and divine authority, sharp vision and watchfulness, protection in battle, balance, and cosmic order. It wasn't seen as just a bird but the image of victory, protection, and the cycle of justice. The falcon guards power and authority if the Eye of Horus guards the body and the scarab the soul. The falcon's place on the alter emphasizes protection, watchfulness, and balance. By invoking the falcon, you call upon the vigilance of Horus, ensuring that your space is under divine watch, free from chaos, and aligned with order. On the alter the falcon serves to guard against enemies and unseen forces, grant divine vision, bestow authority, and maintain balance and justice. An ever-watchful guardian of sacred spaces.")
    });
    document.getElementById("evil-eye").addEventListener("click", () => {
        openModal("The Evil Eye ", "The Evil Eye is not originally Egyptian but a widespread ancient belief spanning the Mediterranean, Middle East, and beyond. The concept is simple but powerful: a malevolent glare, often born of jealousy or envy, can cause harm, misfortune, or illness to the person being gazed upon. This idea has roots stretching back over 3,000 years, appearing in Greek, Roman, Mesopotamian, and Islamic tradition, as well as in Egyptian culture where protective amulets against the gaze were used. Egyptians, in particular, were highly aware of teh power of sight. Just as the Eye of horus represented protection and healing, the Evil eye represented the destructive potential of vision. To them, eyes were not organs but magical instruments, capable of transmitting energy, whether protective or harmful. The Evil Eye is often represented by a blue eye-shaped amulet(called nazar in modern cultures) functions as a ward and a mirror. Instead of projecting harm, the amulet reflects malice back to its source. Its main meanings were to protect from jealousy and envy, ward off curses or ill intentions, deflecting negativity, and awareness of unseen dangers. The key difference between the Eye of Horus and the Evil Eye is the origin and function. One is a divine symbol and the other is a protective tool. On the altar, the Evil Eye serves as a sheild against negativity and envy, ensure that no external energy can interfere with the sacred space. If others approach with impure intentions, the Evil Eye acts as a guardian that reflects harm back to its source.")
    });
    document.getElementById(" ").addEventListener("click", () => {
        openModal(" ", " ")
    });
    document.getElementById(" ").addEventListener("click", () => {
        openModal(" ", " ")
    });
});

