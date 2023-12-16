import { useSearchParams } from 'next/navigation';
import postKakaoIdToken from '@/apis/auth/postKakaoIdToken';
import { MemberStatus, PostAuthSocialSignInReq, PostKakaoIdTokenReq } from '@/types/Auth';
import { useEffect } from 'react';
import { useMemo } from 'react';
import postAuthSocialSignIn from '@/apis/auth/postAuthSocialSignIn';
import api from '@/service/TokenService';
import { useRouter } from 'next/router';

const KakaoLoginRedirect = () => {
  const router = useRouter();
  const params = useSearchParams();
  const codeParam: string = params.get('code') as string;
  console.log(codeParam);
  // useMemo를 사용하여 data 객체를 메모이제이션
  const data: PostKakaoIdTokenReq = useMemo(
    () => ({
      grant_type: 'authorization_code',
      client_id: `${process.env.NEXT_PUBLIC_KAKAO_REST_APT_KEY}`,
      redirect_uri: `${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}`,
      code: codeParam,
      client_secret: `${process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET}`,
    }),
    [codeParam],
  );

  useEffect(() => {
    const fetchData = async () => {
      if (data && codeParam) {
        console.log(data);
        const idTokenRes = await postKakaoIdToken(data);

        const authSocialSignIndata: PostAuthSocialSignInReq = {
          identity: idTokenRes.id_token,
          provider: 'KAKAO',
        };

        const socialSignInRes = await postAuthSocialSignIn(authSocialSignIndata);
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
      }
    };

    fetchData();
  }, [data]);

  return <></>;
};
export default KakaoLoginRedirect;
