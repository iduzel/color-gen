import { useState } from "react";
import "./App.scss";
import ColorComponent from "./ColorComponent";
import { getRandomColor } from "./helper.js";

function App() {
  const [store, setStore] = useState([]);
  const [number, setNumber] = useState(1);

  function btnClick() {
    
    let color = getRandomColor();
    setStore(store.concat([color]));
  }

  function deleteItem(key) {
    let temp = [...store];
    if (key !== -1) {
      temp.splice(key, 1);
      setStore(temp);
    }
  }

  return (
    <div className="App">
      <header>
        <input onChange={(e) => setNumber(e.target.value)} type="number" />
        <button onClick={btnClick}>Click</button>
      </header>
      <h2>{number}</h2>
      <h1>Random color Generator</h1>

      <section className="container">
        {store.map((icolor, index) => (
          <ColorComponent
            key={index}
            color={icolor}
            delete={(e) => deleteItem(index)}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
