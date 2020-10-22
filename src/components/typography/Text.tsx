import styled from 'styled-components';

interface Props {
  as?: string;
}

export const Text: React.FC<Props> = ({ as, ...otherProps }) => {
  as = as || 'p';

  return <Paragraph as={as} {...otherProps} />;
};
const Paragraph = styled.p`
  color: #111111;
  font: normal normal 16px/1.7em 'Open Sans';
`;
