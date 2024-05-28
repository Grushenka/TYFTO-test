document.addEventListener('DOMContentLoaded', function() {
    const talks = [
        { date: "2024-05-21", speaker: "Deanna Grogan", title: "My Top Ten Tips on a Cruise", description: "" },
        { date: "2024-06-04", speaker: "Sam Wagter", title: "The Elm Family", description: "Do you love stories with action, drama, romance, death, betrayal, crime and real family connections? Do you love complicated world building and character development with exciting plot twists? Do you love the Sims 4? Join us Tuesday June 4th for the Elm Family Lore presentation – you’ll pay for the full seat, but YOU’LL ONLY NEED THE EDGE (edge…edge…edge…)" },
        { date: "2024-06-11", speaker: "TBD", title: "TBD", description: "TBD" },
        { date: "2024-06-18", speaker: "Kareem Baassiri", title: "Bachata/Latin Lesson", description: "TBD" },
        { date: "2024-06-25", speaker: "TBD", title: "TBD", description: "TBD" },
        { date: "2024-07-02", speaker: "Joshua Mathew", title: "TBD", description: "TBD" },
        { date: "2024-07-09", speaker: "TBD", title: "TBD", description: "TBD" },
        { date: "2024-07-16", speaker: "Allyson Steward", title: "TBD", description: "TBD" },
        { date: "2024-07-23", speaker: "TBD", title: "TBD", description: "TBD" },
        { date: "2024-07-30", speaker: "Shawn Foster", title: "TBD", description: "TBD" },
        // Additional talks can be added here
    ];

    function getStartOfWeek(weekString) {
        const [year, week] = weekString.split('-W').map(Number);
        const firstDayOfYear = new Date(year, 0, 1);
        const daysOffset = (week - 1) * 7;
        const startOfWeek = new Date(firstDayOfYear.setDate(firstDayOfYear.getDate() + daysOffset));
        
        // Adjust to the start of the week (Monday)
        const dayOfWeek = startOfWeek.getDay();
        const diffToMonday = (dayOfWeek === 0 ? -6 : 1) - dayOfWeek;
        startOfWeek.setDate(startOfWeek.getDate() + diffToMonday);
        
        return startOfWeek;
    }

    function loadAllTalks() {
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

    function loadTalksForWeek() {
        const selectedWeek = document.getElementById('weekPicker').value;
        if (!selectedWeek) return loadAllTalks();

        const startOfWeek = getStartOfWeek(selectedWeek);
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);  // End of the selected week

        console.log(`Selected Week: ${selectedWeek}`);
        console.log(`Start of Week: ${startOfWeek}`);
        console.log(`End of Week: ${endOfWeek}`);

        const tbody = document.getElementById('talksTable').getElementsByTagName('tbody')[0];
        tbody.innerHTML = ''; // Clear current talks

        const filteredTalks = talks.filter(talk => {
            const talkDate = new Date(talk.date);
            console.log(`Talk Date: ${talkDate}`);
            return talkDate >= startOfWeek && talkDate <= endOfWeek;
        });

        if (filteredTalks.length === 0) {
            const row = tbody.insertRow();
            const cell = row.insertCell();
            cell.colSpan = 4;
            cell.innerText = "No talk scheduled for this week.";
            cell.style.textAlign = "center";
        } else {
            filteredTalks.forEach(talk => {
                const row = tbody.insertRow();
                row.insertCell().innerText = talk.date;
                row.insertCell().innerText = talk.speaker;
                row.insertCell().innerText = talk.title;
                row.insertCell().innerText = talk.description;
            });
        }
    }

    // Initialize the table with all talks
    loadAllTalks();

    // Reload talks when a new week is selected
    document.getElementById('weekPicker').addEventListener('change', loadTalksForWeek);
});