import React, { useState } from 'react';
import icProfile7 from 'static/graphics/profile/Profile7.svg';
import icThumbsUp from 'static/icons/system/ic_thumbs-up.svg';
import icThumbsUpFilled from 'static/icons/system/ic_thumbs-up_filled.svg';
import { IQuizAnotherAnswer } from 'types';
import { user, nickname, date, thumbsUp, answer } from './style.card';

function Card({ userAnswer }: { userAnswer: IQuizAnotherAnswer }) {
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
          <img src={icProfile7} alt="" />
        </button>
        <div css={{ display: 'flex', flexDirection: 'column' }}>
          <div css={nickname}>
            <span>{userAnswer.member.nickname}</span>
            <span>님의 풀이</span>
          </div>
          <span css={date}>2023.12.11</span>
        </div>
      </div>
      <pre css={answer(isExpanded)}>{displayText()}</pre>
      <button css={thumbsUp}>
        <img src={userAnswer.isFavor ? icThumbsUpFilled : icThumbsUp} alt="" />
        <span>12</span>
      </button>
    </article>
  );
}

export default Card;
