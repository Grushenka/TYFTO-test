document.addEventListener('DOMContentLoaded', function () {
    const talks = [
        { date: "2024-05-21", speaker: "Deanna Grogan", title: "My Top Ten Tips on a Cruise", description: "", icon: "fa-ship" },
        { date: "2024-06-04", speaker: "Sam Wagter", title: "The Elm Family", description: "Do you love stories with action, drama, romance, death, betrayal, crime and real family connections? Do you love complicated world building and character development with exciting plot twists? Do you love the Sims 4? Join us Tuesday June 4th for the Elm Family Lore presentation – you’ll pay for the full seat, but YOU’LL ONLY NEED THE EDGE (edge…edge…edge…)", icon: "fa-users" },
        { date: "2024-06-11", speaker: "Asad Awawdeh", title: "My $25,000 Mistake", description: "Ever wonder how a simple deadline disaster can cost someone an easy opportunity at $25,000? Find out the story about my career, the roots behind it, and how coming up short in one of its most important moments taught me some of the most valuable lessons I've learned. I'll talk about how my mistake came to be, where I went wrong, the aftermath, and how it's completely changed the way I have approached my professional and personal relationships since; hope to see you there!" },
        { date: "2024-06-18", speaker: "Kareem Baassiri", title: "Discovering Passions Through Travel", description: "Ever wondered what drives us to travel and explore the world, uncovering new passions along the way? Join me on June 18th for a heartfelt journey through travel and bachata..." },
        { date: "2024-06-25", speaker: "Isabella Villaroman", title: "Fashion Lookbooks", description: "Interested in seeing stylish fashion, creative photography, intriguing sets, and captivating storytelling?..." },
        { date: "2024-07-02", speaker: "Joshua Mathew", title: "My Perspective And Theories On Filmmaking", description: "As I pursue filmmaking, the quest for improvement leads to a deeper exploration of what 'improvement' truly means..." },
        { date: "2024-07-09", speaker: "Minhal Farrukh", title: "My Travel Journey", description: "Embark on a fun journey as I share stories from the places I have travelled!..." },
        { date: "2024-07-23", speaker: "Adam Bento", title: "Director's Take", description: "Discussing past, present, and future projects." },
        { date: "2024-07-30", speaker: "Shawn Foster", title: "How To Present", description: "TBD" },
        { date: "2024-08-06", speaker: "Gunner Gunn", title: "Character Design Is My Passion", description: "Ever wonder what makes your favourite cartoon characters so memorable?..." },
        { date: "2024-08-13", speaker: "James Johnson", title: "So what's that YouTube stuff you do?", description: "I will be talking about what I’ve made on YouTube and what Games I’ve made for them..." },
        { date: "2025-06-25", speaker: "Ashe Night", title: "How to Use a Mac", description: "Want to learn something about your favourite computer named after a fruit? Well you're in luck, because I'm about to show you just how much you can do in our little Orchard, and with your own 🍎 gear at home." },
        { date: "2025-06-30", speaker: "Allyson Steward", title: "How to Revive the MCU", description: "We will examine what makes the MCU valuable and explore the opportunities Hollywood and Disney are overlooking." }
    ];

    const weekPicker = document.getElementById('weekPicker');
    let selectedYear = new Date().getFullYear();

    function loadTalksByYear(year) {
        const tbody = document.getElementById('talksTable').getElementsByTagName('tbody')[0];
        tbody.innerHTML = '';

        const filteredTalks = talks.filter(talk => {
            return new Date(talk.date).getFullYear() === year;
        });

        // Week Picker: reset and hide/show
        if (filteredTalks.length === 0) {
            weekPicker.style.display = 'none';
            const row = tbody.insertRow();
            const cell = row.insertCell();
            cell.colSpan = 4;
            cell.innerText = `No talks scheduled for ${year}.`;
            cell.style.textAlign = "center";
        } else {
            weekPicker.style.display = 'inline-block';
            // Set week picker to week of first talk
            const firstTalkDate = new Date(filteredTalks[0].date);
            const isoWeek = getISOWeekString(firstTalkDate);
            weekPicker.value = isoWeek;

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
        document.querySelectorAll('.year-btn').forEach(btn => btn.classList.remove('active'));
        const button = document.getElementById(`btn${year}`);
        if (button) button.classList.add('active');
    }

    // Convert a date to ISO week format (e.g., "2024-W22")
    function getISOWeekString(date) {
        const tempDate = new Date(date.getTime());
        tempDate.setUTCDate(tempDate.getUTCDate() + 4 - (tempDate.getUTCDay() || 7));
        const yearStart = new Date(Date.UTC(tempDate.getUTCFullYear(), 0, 1));
        const weekNo = Math.ceil((((tempDate - yearStart) / 86400000) + 1) / 7);
        return `${tempDate.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`;
    }

    // Button click events
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
