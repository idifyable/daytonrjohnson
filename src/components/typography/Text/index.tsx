import * as S from './style';

interface Props {
  as?: string;
}

export const Text: React.FC<Props> = ({ as, ...otherProps }) => {
  as = as || 'p';

  return <S.Paragraph as={as} {...otherProps} />;
};
