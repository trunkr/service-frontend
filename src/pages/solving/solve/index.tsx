import Solve from '@/components/solving/solve';
import Layout2 from '@/pages/layout/Layout2/Layout2';
import api from '@/service/TokenService';
import { NavAtom } from '@/states/NavState';
import { useSetRecoilState } from 'recoil';
import { GetServerSideProps } from 'next';

const SolvePage = (props: any) => {
  const setNavAtom = useSetRecoilState(NavAtom);
  setNavAtom('Solve');
  const token = api.getAccessToken();
  return (
    <div>
      {token ? (
        <Layout2 state="LOGIN">
          <Solve selectedQuizIds={props.selectedQuizIds} />
        </Layout2>
      ) : null}
    </div>
  );
};
export default SolvePage;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const quizIds = context.query.quizIds as string;
  const selectedQuizIds = quizIds ? JSON.parse(quizIds) : [];

  return {
    props: {
      selectedQuizIds,
    },
  };
};
