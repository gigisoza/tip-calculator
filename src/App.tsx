import { useState } from 'react';
import './App.css';

function App() {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);

  const tipAmount = (bill * tip / people).toFixed(2);
  const totalPerPerson = ((bill * (1 + tip) / people).toFixed(2));
  const showTip = !(tipAmount === 'NaN' || tipAmount === 'Infinity');
  const showTotal = !(totalPerPerson === 'NaN' || totalPerPerson === 'Infinity');

  return (
    <div className="App">
      <input 
        placeholder="bill"
        type="number"
        value={bill}
        onChange={(e) => {
          setBill(e.target.valueAsNumber)
        }}
      />

      <button
        onClick={() => {
          setTip(0.05)
        }}
      >
        5%
      </button>

      <button
        onClick={() => {
          setTip(0.1)
        }}
      >
        10%
      </button>

      <button
        onClick={() => {
          setTip(0.15)
        }}
      >
        15%
      </button>

      <button
        onClick={() => {
          setTip(0.25)
        }}
      >
        25%
      </button>

      <button
        onClick={() => {
          setTip(0.5)
        }}
      >
        50%
      </button>

      <input 
        placeholder="number of people"
        type="number"
        value={people}
        onKeyDown={(e) => {
          if (e.key === '.'){
            e.preventDefault();
          }
        }}
        onChange={(e) => {
          console.log(e.target.value);
          setPeople(e.target.valueAsNumber);
        }}
      />
      <div>
        tip amount / person: 
        {showTip ? tipAmount : "0.00"}
      </div>
      <div>
        total / person: 
        {showTotal ? totalPerPerson : "0.00"}
      </div>
    </div>
  );
}

export default App;
