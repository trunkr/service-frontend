import SolvingIntro from '@/components/solving/intro';
import Layout1 from '@/pages/layout/Layout1/Layout1';
import { NavAtom } from '@/states/NavState';
import { useSetRecoilState } from 'recoil';

const SolvingIntroPage = () => {
  const setNavAtom = useSetRecoilState(NavAtom);
  setNavAtom('Solve');
  return (
    <Layout1 state="LOGIN">
      <SolvingIntro />
    </Layout1>
  );
};
export default SolvingIntroPage;
