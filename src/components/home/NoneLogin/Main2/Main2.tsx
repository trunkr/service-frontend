import Lottie from 'lottie-react';
import Main2Lottie from '@public/lottie/main2.json';
import * as styles from './Main2.style';
import Text from '@public/assets/text/Text';
import { COLORS } from '@public/assets/colors/color';

const Main2 = () => {
  return (
    <styles.Container>
      <styles.BoldTextContainer>
        <Text color={COLORS.gray.black} textStyleName="Main2" fontFamily="Pretendard">
          ChatGPT에게는 정확하게,
        </Text>
        <Text color={COLORS.gray.black} textStyleName="Main2" fontFamily="Pretendard">
          사람들에게는 풍부하게
        </Text>
        <Text color={COLORS.gray.black} textStyleName="Main2" fontFamily="Pretendard">
          피드백을 받아보세요.
        </Text>
        <styles.TextContainer>
          <Text color={COLORS.gray.gray650} textStyleName="Main3" fontFamily="Pretendard">
            CS 문제를 풀고, ChatGPT에게
          </Text>
          <Text color={COLORS.gray.gray650} textStyleName="Main3" fontFamily="Pretendard">
            피드백을 받을 수 있어요. 다른 사용자가
          </Text>
          <Text color={COLORS.gray.gray650} textStyleName="Main3" fontFamily="Pretendard">
            푼 문제도 함께 보고 공부할 수 있어요.
          </Text>
        </styles.TextContainer>
      </styles.BoldTextContainer>
      <styles.LottieContainer>
        <Lottie animationData={Main2Lottie} />
      </styles.LottieContainer>
    </styles.Container>
  );
};
export default Main2;
