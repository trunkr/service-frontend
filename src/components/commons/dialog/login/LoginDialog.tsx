import * as styles from './LoginDialog.style';
import CloseBtn from '@public/icons/System/ic_close.svg';
import TrunkrLogo from '@public/logo/symbol.svg';
import TrunkrText from '@public/logo/LOGO-TEXT.svg';
import Text from '@public/assets/text/Text';
import { COLORS } from '@public/assets/colors/color';
import GoogleLoginButton from '../../buttons/login/GoogleLoginButton';
import KakaoLoginButton from '../../buttons/login/KakaoLoginButton';

// interface LoginDialogProps {
//   platform: 'KAKAO' | 'GOOGLE';
//   onClick: () => void;
// }

export interface LoginModalProps {
  loginClick: boolean;
  setLoginClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginDialog = ({ setLoginClick, loginClick }: LoginModalProps) => {
  const onCloseClick = () => {
    console.log('dialog', loginClick);
    setLoginClick(!loginClick);
  };
  return (
    <styles.DialogBackground>
      <styles.DialogContainer>
        <styles.CloseBtnContainer onClick={onCloseClick}>
          <CloseBtn />
        </styles.CloseBtnContainer>
        <TrunkrLogo />
        <styles.RowContainer>
          <TrunkrText />
          <Text color={COLORS.gray.black} textStyleName="Title4" fontFamily="Pretendard">
            에 로그인
          </Text>
        </styles.RowContainer>
        <styles.LoginBtnContainer>
          <KakaoLoginButton />
          <GoogleLoginButton />
        </styles.LoginBtnContainer>
      </styles.DialogContainer>
    </styles.DialogBackground>
  );
};
