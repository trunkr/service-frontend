import React, { useState } from 'react';
import { QuizComponent, UiComponent } from 'components';
import { MemberQuery } from 'queries';
import { useAppDispatch } from 'stores';
import { loaded } from 'stores/ui';

interface Props {
  handleClose: () => void;
}

function QuizCountDialog({ handleClose }: Props) {
  const dispatch = useAppDispatch();
  const { data } = MemberQuery.usePersonalInfo();
  const [count, setCount] = useState(data?.quizCount || 5);
  const { mutate } = MemberQuery.usePutPersonalInfo();

  const submit = () => {
    if (!data) return;
    const { nickname, profileImageUrl, isQuizOpen } = data;

    mutate(
      {
        nickname,
        profileImageUrl,
        isQuizOpen,
        quizCount: count,
      },
      {
        onSettled() {
          dispatch(loaded());
          handleClose();
        },
      },
    );
  };

  return (
    <UiComponent.Alert
      title="CS 문제 갯수 설정"
      subTitle="설정한 문제 갯수에 맞춰 문제가 랜덤으로 출제됩니다. "
      handleClose={handleClose}
      existFooter={false}
      opacity={0.5}
    >
      {data && <QuizComponent.QuizCountOption count={count} handleCount={setCount} />}
      <UiComponent.Button size="medium" color="primary" css={{ width: '100%', marginTop: '46px' }} onClick={submit}>
        적용
      </UiComponent.Button>
    </UiComponent.Alert>
  );
}

export default QuizCountDialog;
