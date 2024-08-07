import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { customElement } from 'lit/decorators.js'

export interface AboutMe {
    iconSrc: string
    label: string
    values: string[]
}

@customElement('about-me-element')
export class AboutMeElement extends LitElement {
    aboutMe: AboutMe

    constructor(aboutMe: AboutMe) {
        super()
        this.className = "w-full sm:w-1/2 xl:w-1/4"
        this.aboutMe = aboutMe
    }

    protected render() {
        return html`
            <div class="flex max-w-64 w-full mx-auto items-center">
                <img class="w-8 h-8 mr-8 fill-zinc-600" src="${this.aboutMe.iconSrc}">
                <div>
                    <div class="font-Roboto text-2xl font-bold text-zinc-600 w-fit text-left">${this.aboutMe.label}</div>
                    <div class="grid grid-cols-1 font-Roboto text-lg font-normal text-zinc-600 w-fit text-left break-words">
                    ${
                        this.aboutMe.values.map(value => html`<span>${value}</span>`)
                    }
                    </div>
                </div>
            </div>
        `
    }

    protected createRenderRoot(): HTMLElement | DocumentFragment {
        return this
    }
}