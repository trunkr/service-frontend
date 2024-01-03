import { useGetQuizRandom } from '@/hooks/quiz/useGetQuizRandom';
import api from '@/service/TokenService';
import { useState } from 'react';
import SolveItem from './solveItem/solveItem';

interface SolveProps {
  selectedQuizIds: string[];
}

const Solve = ({ selectedQuizIds }: SolveProps) => {
  const token = api.getAccessToken();
  const paramString = selectedQuizIds.join(',');

  const { data } = useGetQuizRandom(token, paramString);
  console.log(data);

  const [indicatorStep, setIndicatorStep] = useState(0);
  if (data) {
    const quizGroupId = data.payload.quizGroupId;
    return (
      <div>
        {data.payload.quizzes.map((item) => (
          <div key={indicatorStep}>
            <SolveItem
              quizGroupId={quizGroupId}
              quizId={item.id}
              question={item.question}
              indicatorStep={indicatorStep} // indicatorStep을 올려서 전달
              setIndicatorStep={setIndicatorStep}
            />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <SolveItem
          quizGroupId={'111'}
          quizId={1}
          question={'Java 오버라이딩어쩌구'}
          indicatorStep={0} // indicatorStep을 올려서 전달
          setIndicatorStep={setIndicatorStep}
        />
        ;
      </div>
    );
  }
};

export default Solve;
