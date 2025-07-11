import { UseMutateFunction } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { PROFILE_DATA } from 'data/profile';
import React, { useState } from 'react';
import icThumbsUp from 'static/icons/system/ic_thumbs-up.svg';
import icThumbsUpFilled from 'static/icons/system/ic_thumbs-up_filled.svg';
import { AnswerFavorParams, IQuizAnotherAnswer, IResponse } from 'types';
import { formatDate } from 'utils/format';
import { user, nickname, date, thumbsUp, answer } from './style.card';

function Card({
  userAnswer,
  updateFavor,
}: {
  userAnswer: IQuizAnotherAnswer;
  updateFavor: UseMutateFunction<AxiosResponse<IResponse<null>>, unknown, AnswerFavorParams>;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => setIsExpanded((prev) => !prev);

  const displayText = () => {
    const lines = userAnswer.answer.split('\n');

    if (lines.length > 10 && !isExpanded) {
      return (
        <>
          {lines.slice(0, 10).join('\n')}
          <button onClick={toggleExpansion}>...더보기</button>
        </>
      );
    } else {
      return (
        <>
          {userAnswer.answer}
          {isExpanded && <button onClick={toggleExpansion}>...접기</button>}
        </>
      );
    }
  };

  return (
    <article>
      <div css={{ display: 'flex', alignItems: 'center', marginBottom: '14px' }}>
        <button type="button" css={user}>
          <img src={PROFILE_DATA[Number(userAnswer?.member?.profileImageUrl || '0')]} alt="" />
        </button>
        <div css={{ display: 'flex', flexDirection: 'column' }}>
          <div css={nickname}>
            <span>{userAnswer.member.nickname}</span>
            <span>님의 풀이</span>
          </div>
          <span css={date}>{formatDate(userAnswer.answeredAt)}</span>
        </div>
      </div>
      <pre css={answer(isExpanded)}>{displayText()}</pre>
      <button
        css={thumbsUp}
        onClick={() =>
          updateFavor({ isFavor: !userAnswer.isFavor, articleId: userAnswer.memberQuizAnswerId, articleType: 'QUIZ' })
        }
      >
        <img src={userAnswer.isFavor ? icThumbsUpFilled : icThumbsUp} alt="" />
        <span>{userAnswer.favorCount}</span>
      </button>
    </article>
  );
}

export default Card;
