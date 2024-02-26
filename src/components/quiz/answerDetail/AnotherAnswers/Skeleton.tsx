import 'react-loading-skeleton/dist/skeleton.css';

import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { noResultsWrap } from './style.noResult';
import { theme } from 'styles';
import { useIsDeferred } from 'hooks';

function AnotherAnswersSkeleton() {
  const { isDeferred } = useIsDeferred();

  return (
    <div css={noResultsWrap}>
      {isDeferred && (
        <>
          <Skeleton width="80px" height="20px" borderRadius={6} baseColor={theme.color.gray.gray250} />
          <br />
          <Skeleton width="80px" height="20px" borderRadius={6} baseColor={theme.color.gray.gray250} />
        </>
      )}
    </div>
  );
}

export default AnotherAnswersSkeleton;
