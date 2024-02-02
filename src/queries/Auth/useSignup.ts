import { AuthApi } from 'api';
import { useMutation } from '@tanstack/react-query';
import { useAppDispatch } from 'stores';
import { setToken } from 'stores/auth';
import { useNavigate } from 'react-router-dom';

function useSignup() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return useMutation(AuthApi.signup, {
    onSuccess(data) {
      dispatch(setToken(data.data.payload));
      navigate('/', { replace: true });
    },
  });
}

export default useSignup;
