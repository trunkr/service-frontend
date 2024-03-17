import React from 'react';
import { UiComponent } from 'components';
import { wrap, title, quizTitle, optionWrap, btnStyle, loadingWrap } from './style';
import useAnswerState from './useAnswerState';

function Answer() {
  const { answer, quizzes, current, question, isQuizOpen, setIsQuizOpen, setAnswer, handleAnswer, isLoading } =
    useAnswerState();

  return (
    <>
      <main css={wrap}>
        {quizzes.length > 1 && (
          <>
            <p css={title}>{`${quizzes.length}문제 중 ${
              current + 1 > quizzes.length ? quizzes.length : current + 1
            }문제`}</p>
            <UiComponent.StepProgress current={current} total={quizzes.length} />
          </>
        )}

        <h1 css={quizTitle}>{question}</h1>
        <UiComponent.Textarea
          css={{ width: '100%' }}
          maxLen={2000}
          placeholder="답변을 입력해주세요"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        >
          <div css={optionWrap}>
            <p css={{ marginRight: '7px' }}>문제 답변 모두에게 공개</p>
            <UiComponent.Toggle checked={isQuizOpen} handleCheck={setIsQuizOpen} />
          </div>
        </UiComponent.Textarea>
        <UiComponent.Button
          color="primary"
          css={btnStyle}
          onClick={handleAnswer}
          disabled={isLoading || answer.length === 0}
        >
          다음
        </UiComponent.Button>
      </main>
      {isLoading && (
        <UiComponent.Loading opacity={1} isWhite>
          <div css={loadingWrap}>
            <p>문제를 채점하고 있습니다</p>
            <p>잠시 기다려주세요..</p>
          </div>
        </UiComponent.Loading>
      )}
    </>
  );
}

export default Answer;
