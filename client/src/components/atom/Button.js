import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => {
    if (props.danger) return '#D35400';
    if (props.primary) return '#229954';
    if (props.purple) return '#BB8FCE';
    if (props.secondary) return '#3498DB';
    return '#85929E';
  }};
  border-radius: 3px;
  border: 1px solid
    ${(props) => {
      if (props.danger) return '#D35400';
      if (props.primary) return '#229954';
      if (props.secondary) return '#3498DB';
      return '#85929E';
    }};
  color: white;
  cursor: pointer;
  font-size: 1em;
  min-width: 5em;
  padding: 0.5em 0.75em;
`;

export default Button;
