import { writable } from 'svelte/store';

export const isActiveData = writable({
    about: "active",
    resume: "deactive",
    portfolio: "deactive",
    blog: "deactive",
    contact: "deactive",
});

export const portfolio_category = [
    "all",
    "web design",
    "mobile application",
    "software design",
];
export const portfolio_content = [
    {
        datacategory: "web design",
        src: "/images/project-6.png",
        alt: "Project 6",
        target: "https://github.com/FISAT-PROJECTS/keam-project",
    }, {
        datacategory: "web design",
        src: "/images/project-5.png",
        alt: "Project 5",
        target: "https://github.com/Co-Science/tele-go-m",
    }, {
        datacategory: "mobile application",
        src: "/images/project-4.png",
        alt: "Project 4",
        target: "https://github.com/HackOnTheWay",
    }, {
        datacategory: "mobile application",
        src: "/images/project-3.png",
        alt: "Project 3",
        target: "",
    }, {
        datacategory: "software design",
        src: "/images/project-2.png",
        alt: "Project 2",
        target: "",
    }, {
        datacategory: "software design",
        src: "/images/project-1.png",
        alt: "Project 1",
        target: "",
    },
];

export const modalContent = writable({ src: "", alt: "", text: "", isActive: false });

export const testimonials = [
    {
        src: "/images/avatar-1.png",
        alt: "Daniel lewis",
        testimonial: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
        voluptate, assumenda tempore sed saepe eaque odio a delectus enim
        architecto dolor omnis officia quidem nesciunt perspiciatis voluptates
        dolores consequuntur dolorum?`,
    }, {
        src: "/images/avatar-2.png",
        alt: "Jessica miller",
        testimonial: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
        voluptate, assumenda tempore sed saepe eaque odio a delectus enim
        architecto dolor omnis officia quidem nesciunt perspiciatis voluptates
        dolores consequuntur dolorum?`,
    }, {
        src: "/images/avatar-3.png",
        alt: "Emily evans",
        testimonial: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
        voluptate, assumenda tempore sed saepe eaque odio a delectus enim
        architecto dolor omnis officia quidem nesciunt perspiciatis voluptates
        dolores consequuntur dolorum?`,
    }, {
        src: "/images/avatar-4.png",
        alt: "Henry william",
        testimonial: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
        voluptate, assumenda tempore sed saepe eaque odio a delectus enim
        architecto dolor omnis officia quidem nesciunt perspiciatis voluptates
        dolores consequuntur dolorum?`,
    },
];

export const profile = {
    'name': 'Akshay M V',
    'email': 'akshayvelse75@gmail.com',
    'mobile': '+91 9074706319',
    'role': 'UI UX Designer',
    'linkedin': 'https://www.linkedin.com/in/akshay-m-v/',
    'behance': 'http://www.behance.net/akshay_mv',
    'instagram': 'https://www.instagram.com/penskape/',
    'location': 'Kochi, Kerala, India',
}

export const education = [
    {
        'name': 'Google UX Design Profesional Certificate',
        'shortname': 'Google',
        'location': 'Coursera',
        'start': '2020',
        'end': 'Ongoing',
        'description': 'Foundational UX concepts, like user-centered design, accessibility, and equity-focused design',
        'url': 'http://www.ihrd.ac.in/index.php/institutions/technical-higher-secondary-school/216-technical-higher-secondary-school-kallor',
    }, {
        'name': 'Federal Institute of Science And Technology',
        'shortname': 'FISAT',
        'location': 'Angamaly',
        'start': '2019',
        'end': '2023',
        'description': 'B.Tech in Civil Engineering',
        'url': 'https://www.fisat.ac.in/',
    }, {
        'name': 'Model Technical Higher Secondary School',
        'shortname': 'MTHSS',
        'location': 'Kaloor',
        'start': '2017',
        'end': '2019',
        'description': 'High School with major in Computer Science',
        'url': 'https://www.coursera.org/professional-certificates/google-ux-design?action=enroll',
    },
]

