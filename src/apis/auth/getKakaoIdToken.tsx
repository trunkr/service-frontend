import { GetKakaoIdTokenReq, GetKakaoIdTokenRes } from '@/types/Auth';
import axios from 'axios';

export const getKakaoIdToken = async (data: GetKakaoIdTokenReq): Promise<GetKakaoIdTokenRes> => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/kakao/redirect-uri?code=${data.code}&state=${data.state}`,
  );
  return res.data;
};
export default getKakaoIdToken;
