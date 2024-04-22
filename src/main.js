import EmblaCarousel from 'embla-carousel'

function setCarouselPageNum(api) {
    /**
     * @type HTMLDivElement
    */
    const pageNumDiv = api.rootNode().querySelector('.embla__page')
    pageNumDiv.innerText = (api.selectedScrollSnap() + 1) + "/" + api.slideNodes().length
}

const emblaOptions = { loop: false, duration: 20 }
Array.from(document.getElementsByClassName('embla__carousel')).map(
    (node, idx, arr) => {
        const api = EmblaCarousel(node, emblaOptions)
        const prevBtn = node.querySelector('.embla__prev')
        prevBtn.addEventListener('click', api.scrollPrev)
        const nextBtn = node.querySelector('.embla__next')
        nextBtn.addEventListener('click', api.scrollNext)
        setCarouselPageNum(api)
        api.on('select', setCarouselPageNum)
        return api
    }
)

Array.from(document.getElementsByClassName('project__card')).map(
    (projectCard, idx, arr) => {
        // need to observe project__desc-grid indirectly through embla__carousel because it changes width when screen width is changed but does not change height when skills items heights are changed so it doesn't cause infinite resize observer call
        const carousel = projectCard.querySelector('.embla__carousel')
        const carouselResizeObs = new ResizeObserver(
            function (entries, observer) {
                const descGridNode = projectCard.querySelector('.project__desc-grid')
                if (descGridNode.isCalculatingWidth) {
                    console.log("returned from resize observer")
                    return
                }
                descGridNode.isCalculatingWidth = true
                const descGridNodeWidth = descGridNode.offsetWidth
                const skillsTextWidth = descGridNode.children[2].offsetWidth
                const columnGap = descGridNode.computedStyleMap().get('column-gap')['value']
                const skillsContainerWidth = descGridNodeWidth - skillsTextWidth - columnGap
                Array.from(descGridNode.getElementsByClassName('project__skills-item')).map(
                    /**
                     * 
                     * @param {HTMLElement} spanTextNode 
                     * @param {number} idx 
                     * @param {Array<HTMLElement>} arr 
                     */
                    (spanTextNode, idx, arr) => {
                        /**
                         * @type {HTMLDivElement}
                         */
                        spanTextNode.style.textWrap = "nowrap"
                        const pn = spanTextNode.parentNode
                        const pnStyleMap = pn.computedStyleMap()
                        // if the text single line width (including padding) is less than container width, keep text-wrap nowrap and remove width property in case it was assigned before
                        const pnWidth = pn.offsetWidth
                        console.log("pnWidth =",pnWidth)
                        if (pnWidth <= skillsContainerWidth) {
                            pn.style.removeProperty("width")
                        }
                        // the text full width (single line width) is bigger than container width, so wrap the text (by removing previous nowrap text-wrap property) and calculate parent div width to fit the wrapped text max width
                        else {
                            spanTextNode.style.removeProperty("text-wrap")
                            pn.style.width = (spanTextNode.offsetWidth + pnStyleMap.get('padding-left')['value'] + pnStyleMap.get('padding-right')['value'] + 2 * pnStyleMap.get('border-left-width')['value']) + 'px'
                        }
                    }
                )
                descGridNode.isCalculatingWidth = false
            }
        )
        carouselResizeObs.observe(carousel)
    }
)