import * as S from './style';
import { Navigation } from '@components/Navigation';

export const Header: React.FC = () => {
  return (
    <S.Header>
      <Navigation />
    </S.Header>
  );
};
