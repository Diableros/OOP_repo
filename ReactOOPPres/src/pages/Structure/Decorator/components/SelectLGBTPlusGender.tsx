import { DecoratorSelectComponent } from '../type'

const lgbtPlus = [
    'Трансмужчина',
    'Трансженщина',
    'Небинарный',
    'Гендерквир',
    'Демибой (демимужской)',
    'Демигерл (демиженский)',
    'Трансмаскулинный',
    'Трансфемининный',
    'Агендер (безгендерный)',
    'Бигендер',
    'Гендерфлюид (гендер-течение)',
    'Тву-спирит',
    'Андоргин',
    'Нонконформный (гендерно-неконформный)'
]

const withLGBTPlusGender: DecoratorSelectComponent =
    Select =>
        ({ options = [], label = '' }) => {
            return <Select label={'+' + label} options={[...options, ...lgbtPlus]} />
        }

export default withLGBTPlusGender
