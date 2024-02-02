import { AuthQuery } from 'queries';
import queryString from 'query-string';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ISocialSignInParams } from 'types';

function useCheckSignin() {
  const { search, hash } = useLocation();
  const { mutate, isLoading } = AuthQuery.useSignin();

  const { id_token } = queryString.parse(hash);
  const { code } = queryString.parse(search);

  useEffect(() => {
    const identity = id_token || code;
    if (identity) {
      const params: ISocialSignInParams = {
        identity: String(identity),
        provider: id_token ? 'GOOGLE' : 'KAKAO',
      };

      if (params.provider === 'KAKAO') {
        params.nonce = 'TRUNKR';
      }

      mutate(params);
    }
  }, [id_token, code]);

  return { isLoading };
}

export default useCheckSignin;
