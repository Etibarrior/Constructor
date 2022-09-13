import image from './assets/image.jpg'
import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

const text = `Инстаграм: <a href="https://www.instagram.com/wood_loft_idea/" target="_blank">wood_loft_idea</a>`

export const model = [
    new TitleBlock( 'Конструктор-портфолио', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to bottom, #bd8a2d, #561106)',
            color: '#d2eeff',
            'text-align': 'center',
            padding: '0.7rem'
        }
    }),
    new TextBlock( text, {
        styles: {
            background: 'linear-gradient(to top, #bd8a2d, #561106)',
            color: '#d2eeff',
            padding: '0.3rem',
            'font-weight': 'bold',
            height: '35px'
        }
    }),
    new ColumnsBlock( [
        'Изготавление столов из дерева и эпоксидной смолы',
        'Изготовление зеркал с подсветкой',
        'Изготовление на заказ любых изделий из дерева'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #b58a3b, #e4c79f)',
            color: '#603407',
            'font-weight': 'bold',
            padding: '2rem',
            'margin-top': '1px'
        }
    }),
    new ImageBlock( image, {
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
    })
]