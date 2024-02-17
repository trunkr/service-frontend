import React from 'react';
import { PATH } from 'data/path';
import { NavLink } from 'react-router-dom';
import { IIsCorrectQuizGroup } from 'types';
import { wrap, title, statusLabel, moreButton } from './style';

interface Props {
  item: IIsCorrectQuizGroup;
  quizId: string;
  quizGroupId: string;
}

function QuizCard({ item, quizId, quizGroupId }: Props) {
  return (
    <div css={wrap}>
      <div>
        <div css={statusLabel(item.isCorrect)}>{item.isCorrect ? '정답' : '오답'}</div>
        <p css={title}>{item.question}</p>
      </div>
      <NavLink to={`${PATH.quizAnswer}/${quizId}/${quizGroupId}`} css={moreButton}>
        문제 풀이 보기
      </NavLink>
    </div>
  );
}

export default QuizCard;
