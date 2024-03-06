import React from 'react';

import IconEmpty from 'static/graphics/system/IconEmpty';
import { noResultsWrap, noResultImg, noResultText } from './style.noResult';

function NoResults() {
  return (
    <div css={noResultsWrap}>
      <IconEmpty css={noResultImg} />
      <p css={noResultText}>다른 풀이가 없어요.</p>
    </div>
  );
}

export default NoResults;
