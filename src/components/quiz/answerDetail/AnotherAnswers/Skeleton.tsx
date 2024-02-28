import 'react-loading-skeleton/dist/skeleton.css';

import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { theme } from 'styles';
import { useIsDeferred } from 'hooks';
import { noResultsWrap } from './style.noResult';
import { section, wrap, grayDivider } from './style';

function AnotherAnswersSkeleton() {
  const { isDeferred } = useIsDeferred();

  return (
    <section css={section}>
      <div css={wrap}>
        <hr css={grayDivider} />
        <div css={noResultsWrap}>
          {isDeferred && (
            <>
              <Skeleton width="80px" height="20px" borderRadius={6} baseColor={theme.color.gray.gray250} />
              <br />
              <Skeleton width="80px" height="20px" borderRadius={6} baseColor={theme.color.gray.gray250} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default AnotherAnswersSkeleton;
