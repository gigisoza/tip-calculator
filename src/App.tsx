import { useState } from 'react';
import './App.css';

function App() {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);

  console.log(bill, people, tip);

  return (
    <div className="App">
      <div>bill: {bill}</div>
      <div>people: {people}</div>
      <div>people: {tip}</div>
      <input 
        placeholder="bill"
        type="number"
        onChange={(e) => {
          setBill(e.target.valueAsNumber)
        }}
      />
      <button
        onClick={() => {
          setTip(0.1)
        }}
      >
        10%
      </button>
      <input 
        placeholder="number of people"
        type="number"
        onChange={(e) => {
          setPeople(e.target.valueAsNumber);
        }}
      />
      <div>
        tip amount / person: {(bill * tip / people).toFixed(2)}
      </div>
      <div>
        total / person: {(bill * (1 + tip) / people).toFixed(2)}
      </div>
    </div>
  );
}

export default App;
