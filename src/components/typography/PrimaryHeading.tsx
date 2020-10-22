import styled from 'styled-components';

interface Props {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: string;
}

export const PrimaryHeading: React.FC<Props> = ({ level, as, ...otherProps }) => {
  as = as || 'h1';
  return <StyledPrimaryHeading as={as} {...otherProps} />;
};

const StyledPrimaryHeading = styled.h1`
  font: normal bold 42px/1em 'Lato', sans-serif;
`;
