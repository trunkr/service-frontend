import { useMutation } from '@tanstack/react-query';
import { MemberApi } from 'api';

function useCheckNickName() {
  return useMutation(MemberApi.checkNickname, {
    onMutate() {
      console.log('hi');
      console.log(MemberApi.checkNickname);
    },
    onSettled() {
      console.log('s');
    },
  });
}

export default useCheckNickName;
