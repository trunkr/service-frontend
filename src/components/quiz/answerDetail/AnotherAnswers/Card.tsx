import React from 'react';
import icProfile7 from 'static/graphics/profile/Profile7.svg';
import icThumbsUp from 'static/icons/system/ic_thumbs-up.svg';
import icThumbsUpFilled from 'static/icons/system/ic_thumbs-up_filled.svg';
import { IQuizAnotherAnswer } from 'types';
import { user, nickname, date, thumbsUp, answer } from './style.card';

function Card({ userAnswer }: { userAnswer: IQuizAnotherAnswer }) {
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
      <pre css={answer}>{userAnswer.answer}</pre>
      <button css={thumbsUp}>
        <img src={userAnswer.isFavor ? icThumbsUpFilled : icThumbsUp} alt="" />
        <span>12</span>
      </button>
    </article>
  );
}

export default Card;
