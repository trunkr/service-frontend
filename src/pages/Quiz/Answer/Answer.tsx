import React from 'react';

import { UiComponent } from 'components';
import { wrap } from './style';

function Answer() {
  return (
    <main css={wrap}>
      <p>5문제 중 1문제</p>
      <UiComponent.StepProgress current={1} total={5} />
      <h1>Java에서 오버로딩과 오버라이딩의 차이점은 무엇인가요?</h1>
      <UiComponent.Textarea css={{ width: '100%' }} />
      <UiComponent.Toggle />
    </main>
  );
}

export default Answer;
