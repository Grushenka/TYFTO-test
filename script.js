document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('weekPicker').valueAsDate = new Date();  // Set initial value to current week

    const talks = [
        { date: "2024-06-03", speaker: "Dr. Alice", title: "The Future of Biology", description: "Exploring synthetic biology advancements." },
        { date: "2024-06-04", speaker: "Mr. Bob", title: "Blockchain Basics", description: "Understanding blockchain technology." },
        // Additional talks can be added here
    ];

    function loadTalksForWeek() {
        const tbody = document.getElementById('talksTable').getElementsByTagName('tbody')[0];
        tbody.innerHTML = ''; // Clear current talks

        talks.forEach(talk => {
            const row = tbody.insertRow();
            row.insertCell().innerText = talk.date;
            row.insertCell().innerText = talk.speaker;
            row.insertCell().innerText = talk.title;
            row.insertCell().innerText = talk.description;
        });
    }

    // Initialize the table with all talks
    loadTalksForWeek();

    // Reload talks when a new week is selected
    document.getElementById('weekPicker').addEventListener('change', loadTalksForWeek);
});
