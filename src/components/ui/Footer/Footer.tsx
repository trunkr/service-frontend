import React from 'react';
import icLogo from 'static/logos/logo.svg';
import { wrap, text, linkWrap } from './style';

function Footer() {
  return (
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
  );
}

export default Footer;
