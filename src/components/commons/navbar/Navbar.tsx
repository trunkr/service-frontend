import Link from 'next/link';
import LogoIcon from '@public/logo/LOGO-TEXT.svg';
import ProfileIcon from '@public/graphics/Graphics/Profile 1-1.svg';
import { COLORS } from 'public/assets/colors/color';
import * as styles from './Navbar.style';
import Text from 'public/assets/text/Text';
import { useRecoilValue } from 'recoil';
import { NavAtom, NavList } from '@/states/NavState';

const NavigationBar = () => {
  const navState = useRecoilValue(NavAtom);
  console.log(navState);
  return (
    <div>
      <styles.Wrapper>
        <br style={{ width: '1440px', height: '1px', color: COLORS.gray.gray200 }} />
        <styles.NavMenu>
          <Link href="/">
            <LogoIcon />
          </Link>

          <Link href="/solve" style={{ textDecoration: 'none' }}>
            {navState != NavList.Solve ? (
              <Text color={COLORS.gray.gray600} textStyleName="Label4B" fontFamily="Pretendard">
                CS 문제풀기
              </Text>
            ) : (
              <styles.FocusWrapper>
                <Text color={COLORS.gray.black} textStyleName="Label4B" fontFamily="Pretendard">
                  CS 문제풀기
                </Text>
                <styles.FocusLine />
              </styles.FocusWrapper>
            )}
          </Link>
          <Link href="/analysis" style={{ textDecoration: 'none' }}>
            {navState != NavList.Analysis ? (
              <Text color={COLORS.gray.gray600} textStyleName="Label4B" fontFamily="Pretendard">
                CS 문제풀이 분석
              </Text>
            ) : (
              <styles.FocusWrapper>
                <Text color={COLORS.gray.black} textStyleName="Label4B" fontFamily="Pretendard">
                  CS 문제풀이 분석
                </Text>
                <styles.FocusLine />
              </styles.FocusWrapper>
            )}
          </Link>
          <Link href="/algorithm" style={{ textDecoration: 'none' }}>
            {navState != NavList.Algorithm ? (
              <Text color={COLORS.gray.gray600} textStyleName="Label4B" fontFamily="Pretendard">
                알고리즘 분석
              </Text>
            ) : (
              <styles.FocusWrapper>
                <Text color={COLORS.gray.black} textStyleName="Label4B" fontFamily="Pretendard">
                  알고리즘 분석
                </Text>
                <styles.FocusLine />
              </styles.FocusWrapper>
            )}
          </Link>
        </styles.NavMenu>
        <styles.ProfileMenu>
          <ProfileIcon />
        </styles.ProfileMenu>
      </styles.Wrapper>
      <styles.NavLine />
    </div>
  );
};

export default NavigationBar;
