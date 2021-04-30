'use strict'

class ProgressBar {
    constructor(option = {}) {
        const {
            start = 10,
            end = 100,
            bgColor = 'pink',
            height = 20,
            border = '1px solid black',
            textColor = 'black',
        } = option

        this.start = start
        this.end = end
        this.bgColor = bgColor
        this.height = height
        this.border = border
        this.textColor = textColor
    }



    init(selector) {
        const createProgressBar = document.querySelectorAll(selector)

        for (let i = 0; i < createProgressBar.length; i++) {

            createProgressBar[i].append(this.createProgressBar())

        }
    }

    createProgressBar() {
        const progressBar = document.createElement('div')
        const bar = this.createBar()
        progressBar.style.width = '100%'
        progressBar.style.border = this.border
        progressBar.append(bar)

        this.animateBar(bar)

        return progressBar
    }

    createBar() {
        const bar = document.createElement('div')
        bar.style.cssText = `
            text-align: center;
            height: ${this.height}px;
            line-height: ${this.height}px;
            background-color: ${this.bgColor};
            color: ${this.textColor};
        `

        this.stateProgressBar(bar)

        return bar
    }

    stateProgressBar(elem) {
        elem.style.width = ` ${this.start}% `
        elem.textContent = ` ${this.start}% `
    }

    animateBar(elem) {
        const animate = () => {
            if (this.start < this.end) {
                this.start++
                this.stateProgressBar(elem)
                requestAnimationFrame(animate)
            }
        }
        requestAnimationFrame(animate)
    }

}

