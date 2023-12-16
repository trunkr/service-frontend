import { PostAuthSignupReq, PostAuthSignupRes } from '@/types/Auth';
import customedAxios from '../customedAxios';

export const postAuthSignUp = async (data: PostAuthSignupReq): Promise<PostAuthSignupRes> => {
  const res = await customedAxios(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/social-sign-in`, {
    data: data,
  });
  return res.data;
};
export default postAuthSignUp;
