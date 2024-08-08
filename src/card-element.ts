import { LitElement, html } from 'lit-element';
import { customElement } from 'lit/decorators.js'
import EmblaCarousel, { EmblaCarouselType } from 'embla-carousel'
import { Endpoints } from "@octokit/types"
import { TemplateResult } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const OWNER = "kaismic"

export interface Card {
    title: string
    timePeriod: string
    repo: string
    defaultBranch: string
    badges: {
        href: string
        badgeUrl: string
        altText: string
    }[]
    paragraphs: string[]
    links: {
        description: string
        url: string
    }[]
    skills: string[]
}


@customElement('card-element')
export class CardElement extends LitElement {
    title: string
    timePeriod: string
    previewsTemplate: TemplateResult<1>
    badgesTemplate: TemplateResult<1>
    mainDescTemplate: TemplateResult<1>
    linksTemplate: TemplateResult<1>
    skillsTemplate: TemplateResult<1>

    constructor(card: Card) {
        super()
        this.className = "flex flex-col gap-3 md:gap-6 items-center p-8 md:p-12 bg-white rounded-3xl shadow-2xl"
        this.title = card.title
        this.timePeriod = card.timePeriod

        this.badgesTemplate = card.badges.length > 0
            ? html`
            <div class='flex flex-row gap-x-1'>
                ${
                    card.badges.map(badge => 
                        html`
                        <a href="${badge.href}" target="_blank">
                            <img src="${badge.badgeUrl}" alt="${badge.altText}"/>
                        </a>
                        `
                    )
                }
            </div>
            `
            : html``

        this.mainDescTemplate = html`
            <div class="grid grid-cols-1 gap-4">
                ${card.paragraphs.map(paragraphHTML => html`<p>${unsafeHTML(paragraphHTML)}</p>`)}
            </div>
        `

        this.linksTemplate = html`
            <div class="grid grid-cols-1 gap-2">
                ${card.links.map(link => html`<a class="text-[#258ddb] w-fit" href="${link.url}" target="_blank">${link.description}</a>`)}
            </div>
        `

        this.skillsTemplate = html`
            <div class="card__details__skills-container flex flex-row flex-wrap gap-x-2 gap-y-2">
            ${card.skills.map(
                skillText =>
                html`
                <div class="border h-fit py-1 px-3 border-neutral-400 rounded-3xl"><span class="max-w-full">${skillText}</span></div>
                `
            )}
            </div>
        `

        this.loadPreviewResources(card)
    }

    private async loadPreviewResources(card: Card) {
        await fetch(`https://api.github.com/repos/${OWNER}/${card.repo}/commits/${card.defaultBranch}`).then(
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
                        const previewUrl = `https://raw.githubusercontent.com/${OWNER}/${card.repo}/${card.defaultBranch}/${elem.path}`
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
                const previewSlides = [];
                for (const resource of previewResources) {
                    previewSlides.push(this.getSlide(resource));
                }
                this.previewsTemplate = html`
                <div class="flex max-h-[14rem] md:max-h-[30rem]">
                    ${previewResources.map(resource => this.getSlide(resource))}
                </div>
                `
                this.requestUpdate()

                setTimeout(
                    () => {
                        const carouselRoot: HTMLDivElement = this.querySelector('.card__carousel-root') as HTMLDivElement
                        const prevBtn: HTMLButtonElement = this.querySelector('.card__carousel-prev-btn') as HTMLButtonElement
                        const nextBtn: HTMLButtonElement = this.querySelector('.card__carousel-next-btn') as HTMLButtonElement
                        const emblaCarouselApi = EmblaCarousel(carouselRoot, { loop: false, duration: 25 })
                        prevBtn.addEventListener('click', () => { emblaCarouselApi.scrollPrev() })
                        nextBtn.addEventListener('click', () => { emblaCarouselApi.scrollNext() })
                        emblaCarouselApi.on('select', this.setCarouselPageNum)
                        emblaCarouselApi.on('select', this.setVideoPlayState)
                        this.setCarouselPageNum(emblaCarouselApi)
                    },
                    500
                )
            }
        ).catch(() => {})
    }

    private setCarouselPageNum(emblaCarouselApi: EmblaCarouselType) {
        const pageNumDiv: HTMLSpanElement = emblaCarouselApi.rootNode().querySelector('.card__carousel-page-num')
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

    private getSlide(resource: { src: string, tag: string }) {
        switch (resource.tag) {
            case "img": {
                return html`
                    <img class="flex grow-0 shrink-0 basis-full min-w-0 object-scale-down"
                         src="${resource.src}"/>
                `
            }
            case "video": {
                return html`
                    <video class="flex grow-0 shrink-0 basis-full min-w-0 object-scale-down"
                           autoplay loop muted
                           src="${resource.src}"/>
                `
            }
        }
    }

    protected render() {
        return html`
            <h2 class="text-neutral-800 font-BlackHanSans text-2xl md:text-3xl">${this.title}</h2>
            <span class="text-base text-[#6c757d] font-NotoSans">${this.timePeriod}</span>
            <div class="flex flex-row flex-wrap justify-center w-full">
                <div class="card__carousel-root self-center overflow-hidden w-full md:w-1/2">
                    ${this.previewsTemplate}
                    <div class="flex justify-center gap-4 w-full mt-2 md:mt-4">
                        <button class="card__carousel-prev-btn"><img src="./resources/arrow-left.svg"></button>
                        <span class="card__carousel-page-num" class="font-NotoSans"></span>
                        <button class="card__carousel-next-btn"><img src="./resources/arrow-right.svg"></button>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-y-4 font-NotoSans w-full h-fit md:w-1/2 text-left max-md:pt-4 md:pl-4">
                    ${this.badgesTemplate}
                    ${this.mainDescTemplate}
                    <hr class="w-full border-neutral-400">
                    <div class="gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-4" style="display: grid; grid-template-columns: auto 1fr;">
                        <span class="font-extrabold">Links</span>
                        ${this.linksTemplate}
                        <span class="font-extrabold">Skills</span>
                        ${this.skillsTemplate}
                    </div>
                </div>
            </div>
        `
    }

    protected createRenderRoot(): HTMLElement | DocumentFragment {
        return this
    }
}