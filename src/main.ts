import { AboutMe, AboutMeElement } from './about-me-item'
import { Card, CardElement } from './card-element'

const aboutMes: AboutMe[] = [
    { iconSrc: "./resources/person-fill.svg", label: "Name", values: ["Isac Kim"]},
    { iconSrc: "./resources/geo-alt-fill.svg", label: "Location", values: ["Seven Hills, NSW, Australia"]},
    { iconSrc: "./resources/envelope-fill.svg", label: "Email", values: ["isac08270@gmail.com"]},
    { iconSrc: "./resources/pencil-fill.svg", label: "Education", values: ["Macquarie University", "Bachelor of IT"]}
]

const aboutMeContainer = document.getElementById("about-me-container")
for (const aboutMe of aboutMes) {
    const aboutMeElement: AboutMeElement = new AboutMeElement(aboutMe)
    aboutMeContainer.appendChild(aboutMeElement)
}

const experiences: Card[] = [
    {
        title: "The Carbon-Conscious Traveller - Internship",
        timePeriod: "Dec 2023 - Jan 2024",
        repo: "The-Carbon-Conscious-Traveller",
        defaultBranch: "master",
        badges: [],
        paragraphs: [
            /*html*/`<b>Summer Internship Research Project offered by Macquarie University.</b> This project involved developing an <b>Android application that calculates and displays carbon emissions with different transport modes.</b> It was developed using <span class='text-pink-500'>Kotlin</span> and <span class='text-pink-500'>Android Studio</span>, utilising various <span class='text-emerald-600'>APIs</span> provided by <span class='text-pink-500'>Google Maps Platform</span>.`,
            /*html*/`My responsibilities in this project were: presenting progress in the weekly meeting, background research for other similar projects/apps and developing, testing and streamlining the app.`,
            /*html*/`Contributing to this project has made me gain extensive knowledge about <span class='text-emerald-600'>Android Fragments</span>, <span class='text-emerald-600'>Kotlin Coroutines</span>, and further broadened my understanding of Android application development.`
        ],
        links: [
            { description: "Published Paper", url: "https://dl.acm.org/doi/10.1145/3672202.3673738" },
            { description: "Github", url: "https://github.com/kaismic/The-Carbon-Conscious-Traveller/" }
        ],
        skills: ["Kotlin", "Android", "Android Studio", "Google Maps API"]
    },
]

const experienceContainer = document.getElementById("experience-container")
for (const experience of experiences) {
    const cardElement = new CardElement(experience)
    experienceContainer.appendChild(cardElement)
}

