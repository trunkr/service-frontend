import React, { useState } from 'react';
import icChevronUp from 'static/icons/system/ic_chevron_up.svg';
import { IQuizAnotherAnswer } from 'types';
import Card from './Card';
import { listWrap, nextBtn } from './style.card';

function List({ data }: { data: IQuizAnotherAnswer[] }) {
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleShowMore = () => {
    if (!showMore) setShowMore((prev) => !prev);
    else console.log('show popup');
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
    </>
  );
}

export default List;
