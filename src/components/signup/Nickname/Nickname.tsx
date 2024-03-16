import React from 'react';

import { UiComponent } from 'components';
import { wrap, pageTitle, title, subTitle } from './style';
import useNickname from './useNickname';

interface Props {
  nickname: string;
  handleNickName: (nickname: string) => void;
  handleNext: () => void;
}

function Nickname({ nickname, handleNickName, handleNext }: Props) {
  const { inpuRef, invalidMsg, agree, setAgree, disabled, next } = useNickname({ nickname, handleNext });

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
      <div css={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '100px' }}>
        <UiComponent.CheckBox uiType="circle" checked={agree} handleCheck={setAgree}>
          <p
            css={(theme) => ({
              fontSize: theme.typography.size.label1,
              fontWeight: theme.typography.weight.semibold,
              userSelect: 'none',
            })}
          >
            Trunkr 이용약관에 동의합니다
          </p>
        </UiComponent.CheckBox>
        <button type="button" css={(theme) => ({ textDecoration: 'underline', fontSize: theme.typography.size.body2 })}>
          전체보기
        </button>
      </div>
      <UiComponent.Button disabled={disabled} color="primary" size="large" css={{ width: '100%' }} onClick={next}>
        완료
      </UiComponent.Button>
    </section>
  );
}

export default Nickname;
