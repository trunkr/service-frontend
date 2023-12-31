import * as styles from './tabsBubble.style';
import Text from '@public/assets/text/Text';
import { COLORS } from '@public/assets/colors/color';

type bubbleType = 'SELECTED' | 'INACTIVE' | 'PRESSED';
interface TabsBubbleProps {
  bubbleType: bubbleType;
  label: string;
  onClick: () => void;
}

const TabsBubble = ({ label, bubbleType, onClick }: TabsBubbleProps) => {
  if (bubbleType == 'SELECTED') {
    return (
      <styles.SelectedBubbleTab onClick={onClick}>
        <Text color={COLORS.gray.white} fontFamily="Pretendard" textStyleName="Label4SB">
          {label}
        </Text>
      </styles.SelectedBubbleTab>
    );
  } else if (bubbleType == 'INACTIVE') {
    return (
      <styles.InActiveBubbleTab onClick={onClick}>
        <Text color={COLORS.gray.gray900} fontFamily="Pretendard" textStyleName="Label4SB">
          {label}
        </Text>
      </styles.InActiveBubbleTab>
    );
  } else if (bubbleType == 'PRESSED') {
    return (
      <styles.PressedBubbleTab onClick={onClick}>
        <Text color={COLORS.gray.gray900} fontFamily="Pretendard" textStyleName="Label4SB">
          {label}
        </Text>
      </styles.PressedBubbleTab>
    );
  }
};
export default TabsBubble;
