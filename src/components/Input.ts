import styled from "styled-components";
import dollarIcon from '../images/icon-dollar.svg';
import personIcon from '../images/icon-person.svg';

interface Props {
    iconType?: "bill" | "person"
}

const icon = (props: Props) => {
  switch(props.iconType){
    case "bill":
      return dollarIcon;
    case "person":
      return personIcon;
    default:
      return "";
  }
}

export const Input = styled.input<Props>`
  all: unset;
  padding-right: 17px;
  height: 48px;
  border-radius: 5px;
  background-image: url(${icon});
  background-position: center left 19px;
  background-color: ${props => props.theme.inputBackground};
  background-repeat: no-repeat;
  font-size: 24px;
  text-align: right;
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.cyan.dark};
  width: calc(100% - 17px);

  &::placeholder {
    color: ${props => props.theme.colors.cyan.dark};
    font-family: ${props => props.theme.fonts.primary};
    opacity: 0.35;
  }

  &:hover {
    outline: 2px solid ${props => props.theme.colors.cyan.strong};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`