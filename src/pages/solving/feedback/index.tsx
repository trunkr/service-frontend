import Layout2 from '@/pages/layout/Layout2/Layout2';
import api from '@/service/TokenService';
import { NavAtom } from '@/states/NavState';
import { useSetRecoilState } from 'recoil';
import { GetServerSideProps } from 'next';
import SolveFeedback from '@/components/solving/feedback';

const FeedbackPage = (props: any) => {
  const setNavAtom = useSetRecoilState(NavAtom);
  setNavAtom('Solve');
  const token = api.getAccessToken();
  console.log('feedbackpage');
  return (
    <div>
      {token ? (
        <Layout2 state="LOGIN">
          <SolveFeedback quizGroupId={props.quizGroupId} />
        </Layout2>
      ) : null}
    </div>
  );
};
export default FeedbackPage;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const quizGroupId = context.query.quizGroupId as string;

  return {
    props: {
      quizGroupId,
    },
  };
};
