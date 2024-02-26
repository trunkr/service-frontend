import React from 'react';

import { section, wrap } from './style';

function MyAnswersSkeleton() {
  return (
    <section css={section}>
      <div css={wrap}></div>
    </section>
  );
}

export default MyAnswersSkeleton;
