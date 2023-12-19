import { useRouter } from 'next/router';
import GoogleLoginBtn from '@public/loginBtn/Google_Button.svg';

const GoogleLoginButton = () => {
  const router = useRouter();
  const LINK = `https://accounts.google.com/o/oauth2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&response_type=id_token&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;

  function googleLogin() {
    router.push(LINK);
  }
  return (
    <div onClick={googleLogin}>
      <GoogleLoginBtn />
    </div>
  );
};

export default GoogleLoginButton;
