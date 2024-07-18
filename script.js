document.addEventListener('DOMContentLoaded', function() {
    const talks = [
        { date: "2024-05-21", speaker: "Deanna Grogan", title: "My Top Ten Tips on a Cruise", description: "", icon: "fa-ship" },
        { date: "2024-06-04", speaker: "Sam Wagter", title: "The Elm Family", description: "Do you love stories with action, drama, romance, death, betrayal, crime and real family connections? Do you love complicated world building and character development with exciting plot twists? Do you love the Sims 4? Join us Tuesday June 4th for the Elm Family Lore presentation – you’ll pay for the full seat, but YOU’LL ONLY NEED THE EDGE (edge…edge…edge…)", icon: "fa-users" },
        { date: "2024-06-11", speaker: "Asad Awawdeh", title: "My $25,000 Mistake", description: "Ever wonder how a simple deadline disaster can cost someone an easy opportunity at $25,000? Find out the story about my career, the roots behind it, and how coming up short in one of its most important moments taught me some of the most valuable lessons I've learned. I'll talk about how my mistake came to be, where I went wrong, the aftermath, and how it's completely changed the way I have approached my professional and personal relationships since; hope to see you there!" },
        { date: "2024-06-18", speaker: "Kareem Baassiri", title: "Discovering Passions Through Travel", description: "Ever wondered what drives us to travel and explore the world, uncovering new passions along the way? Join me on June 18th for a heartfelt journey through travel and bachata. Drawing from my own experiences, including a pivotal moment in Barcelona where I fell in love with bachata, I'll explore the deeper meanings behind our wanderlust and how it shapes our personal growth. From the captivating streets of Barcelona to the intriguing nooks of various destinations, travel not only introduces us to diverse cultures but also reveals the passions that define us. Whether you're a seasoned traveler or just starting out, this talk invites you to reflect on life's adventures and embrace the rhythms of self-discovery. Come join me for an evening of exploration and inspiration—see you there!" },
        { date: "2024-06-25", speaker: "Isabella Villaroman", title: "Fashion Lookbooks", description: "Interested in seeing stylish fashion, creative photography, intriguing sets, and captivating storytelling? Join me on Tuesday, June 25th for an exciting journey through my three-year exploration in fashion. I'll be showcasing four distinctive lookbooks I've contributed to, revealing insights into the creative process, behind-the-scenes content, and intriguing fun facts. Whether you're into fashion or simply love artistic expression, there's something for everyone. I can't wait to see you there!"},
        { date: "2024-07-02", speaker: "Joshua Mathew", title: "My Perspective And Theories On Filmmaking", description: "As I pursue filmmaking, the quest for improvement leads to a deeper exploration of what 'improvement' truly means. I believe art and creativity involve much more than just technical knowledge; they arise from an intimate relationship between the creator and their psyche. Join me as I delve into my theories on these subjects, sharing insights, concepts, and behaviours I have observed throughout my journey in formulating stories." },
        { date: "2024-07-09", speaker: "Minhal Farrukh", title: "My Travel Journey", description: "Embark on a fun journey as I share stories from the places I have travelled! Join me as we explore vibrant cultures, breathtaking landscapes, and the unique experiences!" },
        { date: "2024-07-23", speaker: "Adam Bento", title: "Director's Take", description: "Discussing past, present, and future projects." },
        { date: "2024-07-30", speaker: "Shawn Foster", title: "TBD", description: "TBD" },
        { date: "2024-08-06", speaker: "Gunner Gunn", title: "TBD", description: "TBD" },
        { date: "2024-08-13", speaker: "James Johnson", title: "TBD", description: "TBD" },
        { date: "2024-08-20", speaker: "Allyson Steward", title: "The History of Fan Fiction", description: "TBD" },
        { date: "2024-08-27", speaker: "LMS Migration Supports", title: "TBD", description: "TBD" },
        
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

    function getNextTalkDate() {
        const today = new Date();
        for (let talk of talks) {
            const talkDate = new Date(talk.date);
            if (talkDate >= today) {
                return talk.date;
            }
        }
        return null;
    }

    function loadAllTalks() {
        const tbody = document.getElementById('talksTable').getElementsByTagName('tbody')[0];
        tbody.innerHTML = ''; // Clear current talks

        talks.forEach(talk => {
            const row = tbody.insertRow();
            row.insertCell().innerText = talk.date;
            row.insertCell().innerText = talk.speaker;
            const titleCell = row.insertCell();
            titleCell.innerHTML = `<i class="fa ${talk.icon}"></i> ${talk.title}`;
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
                const titleCell = row.insertCell();
                titleCell.innerHTML = `<i class="fa ${talk.icon}"></i> ${talk.title}`;
                row.insertCell().innerText = talk.description;
            });
        }
    }

    // Initialize the table with all talks
    loadAllTalks();

    // Set the week picker to the week of the next talk or the current week
    const nextTalkDate = getNextTalkDate();
    if (nextTalkDate) {
        const nextTalkWeek = new Date(nextTalkDate).toISOString().split('T')[0];
        document.getElementById('weekPicker').value = `W${nextTalkWeek.substring(0, 4)}-W${Math.ceil((new Date(nextTalkWeek).getTime() - new Date(`${nextTalkWeek.substring(0, 4)}-01-01`).getTime()) / (1000 * 60 * 60 * 24 * 7))}`;
        loadTalksForWeek();
    }

    // Reload talks when a new week is selected
    document.getElementById('weekPicker').addEventListener('change', loadTalksForWeek);
});
