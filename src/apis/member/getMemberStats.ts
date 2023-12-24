import { GetMemberStatsRes } from '@/types/Member';
import customedAxios from '../customedAxios';

export const getMemberStats = async (): Promise<GetMemberStatsRes> => {
  const res = await customedAxios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/members/stats`);
  return res.data;
};
export default getMemberStats;
