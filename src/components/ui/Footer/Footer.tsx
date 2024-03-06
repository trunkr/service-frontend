import React from 'react';
import { isMobile } from 'react-device-detect';
import icLogo from 'static/logos/logo.svg';
import { theme } from 'styles';
import Divider from '../Divider';
import { wrap, mWrap, text, linkWrap, mCopyrightText, mGuideText, mBtn } from './style';

function Footer() {
  if (isMobile) {
    return (
      <footer css={mWrap}>
        <p css={mGuideText}>
          현재 서비스 환경 상 PC에서만 사용 가능합니다.
          <br />곧 모바일에서도 만나요!
        </p>
        <button type="button" css={mBtn}>
          PC 버전으로 접속하기
        </button>
        <p css={mCopyrightText}>ⓒ 2023. Trunkr, All rights reserved.</p>
      </footer>
    );
  }

  return (
    <>
      <Divider color={theme.color.gray.gray200} style={{ margin: '150px auto 0', width: 'calc(100% - 200px)' }} />
      <footer css={wrap}>
        <div>
          <img src={icLogo} width={156} />
          <p css={text}>ⓒ 2023. Trunkr, All rights reserved.</p>
        </div>
        <div css={linkWrap}>
          <a>이용약관</a>
          <a>문의하기</a>
          <a>팀 블로그</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
