import React, { useMemo, useState } from 'react';
import { wrap } from './style';
import { UiComponent } from 'components';
import { IQuizRandomParams } from 'types';
import { MemberQuery, QuizQuery } from 'queries';
import { useAppDispatch, useAppSelector } from 'stores';
import { foot } from 'components/ui/Dialog/style';
import { setNotOpenDate, setRandom, setRandomFromNotSubmitted } from 'stores/quiz';
import { useNavigate } from 'react-router-dom';
import { PATH } from 'data/path';

function RandomSubmit({ categoryIds }: Pick<IQuizRandomParams, 'categoryIds'>) {
  // const [checked, toggle] = useReducer((c) => !c, false);
  const disabled = useMemo(() => categoryIds === '', [categoryIds]);

  const { mutateAsync, data: d } = QuizQuery.useGetNotSubmitted();
  const { notOpenDate } = useAppSelector((state) => state.quiz);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { mutate, isLoading } = QuizQuery.useRandom();
  const { data } = MemberQuery.usePersonalInfo();

  const [isOpenConfirm, setIsOpenConfirm] = useState(true);

  const handleClose = () => {
    dispatch(setRandom(null));
    dispatch(setNotOpenDate());
    setIsOpenConfirm(false);
  };

  const handleConfirm = () => {
    if (d?.data.payload) {
      setRandomFromNotSubmitted(d.data.payload);
      navigate(`${PATH.quizAnswer}`);
    }
  };

  const handleNext = async () => {
    if (disabled) return;
    if (!data) return;

    const today = new Date();
    const dateStr = `${today.getFullYear}${today.getMonth()}${today.getDate()}`;
    const checkNotSubmitted = notOpenDate && notOpenDate === dateStr;
    if (!checkNotSubmitted) {
      const res = await mutateAsync();
      if (res.data.payload.quizzes.length > 0) {
        setIsOpenConfirm(true);
        return;
      }
    }

    const { quizCount } = data;
    mutate({ categoryIds, quizCount });
  };

  return (
    <>
      <div css={wrap}>
        {/* <UiComponent.CheckBox uiType="rect" checked={checked} handleCheck={() => toggle()}>
          이 카테고리 다음에도 사용
        </UiComponent.CheckBox> */}
        <UiComponent.Button color="primary" disabled={disabled} onClick={handleNext}>
          다음
        </UiComponent.Button>
      </div>
      {isLoading && <UiComponent.Loading />}
      {isOpenConfirm && (
        <UiComponent.Confirm
          title={'풀던 문제가 n개 남아있어요\n이어서 문제를 푸시겠어요?'}
          closeTitle=""
          confirmtitle=""
          existFooter={false}
          handleClose={() => setIsOpenConfirm(false)}
          handleConfirm={() => setIsOpenConfirm(false)}
          opacity={0.5}
        >
          <div>
            <div css={foot}>
              <button type="button" onClick={handleConfirm}>
                이어서 풀기
              </button>
              <button type="button" onClick={handleClose}>
                오늘 그만 보기
              </button>
            </div>
          </div>
        </UiComponent.Confirm>
      )}
    </>
  );
}

export default RandomSubmit;
