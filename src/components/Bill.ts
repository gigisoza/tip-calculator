import styled from "styled-components";

export const BillName = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
  line-height: 24px;
`;

export const Bill = styled.p`
  font-size: 32px;
  color: ${(props) => props.theme.colors.cyan.strong};
`;

export const PerPerson = styled.p`
  font-size: 13px;
  color: ${(props) => props.theme.colors.cyan.grayish};
`;