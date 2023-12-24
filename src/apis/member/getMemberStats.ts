import { GetMemberStatsRes } from '@/types/Member';

import customedAxios from '../customedAxios';

export const getMemberStats = async (token: string): Promise<GetMemberStatsRes> => {
  try {
    const res = await customedAxios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/members/stats`, {
      headers: {
        Authorization: 'Bearer ' + token.trim(),
      },
    });

    console.log(res.headers);
    return res.data;
  } catch (exeption) {
    throw exeption;
  }
};
export default getMemberStats;
