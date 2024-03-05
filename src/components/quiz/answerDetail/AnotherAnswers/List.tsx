import React, { useReducer, useState } from 'react';
import { AxiosResponse } from 'axios';
import { UseMutateFunction } from '@tanstack/react-query';
import { UiComponent } from 'components';
import { AnswerFavorParams, IQuizAnotherAnswer, IResponse } from 'types';
import Card from './Card';
import { listWrap, nextBtn, nextBtnIcon } from './style.card';
import IconChevron from 'static/icons/system/IconChevron';

function List({
  data,
  updateFavor,
}: {
  data: IQuizAnotherAnswer[];
  updateFavor: UseMutateFunction<AxiosResponse<IResponse<null>>, unknown, AnswerFavorParams>;
}) {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [isOpenLoginDialog, toggleLoginDialog] = useReducer((isOpen) => !isOpen, false);

  const handleShowMore = () => {
    if (!showMore) setShowMore((prev) => !prev);
    else toggleLoginDialog();
  };

  return (
    <>
      <ul css={listWrap}>
        {data.slice(0, showMore ? 10 : 5).map((answer) => (
          <li key={answer.memberQuizAnswerId}>
            <Card userAnswer={answer} updateFavor={updateFavor} />
          </li>
        ))}
      </ul>
      {data.length > 5 && (
        <button css={nextBtn(showMore)} onClick={handleShowMore}>
          <span>{showMore ? `${data.length}개 풀이 모두 보기` : '다른 풀이 더보기'}</span>
          <IconChevron css={nextBtnIcon(showMore)} />
        </button>
      )}
      {isOpenLoginDialog && (
        <UiComponent.AnswersPopup
          data={data}
          title="Java에서 오버로딩과 오버라이딩의 차이점은 무엇인가요?"
          updateFavor={updateFavor}
          handleClose={toggleLoginDialog}
        />
      )}
    </>
  );
}

export default List;
