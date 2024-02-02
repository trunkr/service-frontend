import React from 'react';
import { CSSObject } from '@emotion/react';
import { wrap, item } from './style';

interface Props {
  current: number;
  total: number;
  width?: CSSObject['width'];
}

function StepProgress({ current, total, width = '200px' }: Props) {
  return (
    <div css={[wrap(total), { width }]}>
      {new Array(total).fill('').map((_, i) => (
        <div key={i} css={item(i <= current)} />
      ))}
    </div>
  );
}

export default StepProgress;
