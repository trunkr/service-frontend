import Link from 'next/link';
import LogoIcon from '@public/logo/LOGO-TEXT.svg';
import { COLORS } from 'public/assets/colors/color';
import * as styles from './Navbar.style';
import Text from 'public/assets/text/Text';
import { useRecoilValue } from 'recoil';
import { NavAtom, NavList } from '@/states/NavState';
import LineButton from '../buttons/capsuleButton/lineButton/LineButton';
import { useState, useEffect } from 'react';
import { LoginDialog } from '../dialog/login/LoginDialog';

export interface NavigationProps {
  state: 'REGISTER' | 'LOGIN' | 'NON_LOGIN';
}

const NavigationBar = (navProps: NavigationProps) => {
  const { state } = navProps;
  console.log(state);
  const navState = useRecoilValue(NavAtom);
  const [loginClick, setLoginClick] = useState(false);
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  console.log(navState);
  const onLoginClick = () => {
    setLoginClick(true);
  };
  useEffect(() => {
    console.log('useEffect', loginClick);
    setPortalElement(document.getElementById('root-modal'));
  }, [loginClick]);
  if (state == 'LOGIN') {
    return (
      <div>
        <styles.Wrapper>
          <br style={{ width: '100vw', height: '1px', color: COLORS.gray.gray200 }} />
          <styles.NavMenuWrapper>
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
          </styles.NavMenuWrapper>
          <styles.ProfileMenuWrapper>
            <styles.ProfileImg>
              {loginClick && portalElement ? (
                <LoginDialog loginClick={loginClick} setLoginClick={setLoginClick} />
              ) : (
                <LineButton size="SMALL" state="DEFAULT" msg="로그인" onClick={onLoginClick} />
              )}
            </styles.ProfileImg>
          </styles.ProfileMenuWrapper>
        </styles.Wrapper>
        <styles.NavLine />
      </div>
    );
  } else if (state == 'NON_LOGIN') {
    return (
      <div>
        <styles.Wrapper>
          <br style={{ width: '100vw', height: '1px', color: COLORS.gray.gray200 }} />
          <styles.NavMenuWrapper>
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
          </styles.NavMenuWrapper>
          <styles.ProfileMenuWrapper>
            {loginClick && portalElement ? (
              <LoginDialog loginClick={loginClick} setLoginClick={setLoginClick} />
            ) : (
              <LineButton size="SMALL" state="DEFAULT" msg="로그인" onClick={onLoginClick} />
            )}
          </styles.ProfileMenuWrapper>
        </styles.Wrapper>
        <styles.NavLine />
      </div>
    );
  } else if (state == 'REGISTER') {
    return (
      <div>
        <styles.Wrapper>
          <br style={{ width: '100vw', height: '1px', color: COLORS.gray.gray200 }} />
          <styles.NavMenuWrapper>
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
          </styles.NavMenuWrapper>
        </styles.Wrapper>
        <styles.NavLine />
      </div>
    );
  }
};

export default NavigationBar;
