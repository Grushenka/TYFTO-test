document.addEventListener('DOMContentLoaded', function () {
    const talks = [
        { date: "2024-05-21", speaker: "Deanna Grogan", title: "My Top Ten Tips on a Cruise", description: "", icon: "fa-ship" },
        { date: "2024-06-04", speaker: "Sam Wagter", title: "The Elm Family", description: "Do you love stories with action, drama, romance, death, betrayal, crime and real family connections? Do you love complicated world building and character development with exciting plot twists? Do you love the Sims 4? Join us Tuesday June 4th for the Elm Family Lore presentation – you’ll pay for the full seat, but YOU’LL ONLY NEED THE EDGE (edge…edge…edge…)", icon: "fa-users" },
        { date: "2024-06-11", speaker: "Asad Awawdeh", title: "My $25,000 Mistake", description: "Ever wonder how a simple deadline disaster can cost someone an easy opportunity at $25,000? Find out the story about my career, the roots behind it, and how coming up short in one of its most important moments taught me some of the most valuable lessons I've learned. I'll talk about how my mistake came to be, where I went wrong, the aftermath, and how it's completely changed the way I have approached my professional and personal relationships since; hope to see you there!" },
        { date: "2024-06-18", speaker: "Kareem Baassiri", title: "Discovering Passions Through Travel", description: "Ever wondered what drives us to travel and explore the world, uncovering new passions along the way? Join me on June 18th for a heartfelt journey through travel and bachata. Drawing from my own experiences, including a pivotal moment in Barcelona where I fell in love with bachata, I'll explore the deeper meanings behind our wanderlust and how it shapes our personal growth. From the captivating streets of Barcelona to the intriguing nooks of various destinations, travel not only introduces us to diverse cultures but also reveals the passions that define us. Whether you're a seasoned traveler or just starting out, this talk invites you to reflect on life's adventures and embrace the rhythms of self-discovery. Come join me for an evening of exploration and inspiration—see you there!" },
        { date: "2024-06-25", speaker: "Isabella Villaroman", title: "Fashion Lookbooks", description: "Interested in seeing stylish fashion, creative photography, intriguing sets, and captivating storytelling? Join me on Tuesday, June 25th for an exciting journey through my three-year exploration in fashion. I'll be showcasing four distinctive lookbooks I've contributed to, revealing insights into the creative process, behind-the-scenes content, and intriguing fun facts. Whether you're into fashion or simply love artistic expression, there's something for everyone. I can't wait to see you there!"},
        { date: "2024-07-02", speaker: "Joshua Mathew", title: "My Perspective And Theories On Filmmaking", description: "As I pursue filmmaking, the quest for improvement leads to a deeper exploration of what 'improvement' truly means. I believe art and creativity involve much more than just technical knowledge; they arise from an intimate relationship between the creator and their psyche. Join me as I delve into my theories on these subjects, sharing insights, concepts, and behaviours I have observed throughout my journey in formulating stories." },
        { date: "2024-07-09", speaker: "Minhal Farrukh", title: "My Travel Journey", description: "Embark on a fun journey as I share stories from the places I have travelled! Join me as we explore vibrant cultures, breathtaking landscapes, and the unique experiences!" },
        { date: "2024-07-23", speaker: "Adam Bento", title: "Director's Take", description: "Discussing past, present, and future projects." },
        { date: "2024-07-30", speaker: "Shawn Foster", title: "How To Present", description: "TBD" },
        { date: "2024-08-06", speaker: "Gunner Gunn", title: "Character Design Is My Passion", description: "Ever wonder what makes youre favourite cartoon characters so memorable? In this presentation I will go over the techniques artists use every day to design such iconic characters!" },
        { date: "2024-08-13", speaker: "James Johnson", title: "So what's that YouTube stuff you do?", description: "I will be talking about what I’ve made on YouTube and what Games I’ve made for them, I will also talk about what makes some videos effective and what I’ve learnt, while also showing some of my projects." },
        { date: "2024-08-20", speaker: "N/A", title: "", description: "Cancelled this week" },
        { date: "2024-08-27", speaker: "Shiv Kushwala", title: "TBD", description: "TBD" },
        { date: "2024-09-", speaker: "Allyson Steward", title: "The History of Fan Fiction", description: "TBD" }
        
        // Additional talks can be added here
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