const projects: Card[] = [
    {
        title: "Portfolio Website",
        timePeriod: "Apr 2024 - Present (Solo Project)",
        repo: "My-Portfolio",
        defaultBranch: "main",
        badges: [],
        paragraphs: [
            /*html*/`<b>Portfolio website</b> (which you are currently looking at) for presenting my software development projects and works.`,
            /*html*/`<span class='text-pink-500'>Lit</span> was used as a core part of the project, which is a simple library for building fast, lightweight <span class='text-emerald-600'>Web Components</span>.`,
            /*html*/`<span class='text-emerald-600'>Responsive Web Design</span> is applied throughout the page via <span class='text-pink-500'>Tailwind CSS</span>, making the website respond to different screen sizes to change its layout accordingly. Furthermore, this was the first time I have utilised a module bundler like <span class='text-pink-500'>Webpack</span>, and it was quite interesting to see how it bundles different JavaScript files into a single file by analysing module dependencies.`
        ],
        links: [
            { description: "Github", url: "https://github.com/kaismic/My-Portfolio/" }
        ],
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS", "Lit", "WebPack", "npm"]
    },
    {
        title: "Hitomi Scroll Viewer",
        timePeriod: "Jul 2022 - Present (Solo Project)",
        repo: "Hitomi-Scroll-Viewer",
        defaultBranch: "master",
        badges: [
            {
                href: "https://github.com/kaismic/Hitomi-Scroll-Viewer/releases/latest",
                badgeUrl: "https://img.shields.io/github/release/kaismic/Hitomi-Scroll-Viewer.svg?logo=github",
                altText: "GitHub latest release"
            },
            {
                href: "https://github.com/kaismic/Hitomi-Scroll-Viewer/releases/latest",
                badgeUrl: "https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fkaismic%2FHitomi-Scroll-Viewer%2Freleases%2Flatest&query=%24.assets%5B%3F(%2Fmsixbundle%2F.test(%40.name))%5D.download_count&label=downloads%40latest&color=9BC913",
                altText: "GitHub downloads count latest release"

            },
            {
                href: "https://github.com/kaismic/Hitomi-Scroll-Viewer/releases",
                badgeUrl: "https://img.shields.io/github/downloads/kaismic/Hitomi-Scroll-Viewer/total.svg?logo=github",
                altText: "GitHub downloads count total"
            },
        ],
        paragraphs: [
            /*html*/`<b>A gallery viewer application with various features such as creating search links with combinable tag filters, auto scrolling and downloading.</b> This application was developed because the original website lacked functionalities that I required and it was inconvenient to use the already existing features in the website. Developed using <span class='text-pink-500'>C#</span>, <span class='text-pink-500'>.NET</span> and <span class='text-pink-500'>WinUI 3</span> Platform`,
            /*html*/`One of the things that I have learnt about in <i>Systems Programming</i> unit was <span class='text-emerald-600'>Mutex</span>. This concept came in very handy because it enabled the app to handle the user inputs without causing any <span class='text-emerald-600'>race conditions</span>. Moreover, two concepts which I have learnt from <i>Object-Oriented Programming Practices</i> were <span class='text-emerald-600'>Concurrency</span> and <span class='text-emerald-600'>Design Pattern</span>, which were incredibly helpful when developing this app. The former was used when implementing the image downloading function with a bit of TCP/IP knowledge I have gained from <i>Data Communications</i>. The latter was utilised for modularising different components of the app, which helped to keep the project code managable and refactorable.`,
            /*html*/`<span class='text-pink-500'>Google API</span> client library for <span class='text-pink-500'>.NET</span> was utilised to sync user data on Google Drive, which internally implements authentication and authorization using OAuth 2.0 protocol .`
        ],
        links: [
            { description: "Github", url: "https://github.com/kaismic/Hitomi-Scroll-Viewer" }
        ],
        skills: ["C#", ".NET", "WinUI 3", "Windows", "OAuth 2.0", "SQLite", "Entity Framework Core"]
    },
    {
        title: "Custom Layout Keyboard for Android",
        timePeriod: "Apr 2022 - Dec 2023 (Solo Project)",
        repo: "Custom-Layout-Keyboard-for-Android",
        defaultBranch: "master",
        badges: [],
        paragraphs: [
            /*html*/`<b>An Android application which allows customising keyboard layouts</b> developed using <span class='text-pink-500'>Kotlin</span> and <span class='text-pink-500'>Android Studio</span>. This application was developed because I could not find a decent keyboard application which also supports keyboard layout customisation.`,
            /*html*/`One of the valuable experiences that I have gained while working on this project was the experience of using features of <span class='text-emerald-600'>Object Oriented Programming</span>. As an example, during development, I realised that I was writing overlapping codes repeatedly, and this was when the concept of <span class='text-emerald-600'>inheritance</span> came to my mind. Using inheritance effectively reduced the amount of code I had to write and improved reusability of the code. Furthermore, I have also gained hands-on experience on Kotlin and android application lifecycle while working on this project.`
        ],
        links: [
            { description: "Github", url: "https://github.com/kaismic/Custom-Layout-Keyboard-for-Android" }
        ],
        skills: ["Kotlin", "Android", "Android Studio"]
    }
]

const projectCardContainer = document.getElementById("projects-container")
for (const project of projects) {
    const cardElement = new CardElement(project)
    projectCardContainer.appendChild(cardElement)
}
