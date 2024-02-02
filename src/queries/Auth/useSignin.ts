import { AuthApi } from 'api';
import { useMutation } from '@tanstack/react-query';
import { useAppDispatch } from 'stores';
import { setToken } from 'stores/auth';
import { useNavigate } from 'react-router-dom';

function useSignin() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return useMutation(AuthApi.signin, {
    onSuccess(data) {
      dispatch(setToken(data.data.payload));
      const path = data.data.payload.isRequiredSignUp ? '/signup' : '/';
      navigate(path, { replace: true });
    },
  });
}

export default useSignin;
