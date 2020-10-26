import * as S from './style';

interface Props {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: string;
}

export const SecondaryHeading: React.FC<Props> = ({ level, as, ...otherProps }) => {
  as = as || 'h2';
  return <S.SecondaryHeading as={as} {...otherProps} />;
};
