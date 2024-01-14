import CorrectGraphics from '@public/graphics/Graphics/correctGraphic.svg';
import * as styles from './FeedbackTop.style';

interface FeedbackTopProps {
  correct: number;
  incorrect: number;
}

const FeedbackTop = ({ correct, incorrect }: FeedbackTopProps) => {
  // 전부다 맞아았을 때
  if (incorrect == 0) {
    return <styles.FeedbackTopWrapper></styles.FeedbackTopWrapper>;
  }
  // 과반수이상 정답
  else if (correct > incorrect) {
    return <div></div>;
  } else if (correct < incorrect) {
    return <div></div>;
  } else if (correct == 0) {
    return <div></div>;
  }
};
export default FeedbackTop;
