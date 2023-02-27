import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [bill, setBill] = useState<number | undefined>(undefined);
  const [people, setPeople] = useState<number | undefined>(undefined);
  const [tip, setTip] = useState<number | undefined>(undefined);

  const [peopleError, setPeopleError] = useState(false);


  const alright = bill !== undefined && people !== undefined && tip !== undefined;
  const tipAmount = alright && (bill * tip / people).toFixed(2);
  const totalPerPerson = alright && ((bill * (1 + tip) / people).toFixed(2));
  const showTip = !(tipAmount === 'NaN' || tipAmount === 'Infinity');
  const showTotal = !(totalPerPerson === 'NaN' || totalPerPerson === 'Infinity');

  useEffect(() => {
    if (people === 0) {
      setPeopleError(true);
    } else {
      setPeopleError(false);
    }
  }, [people])

  return (
    <div className="App">
      Bill:
      <input 
        placeholder="bill"
        type="number"
        min={0}
        value={bill}
        onChange={(e) => {
          setBill(e.target.valueAsNumber)
        }}
      />

      <div>
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
      </div>

      People:
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
      <div>{peopleError ? `Can't be zero` : null}</div>
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
