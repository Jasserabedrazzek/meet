const add = document.getElementById('add-ev');
const remove = document.getElementById('recent-video');
add.addEventListener('click', () => {
    // Navigate to a new page by changing the URL
    window.location.href = 'ev.php';

})

remove.addEventListener('click', () => {
    // Navigate to a new page by changing the URL
    window.location.href = 'del.php';

})
// main.js

// Function to fetch the JSON data
async function fetchEventData() {
    try {
        const response = await fetch('ev-added.json');
        const eventData = await response.json();
        return eventData;
    } catch (error) {
        console.error('Error fetching JSON data:', error);
        return [];
    }
}

// Function to populate the table with event data
// Function to populate the table with event data
async function populateTable() {
    const eventData = await fetchEventData();

    eventData.forEach(event => {
        const cell = document.getElementById(event.id);
        if (cell) {
            const link = document.createElement('a');
            link.href = event.url;
            link.textContent = " Meet: "+event.title+" ";
            cell.appendChild(link);
        }
    });
}

// Call the populateTable function when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    populateTable();
});
