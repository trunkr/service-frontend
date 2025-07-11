import React from 'react';
import { filterWrap, filterButton } from './style';
import { QuizCategoryFilterType } from 'types';

const FILTERS: QuizCategoryFilterType[] = ['', 'CS', 'FRAMEWORK', 'LANGUAGE'];

interface Props {
  filter: QuizCategoryFilterType;
  handleFilter: (type: QuizCategoryFilterType) => void;
}

function Filter({ filter, handleFilter }: Props) {
  return (
    <div css={filterWrap}>
      {FILTERS.map((v, i) => (
        <button key={i} type="button" css={filterButton(v === filter)} onClick={() => handleFilter(v)}>
          {v || 'All'}
        </button>
      ))}
    </div>
  );
}

export default Filter;
