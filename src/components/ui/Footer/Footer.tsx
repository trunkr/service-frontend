import React from 'react';
import { isMobile } from 'react-device-detect';
import icLogo from 'static/logos/logo.svg';
import { theme } from 'styles';
import Divider from '../Divider';
import { wrap, mWrap, text, linkWrap, mCopyrightText, mGuideText } from './style';
import { openAlert } from 'stores/ui';
import { useAppDispatch } from 'stores';
import { UiComponent } from 'components';

function Footer() {
  const dispatch = useAppDispatch();

  const handleBlog = () => {
    dispatch(
      openAlert({
        alertContent: '',
        alertTitle: '준비중입니다',
      }),
    );
  };

  if (isMobile) {
    return (
      <footer css={mWrap}>
        <p css={mGuideText}>
          현재 서비스 환경 상 PC에서만 사용 가능합니다.
          <br />곧 모바일에서도 만나요!
        </p>
        {/* <button type="button" css={mBtn}>
          PC 버전으로 접속하기
        </button> */}
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
          <div>
            <a
              href="https://colossal-entrance-a84.notion.site/TRUNKR-9af721552d0a44fd8149ed7f5f06cea9"
              target="__blank"
            >
              이용약관
            </a>
            <a
              href="https://colossal-entrance-a84.notion.site/TRUNKR-5cf24cf811f342db872a674635503f0d"
              target="__blank"
              css={{ fontWeight: '700 !important' }}
            >
              개인정보처리방침
            </a>
          </div>
          <UiComponent.Divider orientation="vertical" size={'16px'} color="#D9D9D9" />
          <div>
            <a href="mailto:trunkrai@gmail.com">문의</a>
            <a href="https://www.instagram.com/trunkr.ai/" target="__blank">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
