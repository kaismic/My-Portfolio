import { ProjectCard, ProjectCardInfo } from './components/ProjectCard'

const experiences: ProjectCardInfo[] = [
    {
        title: "The Carbon-Conscious Traveller - Internship",
        subtitle: "Dec 2023 - Jan 2024",
        slides: [
            { tag: "img", src: "./images/the-carbon-conscious-traveller/Screenshot_1.png" },
            { tag: "img", src: "./images/the-carbon-conscious-traveller/Screenshot_2.png" },
            { tag: "img", src: "./images/the-carbon-conscious-traveller/Screenshot_3.png" },
            { tag: "img", src: "./images/the-carbon-conscious-traveller/Screenshot_4.png" },
            { tag: "img", src: "./images/the-carbon-conscious-traveller/Screenshot_5.png" },
            { tag: "img", src: "./images/the-carbon-conscious-traveller/Screenshot_6.png" },
            { tag: "img", src: "./images/the-carbon-conscious-traveller/Screenshot_7.png" },
            { tag: "img", src: "./images/the-carbon-conscious-traveller/Screenshot_8.png" }
        ],
        paragraphs: [
            "<b>Summer Internship Project offered by Macquarie University.</b> This project involved developing an <b>Android application that calculates and displays carbon emissions with different transport modes.</b> It was developed using <span class='text-pink-500'>Kotlin</span> and <span class='text-pink-500'>Android Studio</span>, utilising various APIs provided by <span class='text-pink-500'>Google Maps Platform</span>.",
            "My responsibilities in this project were: presenting progress in the weekly meeting, background research for other similar projects/apps and developing, testing and streamlining the app.",
            "mention learning about Fragments and Kotlin coroutine and using them, how the app could be improved by migrating to JetPack and using Navigation Component, limits of the app, etc..."
        ],
        githubLink: "https://github.com/kaismic/The-Carbon-Conscious-Traveller/",
        skills: ["Kotlin", "Android", "Android Studio", "Google Maps API"]
    },
]


const experienceContainer = document.getElementById("experience-container")
experiences.map(
    (experienceInfo) => {
        const pc = new ProjectCard(experienceInfo)
        pc.initPromise.then(() => {
            experienceContainer.appendChild(pc.root)
        })
    }
)

const projects: ProjectCardInfo[] = [
    {
        title: "Portfolio Website",
        subtitle: "Apr 2024 - Work in Progress (Solo Project)",
        slides: [
            { tag: "img", src: "./images/my-portfolio/Screenshot_1.jpeg" },
            { tag: "img", src: "./images/my-portfolio/Screenshot_2.jpeg" },
            { tag: "img", src: "./images/my-portfolio/Screenshot_3.jpeg" }
        ],
        paragraphs: [
            "<b>Portfolio website</b> (which you are currently looking at) for presenting my software development projects and works.",
            "<span class='text-pink-500'>Responsive Web Design</span> is applied throughout the whole website via <span class='text-pink-500'>Tailwind CSS</span>, making the website respond to different screen sizes to change its layout accordingly. Furthermore, this was the first time I have utilised a module bundler like <span class='text-pink-500'>Webpack</span>, and it was quite interesting how it analyses module dependencies in different JavaScript files and bundles them into a single JavaScript file."
        ],
        githubLink: "https://github.com/kaismic/My-Portfolio/",
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS", "WebPack", "npm"]
    },
    {
        title: "Hitomi Scroll Viewer",
        subtitle: "Jul 2022 - Mar 2024 (Solo Project)",
        slides: [
            { tag: "img", src: "./images/hitomi-scroll-viewer/preview_0.png" },
            { tag: "img", src: "./images/hitomi-scroll-viewer/preview_1.png" },
            { tag: "img", src: "./images/hitomi-scroll-viewer/preview_2.png" },
            { tag: "img", src: "./images/hitomi-scroll-viewer/preview_3.png" }
        ],
        paragraphs: [
            "<b>A Windows application manga viewer with additional features such as auto scrolling, searching by tags and downloading.</b> This application was developed because the original website lacked functionalities that I needed and it was inconvenient to use the already existing features in the website. Developed using <span class='text-pink-500'>C#</span>, <span class='text-pink-500'>.NET</span> and <span class='text-pink-500'>WinUI 3</span> Platform",
            "mention utilising mutex, multi threading i guess?, modularising components, etc."
        ],
        githubLink: "https://github.com/kaismic/Hitomi-Scroll-Viewer",
        skills: ["C#", ".NET", "WinUI 3", "Windows"]
    },
    {
        title: "Custom Layout Keyboard for Android",
        subtitle: "Apr 2022 - Dec 2023 (Solo Project)",
        slides: [
            {
                tag: "video",
                src: "./images/custom-layout-keyboard/screen_record_0.mp4"
            },
            {
                tag: "img",
                src: "./images/custom-layout-keyboard/screenshot_0.png"
            },
            {
                tag: "img",
                src: "./images/custom-layout-keyboard/screenshot_1.png"
            },
            {
                tag: "img",
                src: "./images/custom-layout-keyboard/screenshot_2.png"
            }
        ],
        paragraphs: [
            "<b>An Android application which allows customising keyboard layouts</b> developed using <span class='text-pink-500'>Kotlin</span> and <span class='text-pink-500'>Android Studio</span>. This application was developed because I could not find a decent keyboard application which also supports keyboard layout customisation.",
            "One of the valuable experiences that I have gained while working on this project was the experience of using features of <span class='text-pink-500'>Object Oriented Programming</span>. As an example, during development, I realised that I was writing overlapping codes repeatedly, and this was when the concept of <span class='text-pink-500'>inheritance</span> came to my mind. Using inheritance effectively reduced the amount of code I had to write and improved reusability of the code. Furthermore, I have also gained hands-on experience on Kotlin and android application lifecycle while working on this project."
        ],
        githubLink: "https://github.com/kaismic/My-Portfolio/",
        skills: ["Kotlin", "Android", "Android Studio"]
    }
]

const projectCardContainer = document.getElementById("projects-container")
projects.map(
    (projectCardInfo) => {
        const pc = new ProjectCard(projectCardInfo)
        pc.initPromise.then(() => {
            projectCardContainer.appendChild(pc.root)
        })
    }
)