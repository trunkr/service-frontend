import api from '@/service/TokenService';
import Layout1 from './layout/Layout1/Layout1';
import { useEffect, useState } from 'react';
import NoneLoginUserHome from '@/components/home/NoneLoginUserHome';
import LoginUserHome from '@/components/home/LoginUserHome';
import { NavigationProps } from '@/components/commons/navbar/Navbar';
import { useSetRecoilState } from 'recoil';
import { NavAtom } from '@/states/NavState';

const Home = () => {
  const setNavAtom = useSetRecoilState(NavAtom);
  setNavAtom('Home');
  const [userState, setUserState] = useState<NavigationProps>();
  console.log(userState?.state);
  useEffect(() => {
    const accessToken = api.getAccessToken();
    console.log(accessToken);
    if (accessToken != undefined) {
      setUserState({
        state: 'LOGIN',
      });
    } else {
      setUserState({
        state: 'NON_LOGIN',
      });
    }
  }, []);
  return (
    <div>
      {userState?.state == 'LOGIN' ? (
        <Layout1 state="LOGIN">
          <LoginUserHome />
        </Layout1>
      ) : (
        <Layout1 state="NON_LOGIN">
          <NoneLoginUserHome />
        </Layout1>
      )}
    </div>
  );
};
export default Home;
