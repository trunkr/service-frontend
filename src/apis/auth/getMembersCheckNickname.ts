import { GetMemberCheckNickname } from '@/types/Member';
import customedAxios from '../customedAxios';

export const getMemberCheckNickname = async (nickname: string): Promise<GetMemberCheckNickname> => {
  const res = await customedAxios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/members/check-nickname?nickname=${nickname}`,
  );
  return res.data;
};
export default getMemberCheckNickname;
