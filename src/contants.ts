export const PROJECT_CONFIG = {
    TITLE: "Nafeel Nazumudeen",
    SUB_TITLE: "DIGITAL MARKETING SPECIALIST"
}

export const navigation = [
    {
        title: "Bio",
        path: "#bio",
        reroute: false
    },
    {
        title: "Banners",
        path: "#banners",
        reroute: true
    },
    {
        title: "UI/UX",
        path: "#uiux",
        reroute: false
    },
    {
        title: "Video",
        path: "#video",
        reroute: false
    }
];


export const DESIGN_TOOLS = [
    {
        title: "Figma",
        skills: ["UI Design", "Collaboration", "Prototyping"],
        icon: "figma-icon",
        proficiency: "80%",
    },
    {
        title: "Adobe Photoshop",
        skills: ["Image Editing", "Graphic Design", "Photo Retouching"],
        icon: "photoshop-icon",
        proficiency: "80%",
    },
    {
        title: "Adobe Illustrator",
        skills: ["Vector Graphics", "Logo Design", "Illustration"],
        icon: "illustrator-icon",
        proficiency: "65%",
    },
    {
        title: "Canva",
        skills: ["Graphic Design", "Social Media Graphics", "Presentations"],
        icon: "canva-icon",
        proficiency: "80%",
    },
    {
        title: "Adobe After Effects",
        skills: ["Motion Graphics", "Visual Effects", "Animation"],
        icon: "aftereffects-icon",
        proficiency: "90%",
    },
];

const resume = {
    Education: [
        {
            year: "2021-2022",
            qualification: "PG Diploma In Digital Marketing",
            institution: "Intellipaat (Belhaven University)"
        },
        {
            year: "2014-2016",
            qualification: "MBA",
            institution: "Institute of Management in Kerala"
        },
        {
            year: "2011-2014",
            qualification: "B.Com",
            institution: "St. Xaviers College, Trivandrum, Kerala"
        }
    ],
    ProfessionalExperience: [
        {
            year: "2023-2024",
            position: "Digital Marketing Specialist",
            company: "Dr Ismail Healthcare Group"
        },
        {
            year: "2022-2023",
            position: "Digital Marketing Executive",
            company: "VR Digitals"
        },
        {
            year: "2021-2022",
            position: "SEO Executive",
            company: "Oracuz Info Tech"
        }
    ]
};

export const educationEvents = resume.Education.map(edu => ({
    title: edu.year,
    cardTitle: edu.qualification,
    cardSubtitle: edu.institution,
}));

export const professionalEvents = resume.ProfessionalExperience.map(exp => ({
    title: exp.year,
    cardTitle: exp.position,
    cardSubtitle: exp.company,
}));

