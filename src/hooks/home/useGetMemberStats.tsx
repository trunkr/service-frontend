import getMemberStats from '@/apis/member/getMemberStats';
import { GetMemberStatsRes } from '@/types/Member';
import { useQuery } from 'react-query';

export const useGetMembersStats = (token: string) => {
  return useQuery<GetMemberStatsRes>(['useGetMembersStats'], () => getMemberStats(token), {
    staleTime: 300 * 1000,
  });
};
