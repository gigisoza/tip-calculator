import React from 'react'
import styled from 'styled-components';
import { Bill, BillName, PerPerson } from './Bill';
import ResetButton from './ResetButton';

interface Props {
    showTip: boolean;
    showTotal: boolean;
    tipAmount: string | undefined;
    totalPerPerson: string | undefined;
}

export default function Result(props: Props) {
    const {showTip, tipAmount, totalPerPerson, showTotal} = props;
    return (
        <ResultContainer>
            <BillContainer style={{ marginBottom: 25}}>
              <div>
                <BillName>Tip Amount</BillName>
                <PerPerson>/ person</PerPerson>
              </div>
              <Bill>
                {showTip ? tipAmount : "$0.00"}
              </Bill> 
            </BillContainer>
            <BillContainer>
              <div>
                <BillName>Total</BillName>
                <PerPerson>/ person</PerPerson>
              </div>
              <Bill>
                {showTotal ? totalPerPerson : "$0.00"}
              </Bill>
            </BillContainer>
            <ResetButton>RESET</ResetButton>
        </ResultContainer>
    )
}

const BillContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ResultContainer = styled.div`
  background-color: ${(props) => props.theme.colors.cyan.dark};
  width: 100%;
  border-radius: 15px;
  padding: 39px 22px 24px 24px;
`;