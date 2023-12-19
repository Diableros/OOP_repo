import Select from './components/Select.tsx'
import withGender from './components/SelectGender.tsx'
import withLGBTGender from './components/SelectLGBTGender.tsx'
import withLGBTPlusGender from './components/SelectLGBTPlusGender.tsx'


const SelectGender = withGender(Select)
const SelectLBGTGender = withLGBTGender(SelectGender)
const SelectLBGTPlusGender = withLGBTPlusGender(SelectLBGTGender)
const SelectTrueLBGTGender = withLGBTPlusGender(withLGBTGender(Select))

const Decorator = () => {
  return (
    <>
      <SelectGender/>
      <SelectLBGTGender />
      <SelectLBGTPlusGender />
      <SelectTrueLBGTGender />
    </>
  )
}

export default Decorator
