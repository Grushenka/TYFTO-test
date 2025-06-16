document.addEventListener('DOMContentLoaded', function () {
    const talks = [
        { date: "2024-05-21", speaker: "Deanna Grogan", title: "My Top Ten Tips on a Cruise", description: "", icon: "fa-ship" },
        { date: "2024-06-04", speaker: "Sam Wagter", title: "The Elm Family", description: "...", icon: "fa-users" },
        { date: "2024-06-11", speaker: "Asad Awawdeh", title: "My $25,000 Mistake", description: "..." },
        { date: "2024-06-18", speaker: "Kareem Baassiri", title: "Discovering Passions Through Travel", description: "..." },
        { date: "2024-06-25", speaker: "Isabella Villaroman", title: "Fashion Lookbooks", description: "..." },
        { date: "2024-07-02", speaker: "Joshua Mathew", title: "My Perspective And Theories On Filmmaking", description: "..." },
        { date: "2024-07-09", speaker: "Minhal Farrukh", title: "My Travel Journey", description: "..." },
        { date: "2024-07-23", speaker: "Adam Bento", title: "Director's Take", description: "..." },
        { date: "2024-07-30", speaker: "Shawn Foster", title: "How To Present", description: "TBD" },
        { date: "2024-08-06", speaker: "Gunner Gunn", title: "Character Design Is My Passion", description: "..." },
        { date: "2024-08-13", speaker: "James Johnson", title: "So what's that YouTube stuff you do?", description: "..." },
        { date: "2024-08-20", speaker: "N/A", title: "", description: "Cancelled this week" },
        { date: "2024-08-27", speaker: "Shiv Kushwala", title: "TBD", description: "TBD" },
        { date: "2024-09-", speaker: "Allyson Steward", title: "The History of Fan Fiction", description: "TBD" },
        // Add 2025 talks here as needed
    ];

    let selectedYear = 2024; // Default

    function loadTalksByYear(year) {
        const tbody = document.getElementById('talksTable').getElementsByTagName('tbody')[0];
        tbody.innerHTML = '';

        const filteredTalks = talks.filter(talk => {
            return new Date(talk.date).getFullYear() === year;
        });

        if (filteredTalks.length === 0) {
            const row = tbody.insertRow();
            const cell = row.insertCell();
            cell.colSpan = 4;
            cell.innerText = `No talks scheduled for ${year}.`;
            cell.style.textAlign = "center";
        } else {
            filteredTalks.forEach(talk => {
                const row = tbody.insertRow();
                row.insertCell().innerText = talk.date;
                row.insertCell().innerText = talk.speaker;
                const titleCell = row.insertCell();
                titleCell.innerHTML = `<i class="fa ${talk.icon || 'fa-comment'}"></i> ${talk.title}`;
                row.insertCell().innerText = talk.description;
            });
        }
    }

    function setActiveYearButton(year) {
        document.querySelectorAll('.year-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        document.getElementById(`btn${year}`).classList.add('active');
    }

    // Add listeners to year buttons
    document.getElementById('btn2024').addEventListener('click', () => {
        selectedYear = 2024;
        setActiveYearButton(2024);
        loadTalksByYear(2024);
    });

    document.getElementById('btn2025').addEventListener('click', () => {
        selectedYear = 2025;
        setActiveYearButton(2025);
        loadTalksByYear(2025);
    });

    // Initial load
    setActiveYearButton(selectedYear);
    loadTalksByYear(selectedYear);
});
