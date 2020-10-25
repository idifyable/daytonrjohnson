import * as S from './style';

interface Props {
  text: string;
}

export const Button: React.FC<Props> = ({ text }) => {
  return <S.Button>{text}</S.Button>;
};
