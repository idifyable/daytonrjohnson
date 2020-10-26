import * as S from './style';

interface Props {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: string;
}

export const PrimaryHeading: React.FC<Props> = ({ level, as, ...otherProps }) => {
  as = as || 'h1';
  return <S.PrimaryHeading as={as} {...otherProps} />;
};
