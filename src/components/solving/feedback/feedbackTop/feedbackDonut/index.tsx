import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { COLORS } from '@public/assets/colors/color';

ChartJS.register(ArcElement);

interface FeedbackDonutProps {
  correct: number;
  incorrect: number;
}

const FeedbackDonut: React.FC<FeedbackDonutProps> = ({ correct, incorrect }) => {
  const data = {
    datasets: [
      {
        data: [correct, incorrect],
        backgroundColor: [COLORS.primary.mint600, COLORS.gray.gray250],
        borderWidth: 1,
      },
      // 추가된 부분
      {
        borderWidth: 0,
        data: [100],
        backgroundColor: 'transparent',
      },
    ],
  };
  const options = {};

  return (
    <div style={{ width: '130px', height: '130px', margin: '0 auto' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default FeedbackDonut;
