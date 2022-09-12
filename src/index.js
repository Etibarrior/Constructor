import {model} from './model'
import {templates} from './templates'
import './styles/main.css'

const $site = document.querySelector('#site')

model.forEach(block => {

    const toHTML = templates[block.type]
    if (toHTML) {
        // метод insertAdjacentHTML позволяет вставлять в определенноке место HTML 1е - куда, 2е - сам текст
        $site.insertAdjacentHTML('beforeend', toHTML(block))
    }
})

