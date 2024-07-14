import EmblaCarousel, { EmblaCarouselType } from 'embla-carousel'
import Component from './Component'
import { Endpoints } from "@octokit/types"

const OWNER = "kaismic"

export interface ProjectCardInfo {
    title: string
    subtitle: string
    repo: string
    defaultBranch: string
    badges: {
        href: string
        badgeUrl: string
        altText: string
    }[]
    paragraphs: string[]
    githubLink: string
    skills: string[]
}

export class ProjectCard extends Component {
    public projectCardPromise: Promise<void>
    constructor(projectCardInfo: ProjectCardInfo) {
        super("project-card.html")
        this.projectCardPromise = this.initPromise.then(async () => {
            // init project card
            this.root.querySelector(".project-card__title").innerHTML = projectCardInfo.title
            this.root.querySelector(".project-card__subtitle").innerHTML = projectCardInfo.subtitle

            await fetch(`https://api.github.com/repos/${OWNER}/${projectCardInfo.repo}/commits/${projectCardInfo.defaultBranch}`).then(
                async response => {
                    if (!response.ok) { return Promise.reject() }
                    const json: Endpoints["GET /repos/{owner}/{repo}/commits/{ref}"]["response"]["data"] = await response.json()
                    return fetch(json.commit.tree.url + "?recursive=1")
                }
            ).then(
                async response => {
                    if (!response.ok) { return Promise.reject() }
                    const json: Endpoints["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"]["response"]["data"] = await response.json()
                    const resourcesTree = json.tree
                    const regexPat = new RegExp(/resources\/preview_(image|video)_\d/)
                    // assumes fetched files area already sorted by file name
                    const previewVideos: { src: string, tag: string }[] = []
                    const previewImages: { src: string, tag: string }[] = []
                    for (const elem of resourcesTree) {
                        const matchResult = elem.path.match(regexPat)
                        if (matchResult !== null) {
                            const previewUrl = `https://raw.githubusercontent.com/${OWNER}/${projectCardInfo.repo}/${projectCardInfo.defaultBranch}/${elem.path}`
                            switch (matchResult[1]) {
                                case "image": {
                                    previewImages.push({ src: previewUrl, tag: "img" })
                                    break
                                }
                                case "video": {
                                    previewVideos.push({ src: previewUrl, tag: "video" })
                                    break
                                }
                            }
                        }
                    }
                    // to display videos first
                    const previewResources = previewVideos.concat(previewImages)
                    const slidesContainer = this.root.querySelector(".project-card__carousel-slides-container")
                    for (const previewResource of previewResources) {
                        const slide = document.createElement(previewResource.tag)
                        slide.className = "flex grow-0 shrink-0 basis-full min-w-0 object-scale-down"
                        switch (previewResource.tag) {
                            case "img": {
                                (slide as HTMLImageElement).src = previewResource.src;
                                break;
                            }
                            case "video": {
                                (slide as HTMLVideoElement).autoplay = true;
                                (slide as HTMLVideoElement).loop = true;
                                (slide as HTMLVideoElement).muted = true;
                                (slide as HTMLVideoElement).src = previewResource.src;
                                break;
                            }
                        }
                        slidesContainer.appendChild(slide)
                    }
                }
            ).catch(() => {})

            const badgeContainer = this.root.querySelector(".project-card__badges-container")
            if (projectCardInfo.badges.length > 0) {
                badgeContainer.classList.add("mb-4")
            }
            for (const badge of projectCardInfo.badges) {
                const link = document.createElement("a")
                link.href = badge.href
                const img = document.createElement("img")
                img.src = badge.badgeUrl
                img.alt = badge.altText
                link.appendChild(img)
                badgeContainer.appendChild(link)
            }

            const mainDesc = this.root.querySelector(".project-card__main-desc")
            const paragraphs = projectCardInfo.paragraphs
                .map(
                    paragraphHTML =>
                    {
                        const paragraph = document.createElement("p")
                        paragraph.innerHTML = paragraphHTML
                        return paragraph
                    }
                )
                .flatMap(elem => [elem, document.createElement("br")])
                .slice(0, -1)
            for (const elem of paragraphs) {
                mainDesc.appendChild(elem)
            }

            const githubLink: HTMLAnchorElement = this.root.querySelector(".project-card__details__github-link")
            githubLink.href = projectCardInfo.githubLink

            const skillsContainer = this.root.querySelector(".project-card__details__skills-container")
            for (const skillText of projectCardInfo.skills) {
                const skillSpanWrapper = document.createElement("div")
                skillSpanWrapper.className = "border h-fit py-1 px-3 border-neutral-400 rounded-3xl"
                const skillSpan = document.createElement("span")
                skillSpan.className = "max-w-full"
                skillSpan.innerHTML = skillText
                skillSpanWrapper.appendChild(skillSpan)
                skillsContainer.appendChild(skillSpanWrapper)
            }

            const carouselRoot: HTMLDivElement = this.root.querySelector(".project-card__carousel-root")
            const emblaCarouselApi = EmblaCarousel(carouselRoot, { loop: false, duration: 25 })
            const prevBtn: HTMLButtonElement = this.root.querySelector('.project-card__carousel-prev-btn')
            prevBtn.addEventListener('click', () => { emblaCarouselApi.scrollPrev() })
            const nextBtn: HTMLButtonElement = this.root.querySelector('.project-card__carousel-next-btn')
            nextBtn.addEventListener('click', () => { emblaCarouselApi.scrollNext() })
            emblaCarouselApi.on('select', this.setCarouselPageNum)
            emblaCarouselApi.on('select', this.setVideoPlayState)
            this.setCarouselPageNum(emblaCarouselApi)

            // prevent skill items expanding to max width when word is wrapped due to insufficient grid column width
            // need to observe projectDetailsContainer width change indirectly through carouselRoot because projectDetailsContainer
            // changes its height when skill item heights are changed but carouselRoot does not, so it doesn't cause infinite
            // resize observer call
            const carouselResizeObs = new ResizeObserver(
                (() => {
                    const projectDetailsContainer: HTMLDivElement = this.root.querySelector('.project-card__details-container')
                    const gridColGap = (projectDetailsContainer.computedStyleMap().get('column-gap') as CSSUnitValue).value
                    const skillsLabelWidth = (this.root.querySelector('.project-card__details__skills-label') as HTMLSpanElement).offsetWidth
                    const expectedSkillsItemContainerWidth = projectDetailsContainer.offsetWidth - skillsLabelWidth - gridColGap
                    const skillsContainer = this.root.querySelector('.project-card__details__skills-container')
                    for (const skillSpanWrapper of Array.from(skillsContainer.children) as HTMLDivElement[]) {
                        const skillSpan = skillSpanWrapper.firstElementChild as HTMLSpanElement
                        skillSpan.style.textWrap = "nowrap"
                        const wrapperStyleMap = skillSpanWrapper.computedStyleMap()
                        const wrapperWidth = skillSpanWrapper.offsetWidth
                        // if the text single line width (including padding) is less than container width, keep text-wrap nowrap and remove width property in case it was assigned before
                        if (wrapperWidth <= expectedSkillsItemContainerWidth) {
                            skillSpanWrapper.style.removeProperty("width")
                        }
                        // the text full width (single line width) is bigger than container width, so wrap the text (by removing previous nowrap text-wrap property) and calculate parent div width to fit the wrapped text max width
                        else {
                            skillSpan.style.removeProperty("text-wrap")
                            skillSpanWrapper.style.width = (skillSpan.offsetWidth + (wrapperStyleMap.get('padding-left') as CSSUnitValue).value + (wrapperStyleMap.get('padding-right') as CSSUnitValue).value + 2 * (wrapperStyleMap.get('border-left-width') as CSSUnitValue).value) + 'px'
                        }
                    }
                }).bind(this)
            )
            carouselResizeObs.observe(this.root.querySelector(".project-card__carousel-root"))
        })
    }

    private setCarouselPageNum(emblaCarouselApi: EmblaCarouselType) {
        const pageNumDiv: HTMLSpanElement = emblaCarouselApi.rootNode().querySelector('.project-card__carousel-page-display')
        const slideLength = emblaCarouselApi.slideNodes().length
        if (slideLength === 0) {
            pageNumDiv.innerText = "-"
        } else {
            pageNumDiv.innerText = (emblaCarouselApi.selectedScrollSnap() + 1) + "/" + slideLength.toString()
        }
    }

    private setVideoPlayState(emblaCarouselApi: EmblaCarouselType) {
        const selectedSlideIdx = emblaCarouselApi.selectedScrollSnap()
        const slideNodes = emblaCarouselApi.slideNodes();
        for (let i = 0; i < slideNodes.length; i++) {
            if (slideNodes[i] instanceof HTMLVideoElement) {
                const videoElem = slideNodes[i] as HTMLVideoElement
                if (selectedSlideIdx === i) {
                    videoElem.play()
                } else {
                    videoElem.pause()
                }
            }
        }
    }
}