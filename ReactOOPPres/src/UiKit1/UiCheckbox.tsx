export interface Props {
    onChange: (value: string) => void
    width?: string
}

const UiCheckbox = ({onChange, width}: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        alert('Старый чекбокс сменен')
        onChange(event.target.value)
    }

    return (
        <label>
            <input type="checkbox" onChange={handleChange}/>
            <span  style={{backgroundColor: 'blue', borderRadius: '50%', width: width}}>Выбор</span>
        </label>
    )
}


export default UiCheckbox