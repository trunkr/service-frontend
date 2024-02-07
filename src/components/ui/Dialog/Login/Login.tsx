import React from 'react';
import icSymbol from 'static/logos/symbol.svg';
import icLogo from 'static/logos/text.svg';
import icKakao from 'static/icons/Kakao.svg';
import icGoogle from 'static/icons/Google.svg';
import { wrap, title, kakaoButton, googleButton } from './style';
import { IDialogProps } from '../types';
import Dialog from '../Dialog';
import useKakaoLogin from './useKakaoLogin';

function Login({ ...props }: IDialogProps) {
  const handleLoginKakao = useKakaoLogin();

  const handleLoginGoogle = () => {
    location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${location.origin}&response_type=id_token&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;
  };

  return (
    <Dialog existFooter={false} opacity={0.5} {...props}>
      <div css={wrap}>
        <img src={icSymbol} alt="" width={65} />
        <div css={title}>
          <img src={icLogo} alt="" width={124} />
          <p>에 로그인</p>
        </div>
        <button type="button" css={kakaoButton} onClick={handleLoginKakao}>
          <img src={icKakao} alt="" width={20} />
          카카오로 계속하기
        </button>
        <button type="button" css={googleButton} onClick={handleLoginGoogle}>
          <img src={icGoogle} alt="" width={20} />
          Google로 계속하기
        </button>
      </div>
    </Dialog>
  );
}

export default Login;
