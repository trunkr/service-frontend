import React, { Fragment, useMemo } from 'react';

import { QuizComponent } from 'components';
import DoughnutChart from 'components/ui/DoughnutChart';
import { QuizQuery } from 'queries';
import { useParams } from 'react-router-dom';
import { wrap, textStyle, titleStyle, scoreStyle } from './style';

function Result() {
  const { quizGroupId } = useParams();
  const { data } = QuizQuery.useGetAnswerResult(quizGroupId || '');

  const isCorrentCnt = useMemo(() => data?.result.reduce((a, b) => a + (b.isCorrect ? 1 : 0), 0) || 0, [data?.result]);
  const total = useMemo(() => data?.result.length || 0, [data?.result]);
  const percent = useMemo(
    () => (total > 0 && isCorrentCnt > 0 ? isCorrentCnt / total : 0) * 100,
    [isCorrentCnt, total],
  );

  return (
    <main css={wrap}>
      <div css={{ position: 'relative' }}>
        <DoughnutChart percent={percent} size={131} />
        <p css={scoreStyle} className="font-number-bold">
          <span css={(theme) => ({ color: isCorrentCnt > 0 ? theme.color.primary.mint600 : theme.color.gray.gray350 })}>
            {isCorrentCnt}
          </span>
          <span css={(theme) => ({ color: theme.color.gray.gray350 })}>{` / ${total}`}</span>
        </p>
      </div>
      <h1 css={titleStyle}>{getCommnet(percent, isCorrentCnt)}</h1>
      <p css={textStyle}>
        1회 이상 푼 문제들은 Ai 피드백과 다른 사람들의 풀이를 확인할 수 있어요.
        <br />
        틀린 문제부터 복습해보세요!
      </p>
      {data?.result.map((item) => (
        <Fragment key={item.quizId}>
          <QuizComponent.ResultItem item={item} quizGroupId={quizGroupId || ''} />
        </Fragment>
      ))}
    </main>
  );
}

const getCommnet = (percent: number, cnt: number) => {
  if (percent === 100) return '모두 정답! 훌륭해요.';
  if (percent === 0) return '모두 오답이에요... 피드백을 확인해 보세요';
  if (percent > 50) return `${cnt}문제가 정답이에요!`;
  return `${cnt}문제만 정답이에요..`;
};

export default Result;
