// Function to show the modal
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block'; // Make the modal visible
        console.log(`Modal ${modalId} shown!`);
    } else {
        console.error(`Modal with ID ${modalId} not found.`);
    }
}

// Function to hide the modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none'; // Hide the modal
        console.log(`Modal ${modalId} hidden.`);
    } else {
        console.error(`Modal with ID ${modalId} not found.`);
    }
}

// Attach event to open button
document.getElementById('moreBtn').addEventListener('click', () => {
    showModal('myModal'); // Call the showModal function
});

// Attach event to close button
document.querySelector('.close').addEventListener('click', () => {
    closeModal('myModal');
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal('myModal');
    }
});
