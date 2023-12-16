import { PostKakaoIdTokenReq, PostKakaoIdTokenRes } from '@/types/Auth';
import axios from 'axios';

export const postKakaoIdToken = async (data: PostKakaoIdTokenReq): Promise<PostKakaoIdTokenRes> => {
  const res = await axios.post('https://kauth.kakao.com/oauth/token', data, {
    headers: {
      'Content-Type': `application/x-www-form-urlencoded;charset=utf-8`,
    },
  });
  return res.data;
};
export default postKakaoIdToken;
