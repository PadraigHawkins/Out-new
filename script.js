const toggleButton = document.getElementById('toggleButton');
const toggleStatus = document.getElementById('toggleStatus');
const itemLink = document.getElementById('itemLink');


// Cookie Consent Popup Logic
const cookieConsentPopup = document.getElementById('cookieConsentPopup');
const acceptCookiesButton = document.getElementById('acceptCookiesButton');
const overlay = document.getElementById('overlay');

// Check if user has already accepted cookies
if (!localStorage.getItem('cookieConsent')) {
    // If not, show the cookie consent popup and overlay
    cookieConsentPopup.style.display = 'block';
    overlay.style.display = 'block';
}

// When user clicks on "Accept" button
acceptCookiesButton.addEventListener('click', () => {
    // Store user consent in localStorage
    localStorage.setItem('cookieConsent', 'true');
    
    // Hide the popup and overlay after acceptance
    cookieConsentPopup.style.display = 'none';
    overlay.style.display = 'none';

    // Initialize Google Analytics after consent
    gtag('config', 'G-3S5PMLPMEJ'); // Replace with your GA ID
});




const pubs = [
    { name: "Grogan’s", url: "https://maps.app.goo.gl/Ka4DjbqXRn89g95u7" },
    { name: "The Long Hall", url: "https://maps.app.goo.gl/rdCrB5uz9w4THQDy6" },
    { name: "The Brazen Head", url: "https://maps.app.goo.gl/u7gJwsqpYUvBQXWi8" },
    { name: "O'Donoghue's", url: "https://maps.app.goo.gl/pFQag1uRYTfqWuKU7" },
    { name: "Toners’s", url: "https://maps.app.goo.gl/2auFbXj9eKZbJvY1A" },
    { name: "Ryan's", url: "https://maps.app.goo.gl/ECSTizvsBrVTH5HUA" },
    { name: "Kehoes", url: "https://maps.app.goo.gl/UjH5Ey7qiuuYHbsw6" },
    { name: "Devitts", url: "https://maps.app.goo.gl/QzQfZgagNXMB1BXTA" },
    { name: "Searson’s", url: "https://maps.app.goo.gl/cgeEqdMWAg6oPsrGA" },
    { name: "The Celt", url: "https://maps.app.goo.gl/kv1JFS4vJVz3Fjig8" },
    { name: "Hogans", url: "https://maps.app.goo.gl/SeEk9GZJmP4tNt5L7" },
    { name: "The Old Stand", url: "https://maps.app.goo.gl/8cQgYTnPyKAjHRfK8" },
    { name: "International Bar", url: "https://maps.app.goo.gl/jnEcrazRVA6JV9Rf8" },
    { name: "Mary's Bar", url: "https://maps.app.goo.gl/sFzair3KzvNtaepaA" },
    { name: "Sinnotts Bar", url: "https://maps.app.goo.gl/Cuwg5RR24G78AfyS6" },
    { name: "The Camden", url: "https://maps.app.goo.gl/rBugNe5btBZ9CKqA8" },
    { name: "Jimmy Rabbitte's", url: "https://maps.app.goo.gl/ia8SSioKcUU6Vy4P9" },
    { name: "The Bleeding Horse", url: "https://maps.app.goo.gl/w9rBSe1EjwPmzkfXA" },
    { name: "The Ginger Man", url: "https://maps.app.goo.gl/G7Dos6nicNeB48ix8" },
    { name: "Cassidy's", url: "https://maps.app.goo.gl/jA7HyxfaczFTYJM39" },
    { name: "Doyle's", url: "https://maps.app.goo.gl/u5NWGa7Ffib4Mybd8" },
    { name: "4 Dame Ln", url: "https://maps.app.goo.gl/yDkRFXApJQvcqNzb7" },
    { name: "Riot", url: "https://maps.app.goo.gl/ShUX3BwA8NV915D8A" },
    { name: "The Stag's Head", url: "https://maps.app.goo.gl/jwjSy9iuvvW22eNP8" }
];

const animals = [
    { name: "Pyg", url: "https://maps.app.goo.gl/3t3BvbhfaiNfsE5V9" },
    { name: "Peruke & Periwig", url: "https://maps.app.goo.gl/ADEzzvwcStqBVLYv8" },
    { name: "9 Below", url: "https://maps.app.goo.gl/zX9MU9SAFK8LGCxk9" },
    { name: "Ohana", url: "https://maps.app.goo.gl/YNKxwvrkeGuNmDvt8" },
    { name: "Dakota", url: "https://maps.app.goo.gl/8n8Ri6mkTfXYemdt6" },
    { name: "Farrier & Draper", url: "https://maps.app.goo.gl/GxkjX8FpX4NmpzZ57" },
    { name: "PYG", url: "https://maps.app.goo.gl/3t3BvbhfaiNfsE5V9" },
    { name: "Café en Seine", url: "https://maps.app.goo.gl/BCwaPWVNpmiu4XzC8" },
    { name: "Lemon & Duke", url: "https://maps.app.goo.gl/vJNVrunNuEhr29MY9" },
    { name: "Zozimus Bar", url: "https://maps.app.goo.gl/otu5r9RuD2NuWGAv5" },
    { name: "The Odeon", url: "https://maps.app.goo.gl/rFjB4FwKvWcK2jhJ7" },
    { name: "The Glasshouse", url: "https://maps.app.goo.gl/qSUpTVVzRGBVwRFeA" },
    { name: "House Dublin", url: "https://maps.app.goo.gl/pV6vhuyxyNyVTkKfA" },
    { name: "NoLita", url: "https://maps.app.goo.gl/MELiuTUYez3nBgpS6" },
    { name: "37 Dawson Street", url: "https://maps.app.goo.gl/YJJtbzT6esvyfWpT8" }
];

let currentList = pubs; // Default list is pubs
let isAnimating = false;

// Function to animate the list jumping through options
function animateJump() {
    if (isAnimating) return; // Prevent multiple clicks during animation

    isAnimating = true;
    let index = 0;
    const jumpDuration = 2000; // Total animation duration (2 seconds)
    const intervalSpeed = 150; // Speed of the jumps (100 milliseconds)

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
        currentList = animals; // Switch to cocktail names
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


