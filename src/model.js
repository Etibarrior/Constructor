import image from './assets/image.jpg'

const text = `Инстаграм: <a href="https://www.instagram.com/wood_loft_idea/" target="_blank">wood_loft_idea</a>`

export const model = [
    {
        type: 'title', value: 'Конструктор-портфолио', options: {
            tag: 'h2',
            styles: {
                background: 'linear-gradient(to bottom, #bd8a2d, #561106)',
                color: '#d2eeff',
                'text-align': 'center',
                padding: '0.7rem'
            }
        }
    },
    {
        type: 'text', value: text, options: {
            styles: {
                background: 'linear-gradient(to top, #bd8a2d, #561106)',
                color: '#d2eeff',
                padding: '0.3rem',
                'font-weight': 'bold',
                height: '35px'
            }
        }
    },
    {
        type: 'columns', value: [
            'Изготавление столов из дерева и эпоксидной смолы',
            'Изготовление зеркал с подсветкой',
            'Изготовление на заказ любых изделийиз дерева'
        ], options: {
            styles: {
                background: 'linear-gradient(to bottom, #b58a3b, #e4c79f)',
                color: '#603407',
                'font-weight': 'bold',
                padding: '2rem',
                'margin-top': '1px'
            }
        }
    },
    {
        type: 'image', value: image, options: {
            styles: {
                padding: '2px 0',
                display: 'flex',
                'justify-content': 'center'
            },
            imageStyles: {
                width: '750px',
                height: 'auto'
            },
            alt: 'Стол на фоне заката'

        }
    }
]