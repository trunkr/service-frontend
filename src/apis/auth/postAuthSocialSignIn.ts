import customedAxios from '../customedAxios';
import { PostAuthSocialSignInReq, PostAuthSocialSignInRes } from '@/types/Auth';

export const postAuthSocialSignIn = async (data: PostAuthSocialSignInReq): Promise<PostAuthSocialSignInRes> => {
  const res = await customedAxios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/social-sign-in`, {
    data: data,
  });
  return res.data;
};
export default postAuthSocialSignIn;
