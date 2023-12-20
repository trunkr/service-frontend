import Text from '@public/assets/text/Text';
import * as styles from './Main4.style';
import { COLORS } from '@public/assets/colors/color';
import Main4Image from '@public/assets/images/main4.svg';
const Main4 = () => {
  return (
    <styles.Container>
      <styles.BoldTextContainer>
        <Text color={COLORS.gray.black} textStyleName="Main2" fontFamily="Pretendard">
          알고리즘 공부까지
        </Text>
        <Text color={COLORS.gray.black} textStyleName="Main2" fontFamily="Pretendard">
          한 번에 해결!
        </Text>
        <styles.TextContainer>
          <Text color={COLORS.gray.gray650} textStyleName="Main3" fontFamily="Pretendard">
            알고리즘 오답노트를 만들고,
          </Text>
          <Text color={COLORS.gray.gray650} textStyleName="Main3" fontFamily="Pretendard">
            플랫폼별로 모아서 복습할 수 있어요.
          </Text>
        </styles.TextContainer>
      </styles.BoldTextContainer>
      <Main4Image />
    </styles.Container>
  );
};
export default Main4;
