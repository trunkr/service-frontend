import { AuthApi } from 'api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAppDispatch } from 'stores';
import { setToken } from 'stores/auth';
import { useNavigate } from 'react-router-dom';
import { loaded, loading } from 'stores/ui';

function useWithdraw() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(AuthApi.withdraw, {
    onSettled() {
      dispatch(loaded());
      dispatch(setToken(null));
      navigate('/', { replace: true });
      queryClient.invalidateQueries([]);
    },
    onMutate() {
      dispatch(loading());
    },
  });
}

export default useWithdraw;
