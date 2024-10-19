


const pubs = [
    'The Temple Bar',
    'The Guinness Storehouse',
    'O’Neill’s Pub',
    'The Brazen Head',
    'The Porterhouse',
    'The Long Hall',
    'The Dawson Lounge',
    'The Auld Dubliner',
    'The Fitzsimons',
    'The Clarence',
    'The Mercantile',
    'The Woollen Mills',
    'Murray’s Bar',
    'The Hill',
    'The Living Room',
    'The Blind Pig',
    'The Palace Bar',
    'The Stag’s Head',
    'The Castle Lounge',
    'The Old Storehouse',
    'The Flowing Tide',
    'Doheny & Nesbitt',
    'The Bernard Shaw',
    'The Little Pig',
    'The Cobblestone',
    'The Workman’s Club',
    'The Living Room',
    'The Sugar Club',
    'The George',
    'The Abbey Tavern'
];

function changePub() {
    const pubElement = document.getElementById('randomPub');
    const iterations = 10; // Number of jumps before landing
    let count = 0;

    const jumpInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * pubs.length);
        pubElement.textContent = pubs[randomIndex];
        pubElement.style.transform = 'translateY(-10px)'; // Jump up
        setTimeout(() => {
            pubElement.style.transform = 'translateY(0)'; // Land down
        }, 10);

        count++;

        if (count === iterations) {
            clearInterval(jumpInterval);
            // Finally set the last pub after the jumps
            const finalIndex = Math.floor(Math.random() * pubs.length);
            pubElement.textContent = pubs[finalIndex];
        }
    }, 200); // Interval for jump
}
