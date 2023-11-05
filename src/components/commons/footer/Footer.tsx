import * as styles from './Footer.style';
import Link from 'next/link';
import Text from '@public/assets/text/Text';
import { COLORS } from '@public/assets/colors/color';
import LogoIcon from '@public/logo/logo.svg';

export const Footer = () => {
  return (
    <styles.Wrapper>
      <styles.IconWrapper>
        <LogoIcon />
        <div style={{ padding: '30px' }} />
        <Text color={COLORS.gray.gray750} textStyleName="Label4M" fontFamily="Pretendard">
          ⓒ 2023. Trunkr, All rights reserved.
        </Text>
      </styles.IconWrapper>
      <styles.FooterTextBar>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Text color={COLORS.gray.black} textStyleName="Body4B" fontFamily="Pretendard">
            이용약관
          </Text>
        </Link>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Text color={COLORS.gray.black} textStyleName="Label4B" fontFamily="Pretendard">
            문의하기
          </Text>
        </Link>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Text color={COLORS.gray.black} textStyleName="Label4B" fontFamily="Pretendard">
            팀블로그
          </Text>
        </Link>
      </styles.FooterTextBar>
    </styles.Wrapper>
  );
};
