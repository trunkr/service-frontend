import * as styles from './ArrowButton.style';
import RightArrow from '@public/icons/System/ic_arrow_right.svg';
interface ArrowButtonProps {
  onClick: () => void;
}
const ArrowButton = ({ onClick }: ArrowButtonProps) => {
  return (
    <styles.ArrowButtonContainer onClick={onClick}>
      <RightArrow />
    </styles.ArrowButtonContainer>
  );
};
export default ArrowButton;
