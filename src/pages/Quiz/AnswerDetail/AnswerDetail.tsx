import React from 'react';
import { useParams } from 'react-router-dom';

function AnswerDetail() {
  const { quizId, quizGroupId } = useParams();

  return (
    <>
      <p>{`quizId : ${quizId}`}</p>
      <p>{`quizGroupId : ${quizGroupId}`}</p>
    </>
  );
}

export default AnswerDetail;
