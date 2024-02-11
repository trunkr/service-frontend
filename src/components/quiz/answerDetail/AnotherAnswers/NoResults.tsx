import React from 'react';

import graphicEmpty from 'static/graphics/system/empty.svg';
import { noResultsWrap, noResultImg, noResultText } from './style.noResult';

function NoResults() {
  return (
    <div css={noResultsWrap}>
      <img src={graphicEmpty} alt="" css={noResultImg} />
      <p css={noResultText}>다른 풀이가 없어요.</p>
    </div>
  );
}

export default NoResults;
