import Text from '@public/assets/text/Text';
import * as styles from './RecommendationItem.style';
import { COLORS } from '@public/assets/colors/color';
import NETWORK_IMAGE from '@public/graphics/Category/Network.svg';
import DB_IMAGE from '@public/graphics/Category/DataBase.svg';
import SPRING_IMAGE from '@public/graphics/Category/Spring.svg';
import ArrowButton from '@/components/commons/buttons/capsuleButton/arrowButton/ArrowButton';

interface RecommendationCategoryImageProps {
  name: string;
  link: string;
}
const recommendationCategoryImageList: RecommendationCategoryImageProps[] = [
  {
    name: 'Network',
    link: NETWORK_IMAGE,
  },
  {
    name: 'DB',
    link: DB_IMAGE,
  },
  {
    name: 'Spring',
    link: SPRING_IMAGE,
  },
];
const RecommendationItem = () => {
  const onClick = () => {};
  return (
    <styles.RecommendationItemContainer>
      <NETWORK_IMAGE />
      <styles.ArrowButtonContainer>
        <ArrowButton onClick={onClick} />
      </styles.ArrowButtonContainer>
      <styles.TextContainer>
        <styles.TextField>
          <Text textStyleName="Title6" color={COLORS.gray.black} fontFamily="Pretendard">
            네트워크
          </Text>
          <Text textStyleName="Body4SB" color={COLORS.gray.gray650} fontFamily="Pretendard">
            컴퓨터가 서로 어떻게 데이터를 주고 받는지 알 수 있어요. 컴퓨터 사이에 정보를 주고 받는 규칙, OSI 7계층,
            TCP/UDP등을 학습할 수 있어요.
          </Text>
        </styles.TextField>
      </styles.TextContainer>
    </styles.RecommendationItemContainer>
  );
};
export default RecommendationItem;
