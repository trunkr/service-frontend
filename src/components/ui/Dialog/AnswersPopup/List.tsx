import React, { useState } from 'react';
import Card from 'components/quiz/answerDetail/AnotherAnswers/Card';
import icChevronUp from 'static/icons/system/ic_chevron_up.svg';
import { AnswerFavorParams, IQuizAnotherAnswer, IResponse } from 'types';
import { listWrap, nextBtn } from './style.card';
import { UseMutateFunction } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

function List({
  data,
  updateFavor,
}: {
  data: IQuizAnotherAnswer[];
  updateFavor: UseMutateFunction<AxiosResponse<IResponse<null>>, unknown, AnswerFavorParams>;
}) {
  const [visibleItems, setVisibleItems] = useState<number>(10);

  const handleShowMore = () => {
    setVisibleItems((prev) => Math.min(prev + 10, data.length));
  };

  return (
    <>
      <ul css={listWrap}>
        {data.slice(0, visibleItems).map((answer, index) => (
          <li key={index}>
            <Card userAnswer={answer} updateFavor={updateFavor} />
          </li>
        ))}
      </ul>
      {visibleItems < data.length && (
        <button css={nextBtn} onClick={handleShowMore}>
          <span>다른 풀이 더보기</span>
          <img src={icChevronUp} alt="" />
        </button>
      )}
    </>
  );
}

export default List;
