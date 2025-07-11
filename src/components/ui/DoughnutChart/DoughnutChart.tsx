import React, { useState, useRef, useEffect, useMemo } from 'react';
import Chart from './Chart';
import { useTheme } from '@emotion/react';

const RATIO = 4;

interface Props {
  size: number;
  percent: number;
}

function DoughnutChart({ size, percent }: Props) {
  const {
    color: {
      primary: { mint600 },
      gray: { gray300 },
    },
  } = useTheme();

  const [img, setImg] = useState('');
  const canvasRef = useRef(null);
  const chartRef = useRef<Chart | null>(null);

  const chartData = useMemo(
    () => [
      {
        percent,
        color: mint600,
      },
      {
        percent: 100 - percent,
        color: gray300,
      },
    ],
    [percent],
  );

  useEffect(() => {
    if (canvasRef.current) {
      chartRef.current = new Chart(canvasRef.current, 5 * RATIO);
      chartRef.current.render(chartData);
      setImg(chartRef.current.toImg());
    }
  }, [chartData]);

  return (
    <div css={{ position: 'relative', transform: 'rotate(90deg)', width: `${size}px`, height: `${size}px` }}>
      {img !== '' && (
        <img src={img} alt="" css={{ width: `${size}px`, height: `${size}px`, transform: 'scaleX(-1)' }} />
      )}
      <canvas
        ref={canvasRef}
        css={{
          position: 'absolute',
          visibility: 'hidden',
          background: 'transparent',
          width: `${size}px`,
          height: `${size}px`,
        }}
        width={`${size * RATIO}`}
        height={`${size * RATIO}`}
      />
    </div>
  );
}

export default DoughnutChart;
