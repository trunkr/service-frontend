import { ResponseDto } from '@/types/Common';
import { PostQuizAnswerReq } from '@/types/Quiz';
import axios from 'axios';

export const postQuizAnswer = async (data: PostQuizAnswerReq, token: string): Promise<ResponseDto<string>> => {
  const { quizGroupId, quizId, answer } = data;
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/quiz/answer`,
      {
        quizGroupId: quizGroupId,
        quizId: quizId,
        answer: answer,
      },
      {
        headers: {
          Authorization: 'Bearer ' + token.trim(),
        },
      },
    );
    console.log(res);
    return res.data;
  } catch (error) {
    throw error;
  }
};
export default postQuizAnswer;
