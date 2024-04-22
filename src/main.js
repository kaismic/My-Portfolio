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