import Text from '@public/assets/text/Text';
import * as styles from './Recommendation.style';
import { COLORS } from '@public/assets/colors/color';
const Recommendation = () => {
  return (
    <styles.Container>
      <styles.RecommendationContainer>
        <Text color={COLORS.gray.black} textStyleName="Title5" fontFamily="Pretendard">
          내 학습
        </Text>
        <styles.RecommendationContainer></styles.RecommendationContainer>
      </styles.RecommendationContainer>
    </styles.Container>
  );
};
export default Recommendation;
