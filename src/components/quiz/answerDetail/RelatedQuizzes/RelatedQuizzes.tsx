import React from 'react';
import { useParams } from 'react-router-dom';

import { UiComponent } from 'components';
import useGetQuizGroup from 'queries/Quiz/useGetQuizGroup';

import { FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { wrap, grayDivider, title, swiperFilterCss } from './style';

function RelatedQuizzes() {
  const { quizGroupId } = useParams();
  const { data: related } = useGetQuizGroup(quizGroupId || '', quizGroupId !== '');

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
          {related?.result?.map((item) => {
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
