import React, { Fragment } from 'react';
import { optionTitle, rows } from './style';
import { UiComponent } from 'components';

const QUIZ_COUNT_OPTION: number[] = [1, 5, 10];

interface Props {
  count: number;
  handleCount: (count: number) => void;
}

function QuizCountOption({ count, handleCount }: Props) {
  return (
    <div css={rows}>
      {QUIZ_COUNT_OPTION.map((v, i) => (
        <Fragment key={i}>
          <UiComponent.Radio
            current={String(count)}
            value={String(v)}
            handleClick={(v) => handleCount(Number(v))}
            sizeCss={{ width: '22px' }}
          >
            <p css={optionTitle}>{`${v}개`}</p>
          </UiComponent.Radio>
        </Fragment>
      ))}
    </div>
  );
}

export default QuizCountOption;
