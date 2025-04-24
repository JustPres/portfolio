// Get modal elements
const modal = document.getElementById('cert-modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

// Add click event to each certificate card
document.querySelectorAll('.certificate-card').forEach(card => {
    card.addEventListener('click', () => {
        const img = card.querySelector('.cert-thumbnail');
        modal.style.display = 'block';
        modalImg.src = img.src; // Set the modal image source
        captionText.innerText = card.querySelector('h3').innerText; // Set the caption text
    });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside the image
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});