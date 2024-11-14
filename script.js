const toggleButton = document.getElementById('toggleButton');
const toggleStatus = document.getElementById('toggleStatus');
const itemLink = document.getElementById('itemLink');

const pubs = [
    { name: "The Temple Bar", url: "https://maps.app.goo.gl/n5Btp5fxDG6iNSp68" },
    { name: "The Long Hall", url: "https://maps.app.goo.gl/n5Btp5fxDG6iNSp68" },
    { name: "The Brazen Head", url: "https://maps.app.goo.gl/n5Btp5fxDG6iNSp68" },
    { name: "O'Donoghue's", url: "https://maps.app.goo.gl/n5Btp5fxDG6iNSp68" },
    { name: "The Stag's Head", url: "https://maps.app.goo.gl/n5Btp5fxDG6iNSp68" }
];

const animals = [
    { name: "Vintage Cocktail Club", url: "https://maps.app.goo.gl/n5Btp5fxDG6iNSp68" },
    { name: "Peruke & Periwig", url: "https://maps.app.goo.gl/n5Btp5fxDG6iNSp68" },
    { name: "9 Below", url: "https://maps.app.goo.gl/n5Btp5fxDG6iNSp68" },
    { name: "Ohana", url: "https://maps.app.goo.gl/n5Btp5fxDG6iNSp68" },
    { name: "37 Dawson Street", url: "https://maps.app.goo.gl/n5Btp5fxDG6iNSp68" }
];

let currentList = pubs; // Default list is pubs
let isAnimating = false;

// Function to animate the list jumping through options
function animateJump() {
    if (isAnimating) return; // Prevent multiple clicks during animation

    isAnimating = true;
    let index = 0;
    const jumpDuration = 2000; // Total animation duration (2 seconds)
    const intervalSpeed = 100; // Speed of the jumps (100 milliseconds)

    const interval = setInterval(() => {
        const item = currentList[index];
        itemLink.textContent = item.name;
        itemLink.href = item.url;

        index = (index + 1) % currentList.length;
    }, intervalSpeed);

    // Stop the animation after the jump duration and land on a final item
    setTimeout(() => {
        clearInterval(interval);
        const randomItem = currentList[Math.floor(Math.random() * currentList.length)];
        itemLink.textContent = randomItem.name;
        itemLink.href = randomItem.url;
        isAnimating = false;
    }, jumpDuration);
}

// Event listener for the toggle button
toggleButton.addEventListener('change', () => {
    if (toggleButton.checked) {
        toggleStatus.textContent = 'Cocktails';
        currentList = animals; // Switch to animal names
    } else {
        toggleStatus.textContent = 'Pints';
        currentList = pubs; // Switch back to pub names
    }
});

// HTML button onclick handler
document.querySelector('.change-name-button').addEventListener('click', animateJump);




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



