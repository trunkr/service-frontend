import React, { useMemo } from 'react';
import icChevron from 'static/icons/system/ic_chevron_up.svg';
import { btnStyle, wrap, pageBtn } from './style';

const MAX_PAGE = 5;

interface Props {
  currentPage: number;
  totalPage: number;
  handlePage: (page: number) => void;
}

function Pagination({ currentPage, totalPage, handlePage }: Props) {
  const start = useMemo(() => Math.floor(currentPage / MAX_PAGE) * MAX_PAGE, [currentPage]);
  const total = useMemo(() => totalPage - start, [totalPage, start]);
  const pages = useMemo(() => {
    if (total <= 0) return [];

    return new Array(total >= MAX_PAGE ? MAX_PAGE : total).fill('').map((_, i) => i + start);
  }, [start, total]);

  const handlePrev = () => {
    if (currentPage > 0) {
      handlePage(currentPage - 1);
    }
  };

  const handleNext = () => {
    const nextPage = currentPage + 1;
    if (nextPage < totalPage) {
      handlePage(nextPage);
    }
  };

  if (total < 2) {
    return null;
  }

  return (
    <div css={wrap}>
      <button type="button" css={[btnStyle, { transform: 'rotate(-90deg)', marginRight: '10px' }]} onClick={handlePrev}>
        <img src={icChevron} alt="" />
      </button>
      {pages.map((p) => (
        <button type="button" key={p} css={pageBtn(p === currentPage)} onClick={() => handlePage(p)}>
          {p + 1}
        </button>
      ))}
      <button type="button" css={[btnStyle, { transform: 'rotate(90deg)', marginLeft: '10px' }]} onClick={handleNext}>
        <img src={icChevron} alt="" />
      </button>
    </div>
  );
}

export default Pagination;
