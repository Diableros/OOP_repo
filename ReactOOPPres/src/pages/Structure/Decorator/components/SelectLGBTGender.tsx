import { DecoratorSelectComponent } from '../type'

const lgbt = ['Лесбиянка', 'Гей', 'Бисексуал', 'Трансгендер']

const withLGBTGender: DecoratorSelectComponent =
    Select =>
        ({ options = [], label = '' }) => {
            return <Select label={'LGBT' + label} options={[...options, ...lgbt]} />
        }

export default withLGBTGender
