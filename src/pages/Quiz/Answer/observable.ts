import { AnswerParams } from 'types';

const answer = (data: AnswerParams) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000);
  });

export { answer };
