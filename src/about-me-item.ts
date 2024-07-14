customElements.define("about-me-item",
    class extends HTMLDivElement {
        constructor() {
            super()
        }

        connectedCallback() {
            this.className = 'w-full sm:w-1/2 lg:w-1/3'

            const container = document.createElement('div')
            container.className = 'flex max-w-64 w-full mx-auto items-center'

            const icon = document.createElement('img')
            icon.className = 'w-8 h-8 mr-8 fill-zinc-600'
            icon.src = this.getAttribute('icon-src')
            container.appendChild(icon)

            const fieldsContainer = document.createElement('div')

            const label = document.createElement('div')
            label.className = 'font-Roboto text-2xl font-bold text-zinc-600 w-fit text-left'
            label.innerHTML = this.getAttribute('label')
            fieldsContainer.appendChild(label)

            const value = document.createElement('div')
            value.className = 'font-Roboto text-lg font-normal text-zinc-600 w-fit text-left'
            value.innerHTML = this.getAttribute('value')
            fieldsContainer.appendChild(value)

            container.appendChild(fieldsContainer)

            this.appendChild(container)
        }
    },
    {extends: 'div'}
)