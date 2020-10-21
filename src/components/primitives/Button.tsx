import styled from 'styled-components';

interface Props {
  text: string;
}

export const Button: React.FC<Props> = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

const StyledButton = styled.button`
  position: relative;
  padding: 0.75em 2em;
  font-size: 18px;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 5px 10px grey;
  background-color: #f20034;
`;
