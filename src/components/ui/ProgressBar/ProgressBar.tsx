import React, { useMemo } from 'react';
import { wrap, progress, ProgressType } from './style';
import { CSSObject } from '@emotion/react';

interface Props {
  width: CSSObject['width'];
  percent: number;
  notProgress?: boolean;
}

function ProgressBar({ width, percent, notProgress }: Props) {
  const progressType: ProgressType = useMemo(() => {
    if (percent >= 40) return 'correct';
    if (notProgress) return 'none';

    return 'incorrect';
  }, [percent]);

  return (
    <div css={[wrap(progressType), { width }]}>
      <div css={[progress(progressType), { width: `${percent}%` }]} />
    </div>
  );
}

export default ProgressBar;
