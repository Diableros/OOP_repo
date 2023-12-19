import CompositeComponent from './CompositeComponent'
import InputComponent from './InputComponent'
import RadioComponent from './RadioComponent'
import TextComponent from './TextComponent'
import CheckboxComponent from '../models/CheckboxComponent'

const mock = new CompositeComponent()

mock.add(new TextComponent('Анкета пользователя'))

// mock.add(new TextComponent('test', 'VK'))

const personalComposite = new CompositeComponent(true, 'Личная информация')

personalComposite.add(
  new InputComponent('введите имя', 'name', 'Введите ваше имя')
)
personalComposite.add(
  new RadioComponent('gender', ['Женский', 'Мужской', 'Unknown'], 'Ваш пол')
)

mock.add(personalComposite)

const socialComposite = new CompositeComponent(true, 'Соцсети')

socialComposite.add(new TextComponent('Какими соцсетями пользуетесь?'))
socialComposite.add(new CheckboxComponent('Instagram'))
const inst = new CompositeComponent(true, 'Instagram', 'Instagram')
inst.add(
  new RadioComponent(
    'instagram-i',
    ['Один раз в год', 'Один раз в месяц', 'Один раз в неделю', 'Ежедневно'],
    'Как часто вы пользуетесь Instagram?'
  )
)
socialComposite.add(inst)
socialComposite.add(new CheckboxComponent('VK'))
const vk = new CompositeComponent(true, 'vk', 'VK')
vk.add(
  new RadioComponent(
    'vk-i',
    ['Один раз в год', 'Один раз в месяц', 'Один раз в неделю', 'Ежедневно'],
    'Как часто вы пользуетесь Instagram?'
  )
)
socialComposite.add(vk)
socialComposite.add(new CheckboxComponent('Telegram'))
const telegram = new CompositeComponent(true, 'Telegram', 'Telegram')
telegram.add(
  new RadioComponent(
    'telegram-i',
    ['Один раз в год', 'Один раз в месяц', 'Один раз в неделю', 'Ежедневно'],
    'Как часто вы пользуетесь Instagram?'
  )
)
socialComposite.add(telegram)
socialComposite.add(new CheckboxComponent('LinkedIn'))
const linkedIn = new CompositeComponent(true, 'LinkedIn', 'LinkedIn')
linkedIn.add(
  new RadioComponent(
    'linkedIn-i',
    ['Один раз в год', 'Один раз в месяц', 'Один раз в неделю', 'Ежедневно'],
    'Как часто вы пользуетесь Instagram?'
  )
)
socialComposite.add(linkedIn)

mock.add(socialComposite)
mock.add(
  new CheckboxComponent('Подтверждаю согласие на предоставление учетных данных')
)

export default mock
