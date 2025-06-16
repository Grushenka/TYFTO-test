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

    let activeYear = "2024"; // Default to 2024

    function getStartOfWeek(weekString) {
        const [year, week] = weekString.split('-W').map(Number);
        const firstDay = new Date(year, 0, 1);
        const daysOffset = (week - 1) * 7;
        const weekStart = new Date(firstDay.setDate(firstDay.getDate() + daysOffset));
        const diffToMonday = (weekStart.getDay() === 0 ? -6 : 1) - weekStart.getDay();
        weekStart.setDate(weekStart.getDate() + diffToMonday);
        return weekStart;
    }

    function getNextTalkDate() {
        const today = new Date();
        for (let talk of talks) {
            const talkDate = new Date(talk.date);
            if (!isNaN(talkDate) && talkDate >= today) {
                return talk.date;
            }
        }
        return null;
    }

    function renderTalks(talkList) {
        const tbody = document.getElementById('talksTable').getElementsByTagName('tbody')[0];
        tbody.innerHTML = '';
        if (talkList.length === 0) {
            const row = tbody.insertRow();
            const cell = row.insertCell();
            cell.colSpan = 4;
            cell.innerText = "No talks available.";
            cell.style.textAlign = "center";
        } else {
            talkList.forEach(talk => {
                const row = tbody.insertRow();
                row.insertCell().innerText = talk.date;
                row.insertCell().innerText = talk.speaker;
                const titleCell = row.insertCell();
                titleCell.innerHTML = `<i class="fa ${talk.icon || ''}"></i> ${talk.title}`;
                row.insertCell().innerText = talk.description;
            });
        }
    }

    function loadTalksByYear(year) {
        const filtered = talks.filter(talk => talk.date.startsWith(year));
        renderTalks(filtered);
    }

    function loadTalksForWeek() {
        const selectedWeek = document.getElementById('weekPicker').value;
        if (!selectedWeek) return loadTalksByYear(activeYear);

        const startOfWeek = getStartOfWeek(selectedWeek);
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);

        const filteredTalks = talks.filter(talk => {
            const talkDate = new Date(talk.date);
            return !isNaN(talkDate) &&
                   talkDate >= startOfWeek &&
                   talkDate <= endOfWeek &&
                   talk.date.startsWith(activeYear);
        });

        renderTalks(filteredTalks);
    }

    function setActiveYear(year) {
        activeYear = year;
        document.querySelectorAll('.year-btn').forEach(btn => btn.classList.remove('active'));
        const yearBtn = document.getElementById(`btn${year}`);
        if (yearBtn) yearBtn.classList.add('active');
        loadTalksForWeek(); // Reapply week filter with the new year
    }

    // Button events
    document.getElementById('btn2024').addEventListener('click', () => setActiveYear('2024'));
    document.getElementById('btn2025').addEventListener('click', () => setActiveYear('2025'));

    // Week picker event
    document.getElementById('weekPicker').addEventListener('change', loadTalksForWeek);

    // Initialize on page load
    const nextTalkDate = getNextTalkDate();
    if (nextTalkDate) {
        const nextDate = new Date(nextTalkDate);
        const year = nextDate.getFullYear();
        const jan1 = new Date(year, 0, 1);
        const days = Math.floor((nextDate - jan1) / (1000 * 60 * 60 * 24));
        const week = Math.ceil((days + jan1.getDay() + 1) / 7);
        const weekStr = `${year}-W${String(week).padStart(2, '0')}`;
        document.getElementById('weekPicker').value = weekStr;
    }

    setActiveYear(activeYear);
});
