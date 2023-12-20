import api from '@/service/TokenService';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import postAuthSocialSignIn from '@/apis/auth/postAuthSocialSignIn';

const GoogleLoginRedirect = () => {
  const router = useRouter();
  const url = router.asPath;
  const idTokenIndex = url.indexOf('#id_token=');
  const authUserIndex = url.indexOf('&authuser=');
  const idToken = url.substring(idTokenIndex + 10, authUserIndex);

  useEffect(() => {
    const fetchData = async () => {
      const response = await postAuthSocialSignIn({
        identity: idToken,
        provider: 'GOOGLE',
      });
      console.log(response);

      if (response.code == parseInt('100')) {
        const { memberStatus, memberId, token } = response.payload;
        if (memberStatus == 'PENDING') {
          api.setId(memberId);
          router.push('/signup');
        } else if (memberStatus == 'ACTIVATED') {
          api.setId(memberId);
          api.setAccessToken(token.accessToken);
          api.setRefreshToken(token.refreshToken);
          router.push('/');
        }
      }
    };
    if (idToken != null) {
      fetchData();
    }
  }, []);
  return <></>;
};
export default GoogleLoginRedirect;
