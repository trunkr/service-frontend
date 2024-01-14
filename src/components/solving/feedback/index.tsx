import { useGetQuizAnswer } from '@/hooks/quiz/useGetQuizAnswer';
import api from '@/service/TokenService';
import SolveLoading from '../loading/Loading';
import * as styles from './Feedback.style';

interface SolveFeedbackProps {
  quizGroupId: string;
}

const SolveFeedback = ({ quizGroupId }: SolveFeedbackProps) => {
  const token = api.getAccessToken();
  const { data, isLoading } = useGetQuizAnswer(token, quizGroupId);

  return <styles.Container>{isLoading ? <SolveLoading /> : <div></div>}</styles.Container>;
};
export default SolveFeedback;
