import { ProjectCard, ProjectCardInfo } from './components/ProjectCard'

const projectCardInfos: ProjectCardInfo[] = [
    {
        title: "Portfolio Website",
        subtitle: "Apr 2022 - Work in Progress (Solo Project)",
        slides: [
            {
                tag: "img",
                src: "./images/person-fill.svg"
            },
            {
                tag: "img",
                src: "./images/person-fill.svg"
            },
            {
                tag: "img",
                src: "./images/person-fill.svg"
            }
        ],
        paragraphs: [
            "<b>Portfolio website</b> (which you are currently looking at) for presenting my software development projects and works.",
            "<span class='text-pink-500'>Responsive Web Design</span> is applied throughout the whole website via <span class='text-pink-500'>Tailwind CSS</span>, making the website respond to different screen sizes to change its layout accordingly. Furthermore, this was the first time I have utilised a module bundler like <span class='text-pink-500'>Webpack</span>, and it was quite interesting how it analyses module dependencies in different JavaScript files and bundles them into a single JavaScript file."
        ],
        githubLink: "https://github.com/kaismic/My-Portfolio/",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "Tailwind CSS",
            "WebPack",
            "npm"
        ]
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
    },
    {
        title: "Hitomi Scroll Viewer",
        subtitle: "Jul 2022 - Mar 2024 (Solo Project)",
        slides: [
            {
                tag: "img",
                src: "./images/hitomi-scroll-viewer/preview_0.png"
            },
            {
                tag: "img",
                src: "./images/hitomi-scroll-viewer/preview_1.png"
            },
            {
                tag: "img",
                src: "./images/hitomi-scroll-viewer/preview_2.png"
            },
            {
                tag: "img",
                src: "./images/hitomi-scroll-viewer/preview_3.png"
            }
        ],
        paragraphs: [
            "<b>A Windows application manga viewer with additional features such as auto scrolling, searching by tags and downloading.</b> This application was developed because the original website lacked functionalities that I needed and it was inconvenient to use the already existing features in the website. Developed using <span class='text-pink-500'>C#</span>, <span class='text-pink-500'>.NET</span> and <span class='text-pink-500'>WinUI 3</span> Platform",
            "mention utilising mutex, multi threading i guess?, modularising components, etc."
        ],
        githubLink: "https://github.com/kaismic/Hitomi-Scroll-Viewer",
        skills: ["C#", ".NET", "WinUI 3", "Windows"]
    }
]

const projectCardContainer = document.getElementById("project-card-container")
projectCardInfos.map(
    (projectCardInfo) => {
        const pc = new ProjectCard(projectCardInfo)
        pc.initPromise.then(() => {
            projectCardContainer.appendChild(pc.root)
        })
    }
)