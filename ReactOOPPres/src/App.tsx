import "./App.css";
import createUiKit from "@/service/AbstractFactory/basic";
import React from 'react'
function App() {
  const [theme, setTheme] = React.useState<string>('1');

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => setTheme(e.target.value)

  const UiKit = createUiKit(theme)


  const UiButton = UiKit.createButton().render()
  const UiCheckbox = UiKit.createCheckbox().render()


  return (
    <div>
      <div>
        <select onChange={onChange} value={theme}>
          <option value="1">1 version</option>
          <option value="2">2 version</option>
        </select>
      </div>


      <UiButton onChange={() => {}} onClick={() => alert('click in App')} width="150px"/>
      <UiCheckbox onChange={() => alert('click in App')} width="150px"/>
    </div>
  );
}

export default App;
