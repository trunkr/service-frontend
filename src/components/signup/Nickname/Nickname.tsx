import React from 'react';

import { UiComponent } from 'components';
import { wrap, pageTitle, title, subTitle } from './style';
import useNickname from './useNickname';
import { Divider } from 'components/ui';
import TermsItem from './TermsItem';

interface Props {
  nickname: string;
  handleNickName: (nickname: string) => void;
  handleNext: () => void;
}

function Nickname({ nickname, handleNickName, handleNext }: Props) {
  const { inpuRef, invalidMsg, agree, setAgree, disabled, next, agree2, setAgree2, handleAll } = useNickname({
    nickname,
    handleNext,
  });

  return (
    <section css={wrap}>
      <h1 css={pageTitle}>회원가입</h1>
      <p css={title}>닉네임</p>
      <p css={subTitle}>한글,영문 10자 이하로 입력해주세요</p>
      <UiComponent.Input
        ref={inpuRef}
        placeholder="닉네임을 입력해주세요"
        invalidMsg={invalidMsg}
        value={nickname}
        sizeType="large"
        onChange={(e) => handleNickName(e.target.value)}
      />
      <p css={(theme) => ({ ...title(theme), margin: '80px 0 30px' })}>약관 동의</p>
      <div css={{ display: 'flex', alignItems: 'flex-start', width: '100%', marginBottom: '30px' }}>
        <UiComponent.CheckBox uiType="circle" checked={agree && agree2} handleCheck={handleAll}>
          <p
            css={(theme) => ({
              fontSize: theme.typography.size.label1,
              fontWeight: theme.typography.weight.semibold,
              userSelect: 'none',
            })}
          >
            모든 약관에 동의합니다
          </p>
        </UiComponent.CheckBox>
      </div>
      <Divider />
      <div css={{ display: 'flex', flexDirection: 'column', width: '100%', marginBottom: '100px' }}>
        <TermsItem
          agree={agree}
          setAgree={setAgree}
          link="https://colossal-entrance-a84.notion.site/TRUNKR-9af721552d0a44fd8149ed7f5f06cea9"
          title="Trunkr 이용약관"
        />
        <TermsItem
          agree={agree2}
          setAgree={setAgree2}
          link="https://colossal-entrance-a84.notion.site/TRUNKR-5cf24cf811f342db872a674635503f0d"
          title="개인정보수집 및 이용동의"
        />
      </div>

      <UiComponent.Button disabled={disabled} color="primary" size="large" css={{ width: '100%' }} onClick={next}>
        완료
      </UiComponent.Button>
    </section>
  );
}

export default Nickname;
