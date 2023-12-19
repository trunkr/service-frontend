import { PostAuthSignupReq, PostAuthSignupRes } from '@/types/Auth';
import customedAxios from '../customedAxios';

export const postAuthSignUp = async (data: PostAuthSignupReq): Promise<PostAuthSignupRes> => {
  const { memberId, nickname, profileImageUrl, termsAgreement } = data;
  const res = await customedAxios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/sign-up`, {
    memberId: memberId,
    nickname: nickname,
    profileImageUrl: profileImageUrl,
    termsAgreement: termsAgreement,
  });
  return res.data;
};
export default postAuthSignUp;
