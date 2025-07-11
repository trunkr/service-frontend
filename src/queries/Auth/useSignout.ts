import { AuthApi } from 'api';
import { useMutation } from '@tanstack/react-query';
import { useAppDispatch } from 'stores';
import { setToken } from 'stores/auth';
import { useNavigate } from 'react-router-dom';
import { loaded, loading } from 'stores/ui';

function useSignout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return useMutation(AuthApi.signout, {
    onSettled() {
      dispatch(loaded());
      dispatch(setToken(null));
      navigate('/', { replace: true });
    },
    onMutate() {
      dispatch(loading());
    },
  });
}

export default useSignout;
