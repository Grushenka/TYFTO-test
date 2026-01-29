document.addEventListener('DOMContentLoaded', function () {
    console.log('Schedule JS loaded');

    const talks = [
        { date: "2024-05-21", speaker: "Deanna Grogan", title: "My Top Ten Tips on a Cruise", description: "", icon: "fa-ship" },
        { date: "2024-06-04", speaker: "Sam Wagter", title: "The Elm Family", description: "Do you love stories with action, drama, romance, death, betrayal, crime and real family connections? Do you love complicated world building and character development with exciting plot twists? Do you love the Sims 4? Join us Tuesday June 4th for the Elm Family Lore presentation – you’ll pay for the full seat, but YOU’LL ONLY NEED THE EDGE (edge…edge…edge…)", icon: "fa-users" },
        { date: "2024-06-11", speaker: "Asad Awawdeh", title: "My $25,000 Mistake", description: "Ever wonder how a simple deadline disaster can cost someone an easy opportunity at $25,000? Find out the story about my career, the roots behind it, and how coming up short in one of its most important moments taught me some of the most valuable lessons I've learned. I'll talk about how my mistake came to be, where I went wrong, the aftermath, and how it's completely changed the way I have approached my professional and personal relationships since; hope to see you there!" },
        { date: "2024-06-18", speaker: "Kareem Baassiri", title: "Discovering Passions Through Travel", description: "Ever wondered what drives us to travel and explore the world, uncovering new passions along the way? Join me on June 18th for a heartfelt journey through travel and bachata..." },
        { date: "2024-06-25", speaker: "Isabella Villaroman", title: "Fashion Lookbooks", description: "Interested in seeing stylish fashion, creative photography, intriguing sets, and captivating storytelling? Join me on Tuesday, June 25th for an exciting journey through my three-year exploration in fashion. I'll be showcasing four distinctive lookbooks I've contributed to, revealing insights into the creative process, behind-the-scenes content, and intriguing fun facts. Whether you're into fashion or simply love artistic expression, there's something for everyone. I can't wait to see you there! in seeing stylish fashion, creative photography, intriguing sets, and captivating storytelling?..." },
        { date: "2024-07-02", speaker: "Joshua Mathew", title: "My Perspective And Theories On Filmmaking", description: "As I pursue filmmaking, the quest for improvement leads to a deeper exploration of what 'improvement' truly means. I believe art and creativity involve much more than just technical knowledge; they arise from an intimate relationship between the creator and their psyche. Join me as I delve into my theories on these subjects, sharing insights, concepts, and behaviours I have observed throughout my journey in formulating stories." },
        { date: "2024-07-09", speaker: "Minhal Farrukh", title: "My Travel Journey", description: "Embark on a fun journey as I share stories from the places I have travelled! Join me as we explore vibrant cultures, breathtaking landscapes, and the unique experiences!" },
        { date: "2024-07-23", speaker: "Adam Bento", title: "Director's Take", description: "Discussing past, present, and future projects." },
        { date: "2024-07-30", speaker: "Shawn Foster", title: "How To Present", description: "TBD" },
        { date: "2024-08-06", speaker: "Gunner Gunn", title: "Character Design Is My Passion", description: "Ever wonder what makes youre favourite cartoon characters so memorable? In this presentation I will go over the techniques artists use every day to design such iconic characters!" },
        { date: "2024-08-13", speaker: "James Johnson", title: "So what's that YouTube stuff you do?", description: "I will be talking about what I’ve made on YouTube and what Games I’ve made for them, I will also talk about what makes some videos effective and what I’ve learnt, while also showing some of my projects." },
        { date: "2025-06-25", speaker: "Ashe Night", title: "How to Use a Mac", description: "Want to learn something about your favourite computer named after a fruit? Well you're in luck, because I'm about to show you just how much you can do in our little Orchard, and with your own 🍎 gear at home." },
        { date: "2025-06-30", speaker: "Allyson Steward", title: "How to Revive the MCU", description: "We will examine what makes the MCU valuable and explore the opportunities Hollywood and Disney are overlooking." },
        { date: "2026-02-05", speaker: "Aava Kahani", title: "30 Rock or 1393 Western Road: Why 30 Rock Is The Best Workplace Comedy", description: "Think your life is stressful? Your boss is a character? Your coworkers are…well, themselves? 30 Rock has been there, done that, and somehow made it hilarious. In this presentation, I will dive into why Tina Fey’s genius, Liz Lemon’s chaos, and Jack Donaghy’s questionable life advice make the show the crown jewel of 2010s comedy. Prepare to laugh, quote, and maybe even question why you’ve spent so many hours watching literally anything else. By the end, you’ll see why everyone should experience 30 Rock at least once!!" },
        { date: "2026-02-12", speaker: "Zimo Feng", title: "Zimo's Narrative Art Practice", description: "As an artist I'd like to share some of my artwork, focusing on drawing, digital painting and other media of art. I will talk about different types of artworks I create, the visual language I use in narrative works, and my experience of learning. I hope that this presentation will give the team a better understanding of my work and how visual storytelling can be used to convey ideas and personal perspectives." },
        { date: "2026-02-04", speaker: "Joshua Mathew", title: "An Immersive Flow: Shot by Shot", description: "An introduction to a new theoretical approach to translating from writing to the screen. Using practical examples, I will be demonstrating a new theory of film that I've hypothesized to immerse an audience in film, the same way they would be absorbed in music." },
        { date: "2026-02-18", speaker: "Mo Bayoumi", title: "Creativity as a Door Opener for New Opportunities", description: "I’ll be presenting how creativity shaped my life and opened doors I never expected. I’ll share how my passion for music got me hooked on creating, how that led me to meeting some incredible people, and how those experiences pushed me to explore other creative paths. That curiosity eventually led me into design, where I picked up new skills I genuinely enjoyed, and those skills played a role in bringing me to the awesome team I work with now. I want to show that creativity can act as a bridge from passion, to skills, to people, to opportunities and why it’s worth following throughout your life." },
        { date: "2026-07-30", speaker: "TBD", title: "TBD", description: "TBD" },
        { date: "2026-07-30", speaker: "TBD", title: "TBD", description: "TBD" },
        { date: "2026-07-30", speaker: "TBD", title: "TBD", description: "TBD" },
        { date: "2026-07-30", speaker: "TBD", title: "TBD", description: "TBD" },
        { date: "2026-07-30", speaker: "TBD", title: "TBD", description: "TBD" },
        { date: "2026-07-30", speaker: "TBD", title: "TBD", description: "TBD" }
    ];

    const weekPicker = document.getElementById('weekPicker');
    const table = document.getElementById('talksTable');
    let selectedYear = new Date().getFullYear();

    if (!table) {
        console.error('talksTable not found');
        return;
    }

    const tbody = table.querySelector('tbody');

    function loadTalksByYear(year) {
        tbody.innerHTML = '';

        const filteredTalks = talks.filter(talk =>
            new Date(talk.date).getFullYear() === year
        );

        if (filteredTalks.length === 0) {
            if (weekPicker) weekPicker.style.display = 'none';
            const row = tbody.insertRow();
            const cell = row.insertCell();
            cell.colSpan = 4;
            cell.textContent = `No talks scheduled for ${year}.`;
            cell.style.textAlign = 'center';
            return;
        }

        if (weekPicker) {
            weekPicker.style.display = 'inline-block';
            weekPicker.value = getISOWeekString(new Date(filteredTalks[0].date));
        }

        filteredTalks.forEach(talk => {
            const row = tbody.insertRow();
            row.insertCell().textContent = talk.date;
            row.insertCell().textContent = talk.speaker;
            row.insertCell().innerHTML = `<i class="fa ${talk.icon || 'fa-comment'}"></i> ${talk.title}`;
            row.insertCell().textContent = talk.description;
        });
    }

    function setActiveYearButton(year) {
        document.querySelectorAll('.year-btn').forEach(btn =>
            btn.classList.remove('active')
        );
        const activeBtn = document.getElementById(`btn${year}`);
        if (activeBtn) activeBtn.classList.add('active');
    }

    function getISOWeekString(date) {
        const tempDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        const day = tempDate.getUTCDay() || 7;
        tempDate.setUTCDate(tempDate.getUTCDate() + 4 - day);
        const yearStart = new Date(Date.UTC(tempDate.getUTCFullYear(), 0, 1));
        const weekNo = Math.ceil((((tempDate - yearStart) / 86400000) + 1) / 7);
        return `${tempDate.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`;
    }

    // Button handlers (defensive)
    [
        { id: 'btn2024', year: 2024 },
        { id: 'btn2025', year: 2025 },
        { id: 'btn2026', year: 2026 }
    ].forEach(({ id, year }) => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', () => {
                selectedYear = year;
                setActiveYearButton(year);
                loadTalksByYear(year);
            });
        }
    });

    // Initial load
    setActiveYearButton(selectedYear);
    loadTalksByYear(selectedYear);
});