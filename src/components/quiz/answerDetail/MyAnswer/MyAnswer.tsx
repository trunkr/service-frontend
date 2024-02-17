import React from 'react';
import { useParams } from 'react-router-dom';

import icGpt from 'static/graphics/profile/Gpt.svg';
import icProfile7 from 'static/graphics/profile/Profile7.svg';
import useGetQuizAnswerDetailResult from 'queries/Quiz/useGetQuizAnswerDetail';
import { CATEGORY_ICON_MAP } from 'data/category';
import { MOCK_AI_FEEDBACK, MOCK_ANSWER } from 'pages/Quiz/constants';
import { IQuizAnswer } from 'types';
import {
  section,
  category,
  categoryName,
  title,
  myAnswer,
  subTitle,
  answerLabel,
  answerDetail,
  user,
  smallUserInfo,
  nickname,
  date,
  answer,
  aiFeedBackWrap,
  onlyMe,
  gptInfo,
  gpt,
  feedback,
  grayDivider,
} from './style';

const mock_payload: IQuizAnswer = {
  quizId: 1,
  quizGroupId: '1',
  quizAnswerStatus: 'INCORRECT',
  question: '자바의 메모리 영역에 대해 설명해주세요.',
  answer: MOCK_ANSWER,
  feedback: MOCK_AI_FEEDBACK,
  category: {
    id: 1,
    name: 'OS',
    type: 'CS',
  },
  member: {
    id: 1,
    nickname: '테스터',
    profileImageUrl: 'https://abc.xyz',
  },
};

function MyAnswer() {
  const { quizId, quizGroupId } = useParams();
  const { data } = useGetQuizAnswerDetailResult(
    { quizId: quizId || '', quizGroupId: quizGroupId || '' },
    // quizId !== '' && quizGroupId !== '',
    false,
  );
  console.log('data :', data);

  return (
    <section css={section}>
      <div css={category}>
        <img src={CATEGORY_ICON_MAP[mock_payload.category.name as keyof typeof CATEGORY_ICON_MAP]} />
        <p css={categoryName}>Java</p>
      </div>
      <h1 css={title}>{mock_payload.question}</h1>

      <hr css={grayDivider} />

      {/* My Answer */}
      <article>
        <div css={myAnswer}>
          <h2 css={subTitle}>내 풀이</h2>
          <span css={answerLabel}>{mock_payload.quizAnswerStatus === 'CORRECT' ? '정답' : '오답'}</span>
        </div>
        <div css={answerDetail}>
          <button type="button" css={user}>
            <img src={icProfile7} alt="" />
          </button>
          <div css={smallUserInfo}>
            <div css={nickname}>
              <span>{mock_payload.member.nickname}</span>
              <span>님의 풀이</span>
            </div>
            <span css={date}>2023.12.11</span>
          </div>
        </div>
        <pre css={answer}>{mock_payload.answer}</pre>
      </article>

      {/* AI Feedback */}
      {mock_payload.quizAnswerStatus === 'INCORRECT' && (
        <article>
          <div css={aiFeedBackWrap}>
            <span css={onlyMe}>나만 볼 수 있어요</span>
            <div css={gptInfo}>
              <button type="button" css={gpt}>
                <img src={icGpt} alt="" />
              </button>
              <span css={nickname}>GPT 피드백</span>
            </div>
            <pre css={feedback}>{mock_payload.feedback}</pre>
          </div>
        </article>
      )}
    </section>
  );
}

export default MyAnswer;
