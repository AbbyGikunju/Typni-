// Function to animate the counter
function animateCounter(id, targetValue) {
    let currentValue = 0;
    const increment = Math.ceil(targetValue / 100); // Increment value for smooth animation
    const element = document.getElementById(id);

    const interval = setInterval(() => {
        currentValue += increment;

        // If the current value exceeds the target, stop the interval and set it to the target value
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(interval);
        }

        // Update the element with the current value
        if (id === 'competitions') {
            // For conviction rate, append the percentage sign
            element.textContent = currentValue + '%';
        } else {
            element.textContent = currentValue;
        }
    }, 10); // Update every 10 milliseconds
}

// Function to start animations when the stats section comes into view
function startStatsAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Start animating counters when the stats section is visible
            animateCounter('youth-trained', 520);
            animateCounter('workshops-held', 160);
            animateCounter('partnerships', 200);
            animateCounter('competitons', 8); // Conviction Rate will show percentage
            // Stop observing once the animation has started
            observer.unobserve(entry.target);
        }
    });
}

// Create an IntersectionObserver to detect when the stats section comes into view
const observer = new IntersectionObserver(startStatsAnimation, {
    threshold: 0.5 // Trigger the animation when at least 50% of the stats section is in view
});

// Target the stats section to observe
const statsSection = document.querySelector('.stats-section');
observer.observe(statsSection);
