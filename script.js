const toggleButton = document.getElementById('toggleButton');
const toggleStatus = document.getElementById('toggleStatus');
const itemLink = document.getElementById('itemLink');
const changeNameButton = document.querySelector('.change-name-button');
const nameContainer = document.querySelector('.name-container');
let userLocation = null;


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
    { name: "The Hairy Lemon", url: "https://maps.app.goo.gl/vGpBebitDGyYS8VMA" },
    { name: "The Brazen Head", url: "https://maps.app.goo.gl/u7gJwsqpYUvBQXWi8" },
    { name: "Ciss Maddens", url: "https://maps.app.goo.gl/kmW91x64CM1MiEQo8" },
    { name: "O'Donoghue's", url: "https://maps.app.goo.gl/pFQag1uRYTfqWuKU7" },
    { name: "Toners’s", url: "https://maps.app.goo.gl/2auFbXj9eKZbJvY1A" },
    { name: "The Kings Inn", url: "https://maps.app.goo.gl/dkp14CqYaHRthf3KA" },
    { name: "Peter's Pub", url: "https://maps.app.goo.gl/oqSsZY2kRgcf72rZ9" },
    { name: "Ryan's", url: "https://maps.app.goo.gl/ECSTizvsBrVTH5HUA" },
    { name: "Kehoes", url: "https://maps.app.goo.gl/UjH5Ey7qiuuYHbsw6" },
    { name: "Devitts", url: "https://maps.app.goo.gl/QzQfZgagNXMB1BXTA" },
    { name: "Searson’s", url: "https://maps.app.goo.gl/cgeEqdMWAg6oPsrGA" },
    { name: "The Celt", url: "https://maps.app.goo.gl/kv1JFS4vJVz3Fjig8" },
    { name: "Hogans", url: "https://maps.app.goo.gl/SeEk9GZJmP4tNt5L7" },
    { name: "Bar With No Name", url: "https://maps.app.goo.gl/PBDQTWyHg1GEp9F26" },
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


// Function to add the phrase get directions after first click
let currentList = pubs; // Default list is pubs
let isAnimating = false;
let hasAddedDirections = false; // Flag to check if "Get directions" has been added





// Function to get the user's current location
function getUserLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    resolve(userLocation);
                },
                (error) => {
                    console.error("Error getting location:", error);
                    reject(error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
            reject("Geolocation not supported.");
        }
    });
}

// Function to extract latitude & longitude from Google Maps URL
function extractCoordinates(url) {
    const match = url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
    if (match) {
        return { lat: parseFloat(match[1]), lng: parseFloat(match[2]) };
    }
    return null;
}



// Function to calculate walking time using Google Maps Distance Matrix API
function getWalkingTime(destination) {
    if (!userLocation) {
        console.error("User location not available.");
        return;
    }

    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
        {
            origins: [`${userLocation.lat},${userLocation.lng}`],
            destinations: [`${destination.lat},${destination.lng}`],
            travelMode: "WALKING",
        },
        (response, status) => {
            if (status === "OK" && response.rows.length > 0) {
                const element = response.rows[0].elements[0];
                if (element.status === "OK") {
                    displayWalkingTime(element.duration.text);
                } else {
                    console.error("Error getting walking time:", element.status);
                }
            } else {
                console.error("Distance Matrix request failed due to:", status);
            }
        }
    );
}

// Function to display walking time under the pub name
function displayWalkingTime(timeText) {
    let walkingTimeElement = document.getElementById("walkingTime");
    if (!walkingTimeElement) {
        walkingTimeElement = document.createElement("p");
        walkingTimeElement.id = "walkingTime";
        walkingTimeElement.style.marginTop = "10px";
        walkingTimeElement.style.color = "#333";
        nameContainer.appendChild(walkingTimeElement);
    }
    walkingTimeElement.textContent = `${timeText} walk`;
}





// Modify animateJump function to include walking time calculation
async function animateJump() {
    if (isAnimating) return;

    isAnimating = true;
    let index = 0;
    const jumpDuration = 2000;
    const intervalSpeed = 150;

    const interval = setInterval(() => {
        const item = currentList[index];
        itemLink.textContent = item.name;
        itemLink.href = item.url;

        index = (index + 1) % currentList.length;
    }, intervalSpeed);

    setTimeout(async () => {
        clearInterval(interval);
        const randomItem = currentList[Math.floor(Math.random() * currentList.length)];
        itemLink.textContent = randomItem.name;
        itemLink.href = randomItem.url;
        isAnimating = false;

        // Ensure user location is fetched before calculating distance
        try {
            await getUserLocation();
            const destination = extractCoordinates(randomItem.url);
            if (destination) {
                getWalkingTime(destination);
            } else {
                console.error("Failed to extract coordinates from URL.");
            }
        } catch (error) {
            console.error("Could not get user location:", error);
        }
    }, jumpDuration);
}

// Load user location on page load
getUserLocation();





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
changeNameButton.addEventListener('click', animateJump);



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


