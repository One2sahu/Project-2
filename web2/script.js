// Sample data for events (you can replace this with your own data)
const eventsData = [];

// Function to display events
function displayEvents() {
    const eventsContainer = document.getElementById("events-list");

    // Clear any existing event listings
    eventsContainer.innerHTML = "";

    // Loop through events and create HTML elements for each
    eventsData.forEach((event) => {
        const eventElement = document.createElement("div");
        eventElement.classList.add("event");

        eventElement.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p>${event.description}</p>
        `;

        eventsContainer.appendChild(eventElement);
    });
}

// Function to add a new event
function addEvent(title, date, location, description) {
    const newEvent = {
        title,
        date,
        location,
        description,
    };

    eventsData.push(newEvent);
    displayEvents();
}

// Event listener for the "Add Event" button
const addEventButton = document.getElementById("add-event-button");
addEventButton.addEventListener("click", function () {
    const title = prompt("Event Title:");
    const date = prompt("Event Date (YYYY-MM-DD):");
    const location = prompt("Event Location:");
    const description = prompt("Event Description:");

    if (title && date && location && description) {
        addEvent(title, date, location, description);
    } else {
        alert("Please fill in all event details.");
    }
});

// Call the displayEvents function to show events on page load
window.addEventListener("load", displayEvents);