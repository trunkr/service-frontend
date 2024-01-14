import { useGetQuizAnswer } from '@/hooks/quiz/useGetQuizAnswer';
import api from '@/service/TokenService';
import * as styles from './Feedback.style';
import FeedbackTop from './feedbackTop';
import FeedbackItem from './feedbackItem';
import { useState } from 'react';
import SolveLoading from '../loading/Loading';

interface SolveFeedbackProps {
  quizGroupId: string;
}

const SolveFeedback = ({ quizGroupId }: SolveFeedbackProps) => {
  const token = api.getAccessToken();
  const { isLoading, data } = useGetQuizAnswer(token, quizGroupId);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [incorrectCount, setIncorrectCount] = useState<number>(0);
  console.log(data);
  data?.payload.result.map((item) => {
    if (item.isCorrect) {
      setCorrectCount((prev) => (prev as number) + 1);
    } else {
      setIncorrectCount((prev) => (prev as number) + 1);
    }
  });
  const onClick = () => {};

  return (
    <styles.Container>
      {isLoading ? (
        <SolveLoading />
      ) : (
        <div>
          <FeedbackTop correct={correctCount} incorrect={incorrectCount} />
          {data?.payload.result.map((item) => (
            <div key={item.quizId}>
              <FeedbackItem
                isCorrect={item.isCorrect}
                question={item.question}
                quizId={item.quizId}
                onClick={onClick}
              />
            </div>
          ))}
        </div>
      )}
    </styles.Container>
  );
};
export default SolveFeedback;
