import React from 'react';
import { wrap, title, swiperFilterCss } from './style';
import { StatisticsComponent, UiComponent } from 'components';
import { QuizQuery } from 'queries';
import { FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

function Main() {
  const { data } = QuizQuery.useGetRecent();

  return (
    <main css={wrap}>
      <p css={(theme) => ({ ...title(theme), margin: '80px 0 30px' })}>최근에 푼 문제 복습하기</p>
      <div css={{ marginBottom: '60px' }}>
        <Swiper
          navigation
          slidesPerView={4}
          slidesPerGroup={2}
          spaceBetween={20}
          modules={[Navigation, FreeMode]}
          css={swiperFilterCss}
        >
          {(data || []).map((item) => {
            return (
              <SwiperSlide key={item.quizId}>
                <UiComponent.QuizCard
                  item={{ ...item, isCorrect: item.quizAnswerStatus === 'CORRECT' ? true : false }}
                  quizId={String(item.quizId)}
                  quizGroupId={item.quizGroupId}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <StatisticsComponent.StatisticsByCategories />
    </main>
  );
}

export default Main;
