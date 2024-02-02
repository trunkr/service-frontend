import { AuthApi } from 'api';
import { useMutation } from '@tanstack/react-query';
import { useAppDispatch } from 'stores';
import { setToken } from 'stores/auth';
import { useNavigate } from 'react-router-dom';

function useSignout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return useMutation(AuthApi.signout, {
    onSuccess() {
      dispatch(setToken(null));
      navigate('/', { replace: true });
    },
  });
}

export default useSignout;
