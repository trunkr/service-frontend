import React from 'react';
import icChevronUp from 'static/icons/system/ic_chevron_up.svg';
import Card from './Card';
import { listWrap, nextBtn } from './style.card';

function List() {
  const hasNext = true;
  return (
    <>
      <ul css={listWrap}>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
      </ul>
      {hasNext && (
        <button css={nextBtn}>
          <span>다른 풀이 더보기</span>
          <img src={icChevronUp} alt="" />
        </button>
      )}
    </>
  );
}

export default List;
