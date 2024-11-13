// List of pubs with their Google Maps links
const pubs = [
    { name: "The Temple Bar", link: "https://maps.app.goo.gl/mFQ2MG7avKvvn3hv9" },
    { name: "O'Donoghue's", link: "https://maps.app.goo.gl/mFQ2MG7avKvvn3hv9" },
    { name: "The Brazen Head", link: "https://maps.app.goo.gl/mFQ2MG7avKvvn3hv9" },
    { name: "The Long Hall", link: "https://maps.app.goo.gl/mFQ2MG7avKvvn3hv9" },
    { name: "Kehoe's", link: "https://maps.app.goo.gl/mFQ2MG7avKvvn3hv9" },
    { name: "Mulligan's", link: "https://maps.app.goo.gl/mFQ2MG7avKvvn3hv9" },
    { name: "The Stag's Head", link: "https://maps.app.goo.gl/mFQ2MG7avKvvn3hv9" },
    { name: "Grogan's", link: "https://maps.app.goo.gl/mFQ2MG7avKvvn3hv9" },
    { name: "The Palace Bar", link: "https://maps.app.goo.gl/mFQ2MG7avKvvn3hv9" },
    { name: "Doheny & Nesbitt", link: "https://maps.app.goo.gl/mFQ2MG7avKvvn3hv9" }
];

// Function to change the pub name with a jumping animation
function changePub() {
    const pubLink = document.getElementById('pubLink');
    const iterations = 10; // Number of jumps before landing
    let count = 0;

    // Clear any existing interval to prevent multiple animations
    if (window.jumpInterval) {
        clearInterval(window.jumpInterval);
    }

    // Start the jumping animation
    window.jumpInterval = setInterval(() => {
        // Get a random pub from the list
        const randomIndex = Math.floor(Math.random() * pubs.length);
        const selectedPub = pubs[randomIndex];

        // Update the link text and URL
        pubLink.textContent = selectedPub.name;
        pubLink.href = selectedPub.link;
        pubLink.target = "_blank"; // Open link in a new tab

        // Jump animation effect
        pubLink.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            pubLink.style.transform = 'translateY(0)';
        }, 100);

        count++;
        // Stop the animation after the specified number of iterations
        if (count >= iterations) {
            clearInterval(window.jumpInterval);
        }
    }, 150);
}

const toggleButton = document.getElementById('toggleButton');
const toggleStatus = document.getElementById('toggleStatus');

toggleButton.addEventListener('change', () => {
    if (toggleButton.checked) {
        toggleStatus.textContent = 'Cocktails';
    } else {
        toggleStatus.textContent = 'Pints';
    }
});

