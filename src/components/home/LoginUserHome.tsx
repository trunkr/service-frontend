import MyLearning from './Login/MyLearning/MyLearning';
import Recommendation from './Login/Recommendation/Recommendation';
import * as styles from './Home.style';
import ThinDivider from '../commons/divider/thin/ThinDivider';
import { useGetMembersStats } from '@/hooks/home/useGetMemberStats';
import api from '@/service/TokenService';

export interface MembersStatsProps {
  solvedQuizCount: number;
  incorrectQuizCount: number;
  recommendedAnswerCount: number;
  writtenAlgorithmNoteCount: number;
  frequentlyQuizCategoryIds: number[];
}

const LoginUserHome = () => {
  const token = api.getAccessToken();
  const { data: statsData, isLoading: isStatsLoading } = useGetMembersStats(token);
  console.log(statsData);

  return (
    <styles.Container>
      {isStatsLoading ? null : (
        <MyLearning
          solvedQuizCount={statsData?.payload.solvedQuizCount as number}
          incorrectQuizCount={statsData?.payload.incorrectQuizCount as number}
          recommendedAnswerCount={statsData?.payload.recommendedAnswerCount as number}
          writtenAlgorithmNoteCount={statsData?.payload.writtenAlgorithmNoteCount as number}
          frequentlyQuizCategoryIds={statsData?.payload.frequentlyQuizCategoryIds as number[]}
        />
      )}
      <ThinDivider />
      <Recommendation />
    </styles.Container>
  );
};
export default LoginUserHome;
