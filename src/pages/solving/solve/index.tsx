import Solve from '@/components/solving/solve';
import Layout2 from '@/pages/layout/Layout2/Layout2';
import api from '@/service/TokenService';
import { NavAtom } from '@/states/NavState';
import { useSetRecoilState } from 'recoil';
const SolvePage = () => {
  const setNavAtom = useSetRecoilState(NavAtom);
  setNavAtom('Solve');
  const token = api.getAccessToken();
  return (
    <div>
      {token ? (
        <Layout2 state="LOGIN">
          <Solve />
        </Layout2>
      ) : null}
    </div>
  );
};
export default SolvePage;
