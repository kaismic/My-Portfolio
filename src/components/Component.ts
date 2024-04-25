export default class Component {
    public root: HTMLDivElement
    public initPromise: Promise<void>

    constructor(componentHtmlFile: string) {
        this.initPromise = this.init(componentHtmlFile)
    }

    private async init(componentHtmlFile: string) {
        const componentHtmlString = await (await fetch("./src/components/" + componentHtmlFile)).text()
        const temp = document.createElement("div")
        temp.innerHTML = componentHtmlString
        this.root = temp.querySelector("div")
    }
}