export const experiences = [
    {
        'name': 'Freelance Graphic Designing',
        'location': 'Online & Offline',
        'role': 'Designer',
        'type': 'Freelance',
        'start': '4/20',
        'end': 'present',
        'description': ['Designed various vector and digital illustrations for friends and public customers.'],
        //'url': 'https://verzeo.com/',
    }
]

export const services = [{
    src: "/images/icon-design.svg",
    alt: "design icon",
    title: "Web design",
    desc: 'The most modern and high-quality design made at a professional level.'
}, {
    src: "/images/icon-dev.svg",
    alt: "Web development icon",
    title: 'Software Design',
    desc: 'Software designs at the professional level in Windows and Mac platforms.'
}, {
    src: "/images/icon-photo.svg",
    alt: "camera icon",
    title: 'Graphic Design',
    desc: 'Professional graphic designs and quality digital illustrations.'
}, {
    src: "/images/icon-app.svg",
    alt: "mobile app icon",
    title: 'Mobile Application Design',
    desc: 'Design of User-centered applications for iOS and Android.'
}]

export const projects = [
    {
        'company': 'Meilisearch',
        'title': 'Paris based Open Source Search Engine Startup',
        'location': 'Paris, Ile-de-France, France',
        'role': 'Open Source Contributor',
        'type': ['Open Source', 'Backend'],
        'start': '10/21',
        'end': '11/21',
        'language': ['Go'],
        'description': 'Added functionality to return search results based on index for the Golang backend',
        'url': 'https://www.meilisearch.com/',
    },
    {
        'company': 'FISAT',
        'title': 'KEAM college predictor',
        'location': 'Mookkannoor, Angamaly, Kerala',
        'role': 'Web Developer',
        'type': ['Open Source', 'Frontend', 'Backend', 'Full Stack'],
        'start': '08/21',
        'end': '09/21',
        'language': ['Python', 'HTML', 'CSS'],
        'framework': ['Django'],
        'description': 'Predict college based on Kerala Entrance Rank using historical metrics',
        'url': 'https://github.com/FISAT-PROJECTS/keam-project',
    },
    {
        'company': 'Co Science',
        'title': 'Telegom',
        'location': 'Kochi, Kerala',
        'role': 'Backend Developer',
        'type': ['Open Source', 'Backend'],
        'start': '05/21',
        'end': '12/21',
        'language': ['Go'],
        'framework': [],
        'description': 'Minimalistic Telegram Bot backend made with Gorilla Web toolkit',
        'url': 'https://github.com/Co-Science/tele-go-m',
    },
    {
        'company': '',
        'title': 'Maze',
        'location': 'Kochi, Kerala',
        'role': 'Freelance',
        'type': ['Open Source', 'Frontend'],
        'start': '02/21',
        'end': '03/21',
        'language': ['Java'],
        'framework': [],
        'description': 'GUI based Path finding algorithm using BFS & DFS',
        'url': 'https://github.com/Co-Science/tele-go-m',
    },
]


export const selectSkills = [
    {
        'name': 'Adobe illustrator'
    },
    {
        'name': 'Adobe XD'
    },
    {
        'name': 'Adobe Photoshop'
    },
    {
        'name': 'Adobe After Effects'
    },
    {
        'name': 'Figma'
    },
    {
        'name': 'VS Code'
    },
]

export const selectSkills2 = [
    {
        'name': 'UI/UX design'
    },
    {
        'name': 'Interaction design'
    },
    {
        'name': 'User research'
    },
    {
        'name': 'Basic HTML,CSS'
    },
    {
        'name': 'Rapid prototyping'
    },
    {
        'name': 'Usability testing'
    },
    {
        'name': 'Wireframing'
    },
    {
        'name': 'Design sprints'
    },
    {
        'name': 'Usability testing'
    },
    {
        'name': 'UX Writing'
    },
    {
        'name': 'A/B testing'
    },
    {
        'name': 'User journey mapping'
    },
    {
        'name': 'Design system design'
    },

]    