import * as styles from './LoginDialog.style';
import KakaoLoginBtn from '@public/loginBtn/Kakao_Button.svg';
import GoogleLoginBtn from '@public/loginBtn/Google_Button.svg';
import CloseBtn from '@public/icons/System/ic_close.svg';
import TrunkrLogo from '@public/logo/symbol.svg';
import TrunkrText from '@public/logo/LOGO-TEXT.svg';
import Text from '@public/assets/text/Text';
import { COLORS } from '@public/assets/colors/color';

// interface LoginDialogProps {
//   platform: 'KAKAO' | 'GOOGLE';
//   onClick: () => void;
// }

export const LoginDialog = () => {
  return (
    <styles.DialogContainer>
      <styles.CloseBtnContainer>
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
        <KakaoLoginBtn />
        <GoogleLoginBtn />
      </styles.LoginBtnContainer>
    </styles.DialogContainer>
  );
};
