import React from 'react';
import { useParams } from 'react-router-dom';

import { UiComponent } from 'components';
import useGetQuizGroup from 'queries/Quiz/useGetQuizGroup';
import { IQuizGroup } from 'types';

import { FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { wrap, grayDivider, title, swiperFilterCss } from './style';

const mock_data: IQuizGroup = {
  quizGroupId: 1,
  result: [
    {
      quizId: 0,
      question: 'JVM의 역할에 대해 설명해주세요.',
      isCorrect: true,
    },
    {
      quizId: 1,
      question:
        'Wrapper Class란 무엇이며, Boxing과 UnBoxing은 무엇인지 설명해주세 UnBoxing은 무엇인지 설명해주세 UnBoxing은 무엇인지 설명해주세',
      isCorrect: false,
    },
    {
      quizId: 2,
      question: '불변 객체가 무엇인지 설명하고 대표적인 Java의 예시를 설명해주세요.',
      isCorrect: false,
    },
    {
      quizId: 3,
      question: 'Java에서 오버로딩과 오버라이딩의 차이점은 무엇인가요?',
      isCorrect: true,
    },
    {
      quizId: 4,
      question:
        'Wrapper Class란 무엇이며, Boxing과 UnBoxing은 무엇인지 설명해주세 UnBoxing은 무엇인지 설명해주세 UnBoxing은 무엇인지 설명해주세',
      isCorrect: false,
    },
    {
      quizId: 5,
      question: 'JVM의 역할에 대해 설명해주세요.',
      isCorrect: true,
    },
    {
      quizId: 6,
      question: 'Java에서 오버로딩과 오버라이딩의 차이점은 무엇인가요?',
      isCorrect: true,
    },
  ],
};

function RelatedQuizzes() {
  const { quizGroupId } = useParams();
  const { data: related } = useGetQuizGroup(
    quizGroupId || '',
    // quizGroupId !== ''
    true,
  );
  if (!related) return null;

  return (
    <section css={wrap}>
      <hr css={grayDivider} />
      <p css={title}>같이 푼 다른 문제</p>
      <div css={{ width: '86%', margin: '0 auto' }}>
        <Swiper
          navigation
          slidesPerView={4}
          slidesPerGroup={2}
          spaceBetween={20}
          modules={[Navigation, FreeMode]}
          css={swiperFilterCss}
        >
          {related.result.map((item) => {
            return (
              <SwiperSlide key={item.quizId}>
                <UiComponent.QuizCard item={item} quizId={String(item.quizId)} quizGroupId={quizGroupId || ''} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default RelatedQuizzes;
