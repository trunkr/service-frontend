import React from 'react';
import { useParams } from 'react-router-dom';

import icGpt from 'static/graphics/profile/Gpt.svg';
import useGetQuizAnswerDetailResult from 'queries/Quiz/useGetQuizAnswerDetail';
import { CATEGORY_ICON_MAP } from 'data/category';
import { PROFILE_DATA } from 'data/profile';
import {
  section,
  wrap,
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
import { formatDate } from 'utils/format';

function MyAnswer() {
  const { quizId, quizGroupId } = useParams();
  const { data } = useGetQuizAnswerDetailResult({ quizId: quizId || '', quizGroupId: quizGroupId || '' }, true);

  return (
    <section css={section}>
      <div css={wrap}>
        <div css={category}>
          <img src={CATEGORY_ICON_MAP[data?.category.name as keyof typeof CATEGORY_ICON_MAP]} />
          <p css={categoryName}>{data?.category?.name}</p>
        </div>
        <h1 css={title}>{data?.question}</h1>

        <hr css={grayDivider} />

        {/* My Answer */}
        <article>
          <div css={myAnswer}>
            <h2 css={subTitle}>내 풀이</h2>
            <span css={answerLabel}>{data?.quizAnswerStatus === 'CORRECT' ? '정답' : '오답'}</span>
          </div>
          <div css={answerDetail}>
            <button type="button" css={user}>
              <img src={PROFILE_DATA[Number(data?.member?.profileImageUrl || '0')]} alt="" />
            </button>
            <div css={smallUserInfo}>
              <div css={nickname}>
                <span>{data?.member.nickname}</span>
                <span>님의 풀이</span>
              </div>
              <span css={date}>{formatDate(data?.answeredAt || '')}</span>
            </div>
          </div>
          <pre css={answer}>{data?.answer}</pre>
        </article>

        {/* AI Feedback */}
        {data?.quizAnswerStatus === 'INCORRECT' && (
          <article>
            <div css={aiFeedBackWrap}>
              <span css={onlyMe}>나만 볼 수 있어요</span>
              <div css={gptInfo}>
                <button type="button" css={gpt}>
                  <img src={icGpt} alt="" />
                </button>
                <span css={nickname}>GPT 피드백</span>
              </div>
              <pre css={feedback}>{data.feedback}</pre>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}

export default MyAnswer;
