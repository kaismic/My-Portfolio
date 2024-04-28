import EmblaCarousel, { EmblaCarouselType } from 'embla-carousel'
import Component from './Component'

export interface ProjectCardInfo {
    title: string
    subtitle: string
    slides: {
        tag: string
        src: string
    }[]
    paragraphs: string[]
    githubLink: string
    skills: string[]
}

export class ProjectCard extends Component {
    constructor(projectCardInfo: ProjectCardInfo) {
        super("project-card.html")
        this.initPromise.then(() => {
            // init project card
            this.root.querySelector(".project-card__title").innerHTML = projectCardInfo.title
            this.root.querySelector(".project-card__subtitle").innerHTML = projectCardInfo.subtitle
            const slidesContainer = this.root.querySelector(".project-card__carousel-slides-container")
            projectCardInfo.slides.map(
                (slideInfo) => {
                    const slide = document.createElement(slideInfo.tag)
                    slide.className = "flex grow-0 shrink-0 basis-full min-w-0 object-scale-down"
                    switch (slideInfo.tag) {
                        case "img": {
                            (slide as HTMLImageElement).src = slideInfo.src
                            break
                        }
                        case "video": {
                            (slide as HTMLVideoElement).autoplay = true;
                            (slide as HTMLVideoElement).loop = true;
                            (slide as HTMLVideoElement).muted = true;
                            const source = document.createElement("source")
                            source.src = slideInfo.src
                            source.type = "video/" + slideInfo.src.split(".").at(-1)
                            slide.appendChild(source)
                            break
                        }
                    }
                    slidesContainer.appendChild(slide)
                }
            )

            const mainDesc = this.root.querySelector(".project-card__main-desc")
            mainDesc.innerHTML = projectCardInfo.paragraphs.map(
                (paragraph) => {
                    return "<p>" + paragraph + "</p>"
                }
            ).join("<br>")
            const githubLink: HTMLAnchorElement = this.root.querySelector(".project-card__details__github-link")
            githubLink.href = projectCardInfo.githubLink

            const skillsContainer = this.root.querySelector(".project-card__details__skills-container")
            projectCardInfo.skills.map(
                (skillText) => {
                    const skillSpanWrapper = document.createElement("div")
                    skillSpanWrapper.className = "border h-fit py-1 px-3 border-neutral-400 rounded-3xl"
                    const skillSpan = document.createElement("span")
                    skillSpan.className = "max-w-full"
                    skillSpan.innerHTML = skillText
                    skillSpanWrapper.appendChild(skillSpan)
                    skillsContainer.appendChild(skillSpanWrapper)
                }
            )

            const carouselRoot: HTMLDivElement = this.root.querySelector(".project-card__carousel-root")
            // idk why but gotta delay this embla carousel initialisation to prevent it from throwing errors
            setTimeout(() => {
                // init embla carousel
                const carouselOptions = { loop: false, duration: 25 }
                const emblaCarouselApi = EmblaCarousel(carouselRoot, carouselOptions)
                const prevBtn: HTMLButtonElement = this.root.querySelector('.project-card__carousel-prev-btn')
                prevBtn.addEventListener('click', () => { emblaCarouselApi.scrollPrev() })
                const nextBtn: HTMLButtonElement = this.root.querySelector('.project-card__carousel-next-btn')
                nextBtn.addEventListener('click', () => { emblaCarouselApi.scrollNext() })
                emblaCarouselApi.on('select', this.setCarouselPageNum)
                emblaCarouselApi.on('select', this.setVideoPlayState)
                this.setCarouselPageNum(emblaCarouselApi) // init page number display
            }, 200);
 
            // prevent skill items expanding to max width when word is wrapped due to insufficient grid column width
            // need to observe projectDetailsContainer width change indirectly through carouselRoot because projectDetailsContainer changes its height when skill item heights are changed but carouselRoot does not, so it doesn't cause infinite resize observer call
            const carouselResizeObs = new ResizeObserver(
                (() => {
                    const projectDetailsContainer: HTMLDivElement = this.root.querySelector('.project-card__details-container')
                    const gridColGap = (projectDetailsContainer.computedStyleMap().get('column-gap') as CSSUnitValue).value
                    const skillsLabelWidth = (this.root.querySelector('.project-card__details__skills-label') as HTMLSpanElement).offsetWidth
                    const expectedSkillsItemContainerWidth = projectDetailsContainer.offsetWidth - skillsLabelWidth - gridColGap
                    const skillsContainer = this.root.querySelector('.project-card__details__skills-container')
                    Array.from(skillsContainer.children).map(
                        (skillSpanWrapper: HTMLDivElement) => {
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
                    )
                }).bind(this)
            )
            carouselResizeObs.observe(carouselRoot)
        })
    }

    private setCarouselPageNum(emblaCarouselApi: EmblaCarouselType) {
        const pageNumDiv: HTMLSpanElement = emblaCarouselApi.rootNode().querySelector('.project-card__carousel-page-display')
        pageNumDiv.innerText = (emblaCarouselApi.selectedScrollSnap() + 1) + "/" + emblaCarouselApi.slideNodes().length
    }

    private setVideoPlayState(emblaCarouselApi: EmblaCarouselType) {
        const selectedSlideIdx = emblaCarouselApi.selectedScrollSnap()
        emblaCarouselApi.slideNodes().map(
            (node, idx, arr) => {
                if (node instanceof HTMLVideoElement) {
                    if (selectedSlideIdx === idx) {
                        (node as HTMLVideoElement).play()
                    } else {
                        (node as HTMLVideoElement).pause()
                    }
                }
            }
        )
    }
}