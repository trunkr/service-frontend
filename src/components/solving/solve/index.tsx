import { useEffect, useState } from 'react';
import SolveItem from './solveItem/solveItem';
import * as styles from './Solve.style';
import IndicatorThree from '@/components/commons/indicators/indicatorThree/IndicatorThree';
import IndicatorFive from '@/components/commons/indicators/indicatorFive/IndicatorFive';
import IndicatorTen from '@/components/commons/indicators/indicatorTen/IndicatorTen';
import { useRouter } from 'next/router';
import { useGetQuizRandom } from '@/hooks/quiz/useGetQuizRandom';
import api from '@/service/TokenService';

interface SolveProps {
  selectedQuizIds: string[];
}

const Solve = ({ selectedQuizIds }: SolveProps) => {
  const token = api.getAccessToken();
  const paramString = selectedQuizIds.join(',');
  const router = useRouter();

  const { data } = useGetQuizRandom(token, paramString);
  const solveProblemSize = data?.payload.quizzes.length;

  const [indicatorStep, setIndicatorStep] = useState(0);

  useEffect(() => {
    if (indicatorStep === 3 && solveProblemSize === 3) {
      console.log('이동');
      router.push('/', {
        query: {
          quizGroupId: data?.payload.quizGroupId,
        },
      });
    }
    if (indicatorStep === 5 && solveProblemSize === 5) {
      router.push(`/solving/feedback/${data?.payload.quizGroupId}`, {
        query: {
          quizGroupId: data?.payload.quizGroupId,
        },
      });
    }
    if (indicatorStep === 10 && solveProblemSize === 10) {
      router.push(`/solving/feedback/${data?.payload.quizGroupId}`, {
        query: {
          quizGroupId: data?.payload.quizGroupId,
        },
      });
    }
  }, [indicatorStep]);

  if (data) {
    const quizGroupId = data.payload.quizGroupId;
    const quizArr = data.payload.quizzes;

    if (solveProblemSize === 3) {
      return (
        <div>
          {indicatorStep < 3 && (
            <styles.Container>
              <IndicatorThree step={indicatorStep} />
              <SolveItem
                quizGroupId={quizGroupId}
                quizId={quizArr[indicatorStep].id}
                question={quizArr[indicatorStep].question}
                indicatorStep={indicatorStep}
                setIndicatorStep={setIndicatorStep}
              />
            </styles.Container>
          )}
        </div>
      );
    } else if (solveProblemSize === 5) {
      return (
        <div>
          {indicatorStep < 5 && (
            <styles.Container>
              <IndicatorFive step={indicatorStep} />
              <SolveItem
                quizGroupId={quizGroupId}
                quizId={quizArr[indicatorStep].id}
                question={quizArr[indicatorStep].question}
                indicatorStep={indicatorStep}
                setIndicatorStep={setIndicatorStep}
              />
            </styles.Container>
          )}
        </div>
      );
    } else if (solveProblemSize === 10) {
      return (
        <div>
          {indicatorStep < 10 && (
            <styles.Container>
              <IndicatorTen step={indicatorStep} />
              <SolveItem
                quizGroupId={quizGroupId}
                quizId={quizArr[indicatorStep].id}
                question={quizArr[indicatorStep].question}
                indicatorStep={indicatorStep}
                setIndicatorStep={setIndicatorStep}
              />
            </styles.Container>
          )}
        </div>
      );
    }
  }

  return null; // data가 없을 때는 null을 반환하여 아무것도 렌더링하지 않도록 처리
};

export default Solve;
