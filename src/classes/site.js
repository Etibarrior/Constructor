export class Site {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    render (model) {
        this.$el.innerHTML = ''
        model.forEach(block => {
            // метод insertAdjacentHTML позволяет вставлять в определенноке место HTML 1е - куда, 2е - сам текст
            this.$el.insertAdjacentHTML('beforeend', block.toHTML())
        })
    }
}