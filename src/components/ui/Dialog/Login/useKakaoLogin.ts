function useKakaoLogin() {
  const handleLoginKakao = () => {
    window.Kakao.Auth.authorize({
      redirectUri: `${location.origin}`,
      scope: 'openid',
      nonce: 'TRUNKR',
    });
  };

  return handleLoginKakao;
}

export default useKakaoLogin;
