import Text from '@public/assets/text/Text';
import * as styles from './Loading.style';
import { COLORS } from '@public/assets/colors/color';
import SolvingLottie from '@public/lottie/loading.json';
import Lottie from 'lottie-react';
const SolveLoading = () => {
  return (
    <styles.Container>
      <styles.LottieWrapper>
        <Lottie animationData={SolvingLottie} />
      </styles.LottieWrapper>
      <styles.TextWrapper>
        <Text textStyleName="Title4" color={COLORS.gray.black} fontFamily="Pretendard">
          문제를 채점하고 있습니다
        </Text>
        <Text textStyleName="Title4" color={COLORS.gray.black} fontFamily="Pretendard">
          잠시 기다려주세요..
        </Text>
      </styles.TextWrapper>
    </styles.Container>
  );
};
export default SolveLoading;
