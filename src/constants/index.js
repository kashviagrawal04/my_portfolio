const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "kashvigpt",
        name: "KashviGPT",
        icon: "kashvi_gpt.png",
        canOpen: true,
    },
    {
        id: "launchpad",
        name: "Launchpad",
        icon: "launchpad.png",
        canOpen: true,
    },
    {
        id: "bear",
        name: "About Me",
        icon: "bear.png",
        canOpen: true,
    },
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "May 2026",
        title: "Building PathSense: AI-Powered Pedestrian Risk Intelligence",
        image: "/images/blog1.png",
        link: "https://github.com/kashviagrawal04/PathSense",
    },
    {
        id: 2,
        date: "Apr 2026",
        title: "Food Allergen Detection using Vision Transformers (ViT)",
        image: "/images/blog2.png",
        link: "https://github.com/kashviagrawal04/Food-Allergen-Detector",
    },
    {
        id: 3,
        date: "Mar 2026",
        title: "Marvin: AI-Powered Women Safety App",
        image: "/images/blog3.png",
        link: "https://github.com/kashviagrawal04/WOMEN-SAFETY-APP",
    },
];

const techStack = [
    {
        category: "Languages",
        items: ["Python", "Java", "C++", "SQL"],
    },
    {
        category: "AI & ML",
        items: ["PyTorch", "Scikit-learn", "Hugging Face", "RAG"],
    },
    {
        category: "Frameworks",
        items: ["FastAPI", "React", "LightGBM"],
    },
    {
        category: "Databases",
        items: ["MySQL", "PostgreSQL", "Redis", "ChromaDB"],
    },
    {
        category: "Cloud & DevOps",
        items: ["AWS", "Docker", "Kubernetes", "Kafka"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/kashviagrawal04",
    },
    {
        id: 2,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/kashviagrawal0410/",
    },
    {
        id: 3,
        text: "Email",
        icon: "/icons/twitter.svg",
        bg: "#4bcb63",
        link: "mailto:kashviagrawal4@gmail.com",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/landscape1.jpg",
    },
    {
        id: 2,
        img: "/images/landscape2.jpg",
    },
    {
        id: 3,
        img: "/images/landscape3.jpg",
    },
    {
        id: 4,
        img: "/images/landscape4.jpg",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

export const apps = [
    { id: "kashvigpt", name: "KashviGPT", icon: "/images/kashvi_gpt.png" },
    { id: "launchpad", name: "Launchpad", icon: "/images/launchpad.png" },
    { id: "finder", name: "Portfolio", icon: "/images/finder.png" },
    { id: "bear", name: "About Me", icon: "/images/bear.png" },
    { id: "safari", name: "Articles", icon: "/images/safari.png" },
    { id: "photos", name: "Gallery", icon: "/images/photos.png" },
    { id: "contact", name: "Contact", icon: "/images/contact.png" },
    { id: "terminal", name: "Terminal", icon: "/images/terminal.png" },
];

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Marvin - Women Safety App",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "About Marvin.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Marvin is an AI-powered women's safety Android app that acts as a silent guardian.",
                        "It listens for a secret wake word 'Marvin' and instantly triggers an SOS alert to your emergency contacts without needing to touch your phone.",
                        "Features include AI Smart Contact Scoring to rank contacts by proximity, live GPS tracking, and automatic 60-second audio evidence recording.",
                        "Built with Java for Android, integrating a custom on-device AI model for keyword detection.",
                    ],
                },
                {
                    id: 2,
                    name: "github.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/kashviagrawal04/WOMEN-SAFETY-APP",
                    position: "top-10 right-20",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "PathSense",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "About PathSense.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "PathSense is an advanced AI-powered pipeline designed to predict high-risk pedestrian accidents and issue real-time alerts.",
                        "It integrates machine learning (LightGBM), computer vision, and real-time sensor ingestion to create a safety net for smart cities.",
                        "The backend uses a modern, asynchronous FastAPI microservices architecture with production-grade security.",
                        "Includes an interactive dashboard with Leaflet maps to visualize sensor data and track camera feeds.",
                    ],
                },
                {
                    id: 2,
                    name: "github.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/kashviagrawal04/PathSense",
                    position: "top-20 left-20",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "CLAI",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-52",
            windowPosition: "top-[25vh] left-[20vw]",
            children: [
                {
                    id: 1,
                    name: "About CLAI.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "CLAI is a small, fast command-line AI assistant powered by the Anthropic Claude API.",
                        "It allows you to instantly ask questions, summarize text files, or enter an interactive streaming chat session right from your terminal.",
                        "Built with Python, argparse, and the Anthropic SDK.",
                    ],
                },
                {
                    id: 2,
                    name: "github.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/kashviagrawal04/CLAI",
                    position: "top-20 right-10",
                },
            ],
        },

        // ▶ Project 4
        {
            id: 8,
            name: "FireShield-AI",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 left-10",
            windowPosition: "top-[30vh] left-[25vw]",
            children: [
                {
                    id: 1,
                    name: "About FireShield-AI.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "FireShield-AI is an advanced AI-powered system designed for real-time fire and smoke detection.",
                        "By leveraging computer vision and deep learning models, it acts as an early warning system to prevent fire hazards.",
                        "It analyzes video feeds to detect anomalies and instantly alerts users or authorities.",
                        "Built with Python and modern ML frameworks to ensure high accuracy and rapid response times.",
                    ],
                },
                {
                    id: 2,
                    name: "github.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/kashviagrawal04/FireShield-AI",
                    position: "top-20 right-10",
                },
            ],
        },

        // ▶ Project 5
        {
            id: 9,
            name: "SemantiCache",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 right-20",
            windowPosition: "top-[20vh] right-[20vw]",
            children: [
                {
                    id: 1,
                    name: "About SemantiCache.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "SemantiCache is an intelligent semantic caching layer designed to optimize AI application performance and reduce API costs.",
                        "It uses vector embeddings to cache and retrieve responses based on semantic similarity rather than exact keyword matches.",
                        "By intercepting LLM API calls, it can serve cached results for similar queries, drastically reducing latency.",
                        "Built with Python, vector databases, and modern NLP frameworks.",
                    ],
                },
                {
                    id: 2,
                    name: "github.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/kashviagrawal04/SemantiCache",
                    position: "top-20 right-10",
                },
            ],
        },

        // ▶ Project 6
        {
            id: 10,
            name: "Food-Allergen-Detector",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-20",
            windowPosition: "top-[40vh] right-[25vw]",
            children: [
                {
                    id: 1,
                    name: "About Food-Allergen-Detector.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Food-Allergen-Detector is an application designed to help users identify potential allergens in food products quickly and accurately.",
                        "By analyzing ingredient lists, it cross-references data against known allergens.",
                        "This tool acts as a crucial safety companion for individuals with dietary restrictions or food allergies.",
                        "Built to be fast, reliable, and easy to use.",
                    ],
                },
                {
                    id: 2,
                    name: "github.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/kashviagrawal04/Food-Allergen-Detector",
                    position: "top-20 right-10",
                },
            ],
        },

        // ▶ Project 7
        {
            id: 11,
            name: "NOTION-AI",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-[18rem] left-10",
            windowPosition: "top-[10vh] left-[30vw]",
            children: [
                {
                    id: 1,
                    name: "About NOTION-AI.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "NOTION-AI is an intelligent, real-time collaborative workspace inspired by Notion.",
                        "It integrates powerful AI features to help users generate content, summarize text, and organize their thoughts seamlessly.",
                        "Built with modern web technologies like Next.js, Tailwind, and WebSockets for a smooth, interactive experience.",
                    ],
                },
                {
                    id: 2,
                    name: "github.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/kashviagrawal04/NOTION-AI",
                    position: "top-20 right-10",
                },
            ],
        },

        // ▶ Project 8
        {
            id: 12,
            name: "REALTIME-CODE-EDITOR",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-[18rem] left-52",
            windowPosition: "top-[15vh] right-[30vw]",
            children: [
                {
                    id: 1,
                    name: "About CODE-EDITOR.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "REALTIME-CODE-EDITOR is a collaborative web-based code editor that allows multiple developers to write and debug code simultaneously.",
                        "It features real-time synchronization, syntax highlighting, and a sleek IDE-like interface.",
                        "Ideal for pair programming and remote interviews, ensuring instant updates across all clients.",
                    ],
                },
                {
                    id: 2,
                    name: "github.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/kashviagrawal04/REALTIME-CODE-EDITOR",
                    position: "top-20 right-10",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.jpg",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/kashvi-4.jpg",
        },
        {
            id: 2,
            name: "casual-me.jpg",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/kashvi-1.jpg",
        },

        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/kashvi-2.jpg",
            description: [
                "Hey! I’m Kashvi Agrawal 👋, a B.Tech student in Computer Science & Engineering (Data Science) at VIT.",
                "I specialize in Python, Machine Learning, and building AI-driven solutions that solve real-world problems.",
                "My experience spans from backend development at Globe Teleservices to crafting ML pipelines at Magic Wand Labs.",
                "I'm passionate about exploring Generative AI, RAG, and impactful tech. Feel free to explore my projects!",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "KashviAgrawal_Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    spotlight: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    launchpad: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    kashvigpt: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    bear: { isOpen: true, zIndex: INITIAL_Z_INDEX + 1, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    about: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    settings: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    appstore: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    forcequit: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };