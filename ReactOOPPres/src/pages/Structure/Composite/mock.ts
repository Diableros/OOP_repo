import { CompositeComponent } from './type.ts'

export const mock: CompositeComponent = {
  isComposite: true,
  dropdown: false,
  childrenComponents: [
    {
      isComposite: false,
      content: {
        type: 'text',
        text: 'Анкета пользователя'
      }
    },
    // {
    //   isComposite: false,
    //   isHidden: 'VK',
    //   content: {
    //     type: 'text',
    //     text: 'TEST TEXT'
    //   }
    // },
    {
      isComposite: true,
      dropdown: true,
      titleDropdown: 'Личная информация',
      childrenComponents: [
        {
          isComposite: false,
          content: {
            type: 'input',
            title: 'Введите ваше имя',
            placeholder: 'введите имя',
            name: 'name'
          }
        },
        {
          isComposite: false,
          content: {
            type: 'radio',
            title: 'Ваш пол',
            name: 'gender',
            options: ['Женский', 'Мужской', 'Unknown']
          }
        }
      ]
    },
    {
      isComposite: true,
      dropdown: true,
      titleDropdown: 'Соцсети',
      childrenComponents: [
        {
          isComposite: false,
          content: {
            type: 'text',
            text: 'Какими соцсетями пользуетесь?'
          }
        },
        {
          isComposite: false,
          content: {
            type: 'checkbox',
            name: 'Instagram'
          }
        },
        {
          isHidden: 'Instagram',
          dropdown: true,
          titleDropdown: 'Instagram',
          isComposite: true,
          childrenComponents: [
            {
              isComposite: false,
              content: {
                type: 'radio',
                name: 'instagram-i',
                title: 'Как часто вы пользуетесь Instagram?',
                options: [
                  'Один раз в год',
                  'Один раз в месяц',
                  'Один раз в неделю',
                  'Ежедневно'
                ]
              }
            }
          ]
        },
        {
          isComposite: false,
          content: {
            type: 'checkbox',
            name: 'VK'
          }
        },
        {
          isHidden: 'VK',
          dropdown: true,
          titleDropdown: 'VK',
          isComposite: true,
          childrenComponents: [
            {
              isComposite: false,
              content: {
                type: 'radio',
                name: 'vk-i',
                title: 'Как часто вы пользуетесь VK?',
                options: [
                  'Один раз в год',
                  'Один раз в месяц',
                  'Один раз в неделю',
                  'Ежедневно'
                ]
              }
            }
          ]
        },
        {
          isComposite: false,
          content: {
            type: 'checkbox',
            name: 'Telegram'
          }
        },
        {
          isHidden: 'Telegram',
          dropdown: true,
          titleDropdown: 'Telegram',
          isComposite: true,
          childrenComponents: [
            {
              isComposite: false,
              content: {
                type: 'radio',
                name: 'Telegram-i',
                title: 'Как часто вы пользуетесь Telegram?',
                options: [
                  'Один раз в год',
                  'Один раз в месяц',
                  'Один раз в неделю',
                  'Ежедневно'
                ]
              }
            }
          ]
        },
        {
          isComposite: false,
          content: {
            type: 'checkbox',
            name: 'LinkedIn'
          }
        },

        {
          isHidden: 'LinkedIn',
          dropdown: true,
          titleDropdown: 'LinkedIn',
          isComposite: true,
          childrenComponents: [
            {
              isComposite: false,
              content: {
                type: 'radio',
                name: 'LinkedIn-i',
                title: 'Как часто вы пользуетесь LinkedIn?',
                options: [
                  'Один раз в год',
                  'Один раз в месяц',
                  'Один раз в неделю',
                  'Ежедневно'
                ]
              }
            }
          ]
        }
      ]
    },
    {
      isComposite: false,
      content: {
        type: 'checkbox',
        name: 'Подтверждаю согласие на предоставление учетных данных'
      }
    }
  ]
}
