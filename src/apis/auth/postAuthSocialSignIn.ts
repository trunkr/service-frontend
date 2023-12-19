import axios from 'axios';
import { PostAuthSocialSignInReq, PostAuthSocialSignInRes } from '@/types/Auth';

export const postAuthSocialSignIn = async (data: PostAuthSocialSignInReq): Promise<PostAuthSocialSignInRes> => {
  const { identity, provider } = data;
  try {
    console.log('postAuthSocialSignIn');
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/social-sign-in`, {
      identity: identity,
      provider: provider,
    });
    console.log(res);
    return res.data;
  } catch (error) {
    throw error;
  }
};
export default postAuthSocialSignIn;
