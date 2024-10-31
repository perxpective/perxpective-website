export const Schools = [
    {
        name: "Nanyang Technological University",
        course: "BEng in Information Engineering and Media",
        year: "2026 - 2030",
        logo: "/images/ntu.png"
    },
    {
        name: "Singapore Polytechnic",
        course: "Diploma in Cybersecurity and Digital Forensics",
        year: "2021 - 2024",
        logo: "/images/sp.png"
    },
    {
        name: "Anglo-Chinese School (Barker Road)",
        course: "GCE O-Levels",
        year: "2017 - 2020",
        logo: "/images/acsbr.png"
    },
]

export const ProjectList = [
    {
        projectName: "Gryphons Website",
        shortDescription: "Revamped Gryphons' SIG website with React and Tailwind CSS.",
        fullDescription: "I was requested by the Gryphons' SIG to revamp their outdated website. During the development of the website, I taught myself React and Tailwind CSS from scratch. I used Vite as the bundler for the website and nicely animated it with Framer Motion. Hosted with Vercel, you may visit the website by clicking the link below.",
        image: "/images/projects/gryphons-website-1.png",
        link: "https://gryphons.sg",
        year: "2023",
        tags: [
            "React",
            "JavaScript",
            "Tailwind CSS",
            "Vite",
            "Framer Motion"
        ],
        snapshots: [
            "/images/projects/gryphons-website-1.png",
            "/images/projects/gryphons-website-2.png",
            "/images/projects/gryphons-website-3.png",
            "/images/projects/gryphons-website-4.png",
        ]
    },
    {
        projectName: "perxpective's Blog",
        shortDescription: "My personal blog created with Astro and Tailwind CSS.",
        fullDescription: "Inspired by one of my favourite developers devaslife, I decided to create my very own blog that I could post my own articles on. I used Astro as the main framework for the website and styled it with Tailwind CSS. I use Obsidian as my CMS to write my articles with Markdown and ultilised its community plugins such as Obsidian Git to publish new posts to my blog!",
        image: "/images/projects/perxpective-blog-1.jpg",
        link: "https://blog.perxpective.vercel.app",
        year: "2023",
        tags: [
            "Astro",
            "JavaScript",
            "Tailwind CSS",
            "Obsidian",
        ],
        snapshots: [
            "/images/projects/perxpective-blog-1.jpg",
        ]
    },
    {
        projectName: "Discord Wikipedia Bot",
        shortDescription: "A Discord bot that fetches Wikipedia articles.",
        fullDescription: "A Discord bot that fetches Wikipedia articles. This bot was created using the Discord.py module and coded with Python. Using a Wikipedia API, the bot fetches the article and sends it to the Discord channel. The bot also has a command that allows users to search for articles based on the term the user provides to the bot.",
        image: "/images/projects/discord-wiki-1.png",
        link: "https://github.com/perxpective/Discord-Wikipedia-Bot",
        year: "2021",
        tags: [
            "Python",
            "Discord.py"
        ],
        snapshots: [
            "/images/projects/discord-wiki-1.png",
            "/images/projects/discord-wiki-2.png",
            "/images/projects/discord-wiki-3.png",
        ]
    },
    {
        projectName: "Occult",
        shortDescription: "A Q&A AI System Prototype that assists security analysts uncover the stories behind their PCAP files.",
        fullDescription: "Occult is a proof-of-concept application developed for my Final Year Project (FYP) in polytechnic. This project explores the use of Large Language Models (LLMs) to analyse data within PCAP files to streamline the resource-intensive network analysis process using an user-friendly question-answering interface similar to ChatGPT.",
        image: "/images/projects/occult-1.jpg",
        link: "https://github.com/perxpective/Occult",
        year: "2023",
        tags: [
            "Python",
            "Streamlit",
            "FastAPI",
            "ChromaDB",
            "Google PaLM",
            "Llama2",
            "LangChain",
            "HuggingFace"
        ],
        snapshots: [
            "/images/projects/occult-2.png",
        ]
    }
]

export const QnA = [
    {
        question: "What are your hobbies? 🎮🏸🎼",
        answer: "Photography, Nintendo Switch games, badminton, and frisbee! (Of course, how can we forget coding?)"
    },
    {
        question: "What got you into coding? 🤔",
        answer: "My passion for coding started all the way in secondary school 🏫 when I signed up for a coding workshop during the holidays to pass the time. I was taught basic Python 🐍 and I was hooked! I was fascinated by the idea of creating programs to solve problems. It has led me to study Computing as an O-Level subject and eventually pursue a cybersecurity diploma in polytechnic! 📑"
    },
    { 
        question: "What programming languages do you know? 💻",  
        answer: "Python 🐍 is my first programming language I learned since secondary school. My second best language 🥈 would be JavaScript, which I learned in polytechnic. Learned HTML/CSS, MySQL, Java, C, Assembly, and C# in my cybersecurity diploma 🧑‍💻️. I'm actively teaching myself new frameworks 🔝 (e.g. React) to keep myself and my skills relevant and up-to-date! 😁" 
    },
    {
        question: "What's your motto? 📜",
        answer: "Don't chase success. Do what you love and success will eventually chase you 💓."
    },
    {
        question: "Favourite music genres? 🎵🎶",
        answer: "Anything with a strong bass and cool beats! So genres like EDM, Hip-Hop, J-Pop and Reggaeton! 🔊"
    },
    {
        question: "What are your favourite games? 🎮",
        answer: "I'm a huge fan of Nintendo games 🎮, especially Mario! I also enjoy playing Minecraft ⛏️, Valorant, and Overwatch 🔫!"
    },
    {
        question: "Favourite movie genres? 🍿",
        answer: "I'm a huge fan of the Marvel Cinematic Universe (MCU) and I've watched all the films in the series 🦸‍♂️! I also enjoy comedies 😂 and sci-fi films 🛸."
    },
    {
        question: "Important question. Dogs or cats? 🐶🐱",
        answer: "I'm sorry... I'm a dog person 🐶. But cats are cute too 🐱! (I'm also in love with otters recently... 🦦)"
    },
    { 
        question: "How did you create this website? 🤔",
        answer: "React ⚛️, Vite ⚡️, Chakra UI 💚, and Framer Motion 🎞️! I also used Vercel to host this website 🌐. All self-taught BTW!"
    },
    {
        question: "I'm curious. How'd you get your username? 🤯",
        answer: "When I created my first social media account, it was for photography. I thought of a cool photography word to use as my username. I somehow thought of the word 'perspective' which sounded cool. To make it original, I hopped on a trend where people put an 'x' in their username as a filler. I ended up putting it to replace the 's' in the word and that's how it became 'perxpective'. I just thought it looked cool! 😅"
    }
]