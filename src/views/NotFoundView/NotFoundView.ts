import { defineComponent } from 'vue'
import { useMeta } from 'vue-meta'

export default defineComponent({
  name: 'NotFoundComponent',
  setup() {
    useMeta({
      title: 'Страница не найдена | Мастерская Код на салфетке',
      description: 'Запрошенная страница не найдена.',
      meta: [
        {
          name: 'keywords',
          content: 'мастерская, код на салфетке, стажировка, программирование, python, fastapi, aiogram, контест',
        },
        {
          itemprop: 'name',
          content: 'Страница не найдена | Мастерская Код на салфетке',
        },
        {
          itemprop: 'url',
          content: 'https://napkinworkshop.ru/404',
        },
        {
          itemprop: 'description',
          content: 'Запрошенная страница не найдена.',
        },
        {
          itemprop: 'image',
          content: 'https://napkinworkshop.ru/catLogo.svg',
        },
      ],
      og: {
        url: 'https://napkinworkshop.ru/404',
        type: 'website',
        title: 'Страница не найдена | Мастерская Код на салфетке',
        description: 'Запрошенная страница не найдена.',
        keywords: 'мастерская, код на салфетке, стажировка, программирование, python, fastapi, aiogram, контест',
        image: 'https://napkinworkshop.ru/catLogo.svg',
      },
      twitter: {
        title: 'Страница не найдена | Мастерская Код на салфетке',
        domain: 'https://napkinworkshop.ru',
        card: 'summary',
        url: 'https://napkinworkshop.ru/404',
        description: 'Запрошенная страница не найдена.',
        image: 'https://napkinworkshop.ru/catLogo.svg',
      },
    })
  },
})
