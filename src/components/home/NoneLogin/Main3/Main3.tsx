import Lottie from 'lottie-react';
import Main3Lottie from '@public/lottie/main3.json';
import * as styles from './Main3.style';
import Text from '@public/assets/text/Text';
import { COLORS } from '@public/assets/colors/color';

const Main3 = () => {
  return (
    <styles.MainContainer>
      <styles.Container>
        <styles.BoldTextContainer>
          <Text color={COLORS.gray.black} textStyleName="Main2" fontFamily="Pretendard">
            부족한 부분을 분석해
          </Text>
          <Text color={COLORS.gray.black} textStyleName="Main2" fontFamily="Pretendard">
            성장할 수 있어요.
          </Text>
          <styles.TextContainer>
            <Text color={COLORS.gray.gray650} textStyleName="Main3" fontFamily="Pretendard">
              어떤 부분을 어려워하는지
            </Text>
            <Text color={COLORS.gray.gray650} textStyleName="Main3" fontFamily="Pretendard">
              CS 카테고리별로 진단해드립니다.
            </Text>
          </styles.TextContainer>
        </styles.BoldTextContainer>
      </styles.Container>
      <styles.LottieContainer>
        <Lottie animationData={Main3Lottie} />
      </styles.LottieContainer>
    </styles.MainContainer>
  );
};
export default Main3;
