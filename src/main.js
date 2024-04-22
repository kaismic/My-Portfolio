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

let count = 0

Array.from(document.getElementsByClassName('project__desc-grid')).map(
    (descGridNode, idx, arr) => {
        const skillsItemResizeObserver = new ResizeObserver(
            function (entries, observer) {
                const skillsContainerWidth = descGridNode.querySelector('.project__skills-container').offsetWidth
                Array.from(descGridNode.getElementsByClassName('project__skills-item')).map(
                    /**
                     * 
                     * @param {HTMLElement} spanTextNode 
                     * @param {number} idx 
                     * @param {Array<HTMLElement>} arr 
                     */
                    (spanTextNode, idx, arr) => {
                        spanTextNode.style.textWrap = "nowrap"
                        /**
                         * @type {HTMLDivElement}
                         */
                        const pn = spanTextNode.parentNode
                        const pnStyleMap = pn.computedStyleMap()
                        // if the text full width is less than container width, keep text-wrap nowrap and remove width property in case it was assigned before
                        if (spanTextNode.offsetWidth <= skillsContainerWidth) {
                            pn.style.removeProperty("width")
                        }
                        // the text full width (single line width) is bigger than container width, so wrap the text (by removing previous nowrap text-wrap property) and calculate parent div width to fit the wrapped text max width
                        else {
                            spanTextNode.style.removeProperty("text-wrap")
                            pn.style.width = (spanTextNode.offsetWidth + pnStyleMap.get('padding-left')['value'] + pnStyleMap.get('padding-right')['value']) + 'px'
                        }
                    }
                )
            }
        )
        skillsItemResizeObserver.observe(descGridNode)
    }
)