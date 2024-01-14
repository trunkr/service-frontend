import { useGetQuizRandom } from '@/hooks/quiz/useGetQuizRandom';
import api from '@/service/TokenService';
import { useState } from 'react';
import SolveItem from './solveItem/solveItem';
import * as styles from './Solve.style';
import IndicatorThree from '@/components/commons/indicators/indicatorThree/IndicatorThree';
import IndicatorFive from '@/components/commons/indicators/indicatorFive/IndicatorFive';
import IndicatorTen from '@/components/commons/indicators/indicatorTen/IndicatorTen';
import SolveFeedback from '../feedback';

interface SolveProps {
  selectedQuizIds: string[];
}

const Solve = ({ selectedQuizIds }: SolveProps) => {
  const token = api.getAccessToken();
  const paramString = selectedQuizIds.join(',');

  const { data } = useGetQuizRandom(token, paramString);
  const solveProblemSize = selectedQuizIds.length;
  console.log(data);
  const [indicatorStep, setIndicatorStep] = useState(0);
  if (data) {
    const quizGroupId = data.payload.quizGroupId;
    const quizArr = data.payload.quizzes;
    if (solveProblemSize == 3) {
      return (
        <div>
          {indicatorStep == 3 ? (
            <SolveFeedback quizGroupId={quizGroupId} />
          ) : (
            <styles.Container>
              <IndicatorThree step={indicatorStep} />
              <SolveItem
                quizGroupId={quizGroupId}
                quizId={quizArr[indicatorStep].id}
                question={quizArr[indicatorStep].question}
                indicatorStep={indicatorStep} // indicatorStep을 올려서 전달
                setIndicatorStep={setIndicatorStep}
              />
            </styles.Container>
          )}
        </div>
      );
    } else if (solveProblemSize == 5) {
      return (
        <div>
          {indicatorStep == 5 ? (
            <SolveFeedback quizGroupId={quizGroupId} />
          ) : (
            <styles.Container>
              <IndicatorFive step={indicatorStep} />
              <SolveItem
                quizGroupId={quizGroupId}
                quizId={quizArr[indicatorStep].id}
                question={quizArr[indicatorStep].question}
                indicatorStep={indicatorStep} // indicatorStep을 올려서 전달
                setIndicatorStep={setIndicatorStep}
              />
            </styles.Container>
          )}
        </div>
      );
    } else if (solveProblemSize == 10) {
      return (
        <div>
          {indicatorStep == 10 ? (
            <SolveFeedback quizGroupId={quizGroupId} />
          ) : (
            <styles.Container>
              <IndicatorTen step={indicatorStep} />
              <SolveItem
                quizGroupId={quizGroupId}
                quizId={quizArr[indicatorStep].id}
                question={quizArr[indicatorStep].question}
                indicatorStep={indicatorStep} // indicatorStep을 올려서 전달
                setIndicatorStep={setIndicatorStep}
              />
            </styles.Container>
          )}
        </div>
      );
    }
  } else {
    return (
      <styles.Container>
        <IndicatorTen step={indicatorStep} />
        <SolveItem
          quizGroupId={'111'}
          quizId={1}
          question={'Java 오버라이딩어쩌구'}
          indicatorStep={0} // indicatorStep을 올려서 전달
          setIndicatorStep={setIndicatorStep}
        />
        ;
      </styles.Container>
    );
  }
};

export default Solve;
