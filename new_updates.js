// script.js

// Function to handle card click
function handleCardClick(event) {
    const cardTitle = event.currentTarget.querySelector('.card-title').innerText;
    alert(`You clicked on: ${cardTitle}`);
}

// Add event listeners to all news cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', handleCardClick);
});