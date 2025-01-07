// Function to show the modal
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block'; // Make the modal visible
  }
}

// Function to hide the modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none'; // Hide the modal
  }
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
  const modals = document.getElementsByClassName('modal');
  for (let i = 0; i < modals.length; i++) {
    if (event.target === modals[i]) {
      modals[i].style.display = 'none';
    }
  }
};

