import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled, {ThemeProvider} from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import { Input } from './components/Input';
import { defaultTheme } from './themes/defaultTheme';
import Logo from './images/logo.svg';

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
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap" rel="stylesheet" />
      </Helmet>

      <Container>
        <Image src={Logo} />

      <CalculatorContainer>
        <Text>Bill</Text>
        <InputWithMargin
          iconType="bill"
          placeholder="0"
          type="number"
          min={0}
          value={bill}
          onChange={(e) => {
            if (e.target.value.length < 15){
              setBill(e.target.valueAsNumber);
            }
          }}
        />

        <Text>Select Tip %</Text>
        <ButtonContainer>
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
          <Input
            placeholder="Custom"
            type="number"
            min={0}
            value={tip && tip * 100}
            onChange={(e) => {
              if (e.target.value.length < 4){
                setTip(e.target.valueAsNumber / 100);
              }
            }}
          />
        </ButtonContainer>
        <Text>People</Text>
        <InputWithMargin
          iconType="person"
          placeholder="0"
          type="number"
          value={people}
          min={0}
          onKeyDown={(e) => {
            if (e.key === '.'){
              e.preventDefault();
            }
          }}
          onChange={(e) => {
            if (e.target.value.length < 6) {
              setPeople(e.target.valueAsNumber);
            }
          }}
        />

        <div>
          {peopleError ? `Can't be zero` : ''}
        </div>

        <div>
          tip amount / person: 
          {showTip ? tipAmount : "0.00"}
        </div>
        <div>
          total / person: 
          {showTotal ? totalPerPerson : "0.00"}
        </div>
      </CalculatorContainer>
      </Container>
    </ThemeProvider>
  );
}


const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin-bottom: 32px;
`

const Image = styled.img`
  padding: 50px 0 40px 0;
`;

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 25px 25px 0 0;
  overflow: hidden;
  padding: 32px;
  width: 100%;
`;

const Text = styled.p`
  all: unset;
  color: ${(props) => props.theme.colors.cyan.darkGrayish};
  font-size: 16px;
  margin-bottom: 6px;
`;

const InputWithMargin = styled(Input)`
  margin-bottom: 32px;
`;

export default App;
