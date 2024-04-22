customElements.define("about-me-item",
    class extends HTMLDivElement {
        constructor() {
            super()
        }

        connectedCallback() {
            this.className = 'w-full sm:w-1/2 lg:w-1/3 my-8'

            let container = document.createElement('div')
            container.className = 'flex max-w-64 w-full mx-auto items-center'

            let icon = document.createElement('img')
            icon.className = 'w-8 h-8 mr-8 fill-zinc-600'
            icon.src = this.getAttribute('icon-src')
            container.appendChild(icon)

            let fieldWrapper = document.createElement('div')

            let label = document.createElement('div')
            label.className = 'font-Roboto text-2xl font-bold text-zinc-600 w-fit text-left'
            label.innerHTML = this.getAttribute('label')
            fieldWrapper.appendChild(label)

            let value = document.createElement('div')
            value.className = 'font-Roboto text-lg font-normal text-zinc-600 w-fit text-left'
            value.innerHTML = this.getAttribute('value')
            fieldWrapper.appendChild(value)

            container.appendChild(fieldWrapper)

            this.appendChild(container)
        }
    },
    {extends: 'div'}
)