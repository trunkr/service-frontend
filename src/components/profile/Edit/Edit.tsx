import React from 'react';
import { MemberUpdateType } from 'types';
import icProfile from 'static/icons/system/ic_user.svg';
import icSetting from 'static/icons/system/ic_test_setting.svg';
import icEdit from 'static/icons/system/ic_edit.svg';
import { wrap, title, pageTitle, profileWrap, inputTitle, optionRows, actionButton, withdrawButton } from './style';
import { PROFILE_DATA } from 'data/profile';
import { ProfileComponent, UiComponent } from 'components';
import { useCheckNickname } from 'hooks';
import { AuthQuery, MemberQuery } from 'queries';
import { useAppDispatch } from 'stores';
import { addToast, loaded } from 'stores/ui';
import useWithdraw from './useWithdraw';
import { Divider } from 'components/ui';
import { theme } from 'styles';

interface Props {
  data: MemberUpdateType;
  originData: MemberUpdateType;
  handleValue: (key: keyof MemberUpdateType, value: MemberUpdateType[keyof MemberUpdateType]) => void;
  handleProfileImage: () => void;
  email: string;
}

function Edit({ data, handleProfileImage, handleValue, email, originData }: Props) {
  const dispatch = useAppDispatch();
  const { inpuRef, invalidMsg, disabled } = useCheckNickname({
    nickname: data.nickname,
    originNickname: originData.nickname,
  });
  const { mutate: signout } = AuthQuery.useSignout();
  const { isOpenConfirm, handleOpenWithdrawConfirm, handleCloseWithdrawConfirm, withdraw } = useWithdraw();

  const { mutate } = MemberQuery.usePutPersonalInfo();

  const submit = () => {
    if (disabled) {
      inpuRef.current?.focus?.();
      return;
    }

    mutate(
      {
        nickname: data.nickname,
        profileImageUrl: data.profileImageUrl,
        quizCount: data.quizCount,
        isQuizOpen: data.isQuizOpen,
      },
      {
        onSettled() {
          dispatch(loaded());
          dispatch(
            addToast({
              message: '저장 완료',
            }),
          );
        },
      },
    );
  };

  return (
    <main css={wrap}>
      <h1 css={title}>설정</h1>
      <Divider color={theme.color.gray.gray250} />
      <div css={pageTitle}>
        <img src={icProfile} alt="" width={24} />
        <p>내 정보</p>
      </div>
      <div css={profileWrap}>
        <img src={PROFILE_DATA[Number(data.profileImageUrl)]} alt="" width={70} />
        <button type="button" onClick={handleProfileImage}>
          <img src={icEdit} alt="" />
        </button>
      </div>

      <p css={inputTitle}>닉네임</p>
      <UiComponent.Input
        sizeType="large"
        ref={inpuRef}
        invalidMsg={invalidMsg}
        value={data.nickname}
        onChange={(e) => handleValue('nickname', e.target.value)}
      />
      <p css={[inputTitle, { marginTop: '30px' }]}>이메일</p>
      <UiComponent.Input disabled value={email} css={{ fontWeight: '500 !important' }} />

      <Divider color={theme.color.gray.gray250} style={{ margin: '80px 0' }} />

      <div css={[pageTitle, { margin: '0 0 30px' }]}>
        <img src={icSetting} alt="" width={24} />
        <p>CS 문제풀기 설정</p>
      </div>

      <div css={[optionRows, { margin: '30px 0 60px' }]}>
        <div>
          <p>CS 문제 갯수 설정</p>
        </div>
        <ProfileComponent.QuizCountOption count={data.quizCount} handleCount={(v) => handleValue('quizCount', v)} />
      </div>
      <div css={optionRows}>
        <div>
          <p>CS 문제 답변 기본 공개</p>
          <span>CS 문제에 대한 답변을 모두에게 공개하는 옵션을 켜둡니다</span>
        </div>

        <UiComponent.Toggle
          sizeCss={{ width: '38px', height: '24px' }}
          checked={data.isQuizOpen}
          handleCheck={(c) => handleValue('isQuizOpen', c)}
        />
      </div>
      <UiComponent.Button css={actionButton} color="primary" onClick={submit}>
        저장
      </UiComponent.Button>
      <UiComponent.Button css={[actionButton, { margin: '20px 0 30px 0' }]} color="line" onClick={() => signout()}>
        로그아웃
      </UiComponent.Button>

      <button type="button" css={withdrawButton} onClick={handleOpenWithdrawConfirm}>
        탈퇴하기
      </button>
      {isOpenConfirm && (
        <UiComponent.Confirm
          title="탈퇴하시겠습니까?"
          handleClose={handleCloseWithdrawConfirm}
          handleConfirm={withdraw}
        >
          탈퇴하시겠습니까?
        </UiComponent.Confirm>
      )}
    </main>
  );
}

export default Edit;
