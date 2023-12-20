import { useSearchParams } from 'next/navigation';
import { getKakaoIdToken } from '@/apis/auth/getKakaoIdToken';
import { GetKakaoIdTokenReq, MemberStatus, PostAuthSocialSignInReq } from '@/types/Auth';
import { useEffect } from 'react';
import postAuthSocialSignIn from '@/apis/auth/postAuthSocialSignIn';
import api from '@/service/TokenService';
import { useRouter } from 'next/router';

const KakaoLoginRedirect = () => {
  const router = useRouter();
  const params = useSearchParams();
  const codeParam: string | null = params.get('code');

  useEffect(() => {
    const fetchData = async () => {
      // codeParam이 존재하는 경우에만 실행
      if (codeParam) {
        const data: GetKakaoIdTokenReq = {
          code: codeParam,
          state: 'TRUNKR',
        };

        try {
          const idTokenRes = await getKakaoIdToken(data);
          console.log(idTokenRes);

          const authSocialSignInData: PostAuthSocialSignInReq = {
            identity: idTokenRes.payload.idToken,
            provider: 'KAKAO',
          };

          const socialSignInRes = await postAuthSocialSignIn(authSocialSignInData);
          console.log(socialSignInRes);
          console.log(socialSignInRes.code);

          if (socialSignInRes.payload.memberStatus === MemberStatus.ACTIVATED) {
            api.setId(socialSignInRes.payload.memberId);
            api.setAccessToken(socialSignInRes.payload.token.accessToken);
            api.setRefreshToken(socialSignInRes.payload.token.refreshToken);
            router.push('/');
          } else if (socialSignInRes.payload.memberStatus === MemberStatus.PENDING) {
            api.setId(socialSignInRes.payload.memberId);
            router.push('/signUp');
          }
        } catch (error) {
          // 오류 처리
          console.error('Error:', error);
        }
      }
    };

    fetchData();
  }, [codeParam]); // codeParam이 변경될 때만 useEffect 실행

  return <></>;
};

export default KakaoLoginRedirect;
