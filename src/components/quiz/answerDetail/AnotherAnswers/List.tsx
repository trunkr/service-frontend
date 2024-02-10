import { UiComponent } from 'components';
import React, { useReducer, useState } from 'react';
import icChevronUp from 'static/icons/system/ic_chevron_up.svg';
import { IQuizAnotherAnswer } from 'types';
import Card from './Card';
import { listWrap, nextBtn } from './style.card';

function List({ data }: { data: IQuizAnotherAnswer[] }) {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [isOpenLoginDialog, toggleLoginDialog] = useReducer((isOpen) => !isOpen, false);

  const handleShowMore = () => {
    if (!showMore) setShowMore((prev) => !prev);
    else toggleLoginDialog();
  };

  return (
    <>
      <ul css={listWrap}>
        {data.slice(0, showMore ? 10 : 5).map((answer, index) => (
          <li key={index}>
            <Card userAnswer={answer} />
          </li>
        ))}
      </ul>
      {data.length > 5 && (
        <button css={nextBtn} onClick={handleShowMore}>
          <span>다른 풀이 더보기</span>
          <img src={icChevronUp} alt="" />
        </button>
      )}
      {isOpenLoginDialog && (
        <UiComponent.AnswersPopup
          data={data}
          title="Java에서 오버로딩과 오버라이딩의 차이점은 무엇인가요?"
          handleClose={toggleLoginDialog}
        />
      )}
    </>
  );
}

export default List;
