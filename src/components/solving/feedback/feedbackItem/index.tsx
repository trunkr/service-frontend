import Text from '@public/assets/text/Text';
import * as styles from './FeedbackItem.style';
import CorrectCheck from '@public/icons/System/ic_check.svg';
import IncorrectClose from '@public/icons/System/ic_close.svg';
import { COLORS } from '@public/assets/colors/color';
interface FeedbackItemProps {
  isCorrect: boolean;
  question: string;
  quizId: number;
  onClick: () => void;
}
const FeedbackItem = ({ isCorrect, question }: FeedbackItemProps) => {
  return (
    <styles.Container>
      <styles.RowWrapper>
        <styles.CorrectLabelWrapper isCorrect={isCorrect}>
          {isCorrect ? <CorrectCheck /> : <IncorrectClose />}
          {isCorrect ? (
            <Text color={COLORS.primary.mint800} textStyleName="Label5B" fontFamily="Pretendard">
              정답
            </Text>
          ) : (
            <Text color={COLORS.error.red850} textStyleName="Label5B" fontFamily="Pretendard">
              오답
            </Text>
          )}
        </styles.CorrectLabelWrapper>
        <Text color={COLORS.gray.black} textStyleName="Title6" fontFamily="Pretendard">
          {question}
        </Text>
      </styles.RowWrapper>
    </styles.Container>
  );
};
export default FeedbackItem;
