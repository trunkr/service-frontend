import getMemberCheckNickname from '@/apis/auth/getMembersCheckNickname';
import { GetMemberCheckNickname } from '@/types/Member';
import { useQuery } from '@tanstack/react-query';

export const useGetMemberCheckNickname = (nickname: string) => {
  return useQuery<GetMemberCheckNickname>(['useGetMemberCheckNickname'], () => getMemberCheckNickname(nickname), {
    staleTime: 300 * 1000,
  });
};
