import { DecoratorSelectComponent } from '../type'

const withGender: DecoratorSelectComponent =
    Select => ({ options = [], label = '' }) => {
        return (
            <Select
                label={'Выберите гендер ' + label}
                options={['Мужчина', 'Женщина', ...options]}
            />
        )
    }

    export default withGender
