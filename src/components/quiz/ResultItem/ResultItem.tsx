import React from 'react';
import { wrap, labelStyle } from './style';
import { AnswerResultType } from 'types';
import { useNavigate } from 'react-router-dom';
import { PATH } from 'data/path';
import icCorrect from 'static/icons/system/ic_correct.svg';
import icIncorrect from 'static/icons/system/ic_incorrect.svg';

interface Props {
  item: AnswerResultType;
  quizGroupId: string;
}

function ResultItem({ item, quizGroupId }: Props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${PATH.quizAnswer}/${item.quizId}/${quizGroupId}`);
  };

  return (
    <div css={wrap} onClick={handleClick}>
      <div css={labelStyle(item.isCorrect)}>
        <img src={item.isCorrect ? icCorrect : icIncorrect} alt="" css={{ marginRight: '4px' }} />
        {item.isCorrect ? '정답' : '오답'}
      </div>
      <p>{item.question}</p>
    </div>
  );
}

export default ResultItem;
