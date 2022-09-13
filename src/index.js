import {model} from './model'
import './styles/main.css'

const $site = document.querySelector('#site')

model.forEach(block => {
        // метод insertAdjacentHTML позволяет вставлять в определенноке место HTML 1е - куда, 2е - сам текст
        $site.insertAdjacentHTML('beforeend', block.toHTML())
})

