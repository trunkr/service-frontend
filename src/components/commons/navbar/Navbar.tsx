import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LogoIcon from '@public/logo/LOGO-TEXT.svg';
import ProfileIcon from '@public/graphics/Graphics/Profile 1-1.svg';
import { COLORS } from 'public/assets/colors/color';
import * as styles from './Navbar.style';
import Text from 'public/assets/text/Text';

const NavigationBar = () => {
  return (
    <div>
      <styles.Wrapper>
        <styles.NavMenu>
          <Link href="/">
            <LogoIcon />
          </Link>

          <Link href="/solve" style={{ textDecoration: 'none' }}>
            <Text color={COLORS.gray.gray600} textStyleName="Label4B" fontFamily="Pretendard">
              CS 문제풀기
            </Text>
          </Link>
          <Link href="/analysis" style={{ textDecoration: 'none' }}>
            <Text color={COLORS.gray.gray600} textStyleName="Label4B" fontFamily="Pretendard">
              CS 문제풀이 분석
            </Text>
          </Link>
          <Link href="/algorithm" style={{ textDecoration: 'none' }}>
            <Text color={COLORS.gray.gray600} textStyleName="Label4B" fontFamily="Pretendard">
              알고리즘 분석
            </Text>
          </Link>
        </styles.NavMenu>
        <styles.ProfileMenu>
          <ProfileIcon />
        </styles.ProfileMenu>
      </styles.Wrapper>
    </div>
  );
};

export default NavigationBar;
