import Text from '@public/assets/text/Text';
import * as styles from './Recommendation.style';
import { COLORS } from '@public/assets/colors/color';
import Link from 'next/link';
import RecommendationItem from './RecommendationItem/RecommendationItem';
const Recommendation = () => {
  return (
    <styles.Container>
      <styles.RecommendationContainer>
        <styles.RecommendationTopBar>
          <Text color={COLORS.gray.black} textStyleName="Title5" fontFamily="Pretendard">
            추천학습
          </Text>
          <Link href="/">
            <Text color={COLORS.gray.black} textStyleName="Body2SB" fontFamily="Pretendard">
              모두보기
            </Text>
          </Link>
        </styles.RecommendationTopBar>
        <styles.RecommendationItemContainer>
          <RecommendationItem />
          <RecommendationItem />
          <RecommendationItem />
        </styles.RecommendationItemContainer>
      </styles.RecommendationContainer>
    </styles.Container>
  );
};
export default Recommendation;
