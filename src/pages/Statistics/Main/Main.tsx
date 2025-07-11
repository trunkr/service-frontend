import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { wrap, title, swiperFilterCss, leftBtn, rightBtn, emptyWrap } from './style';
import { StatisticsComponent, UiComponent } from 'components';
import { QuizQuery } from 'queries';
import { FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperSlide, type SwiperClass } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import IconChevron from 'static/icons/system/IconChevron';
import IconEmpty from 'static/graphics/system/IconEmpty';
import { PATH } from 'data/path';

function Main() {
  const { data, isLoading } = QuizQuery.useGetRecent();

  const [swiperInstance, setSwiper] = useState<SwiperClass | undefined>(undefined);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const navigate = useNavigate();
  const navigateToQuizPage = () => {
    navigate(PATH.quiz);
  };

  return (
    <main css={wrap}>
      <p css={(theme) => ({ ...title(theme), margin: '80px 100px 40px' })}>최근에 푼 문제 복습하기</p>
      {data && data.length > 0 ? (
        <div css={{ position: 'relative', width: '100%', marginBottom: '150px' }}>
          {!isBeginning && (
            <button css={leftBtn} onClick={() => swiperInstance?.slidePrev()}>
              <IconChevron />
            </button>
          )}
          <div css={{ width: 'calc(100% - 200px)', margin: '0 auto' }}>
            <Swiper
              navigation
              slidesPerView={4}
              slidesPerGroup={2}
              spaceBetween={20}
              modules={[Navigation, FreeMode]}
              css={swiperFilterCss}
              onSwiper={(swiper) => {
                setSwiper(swiper);
              }}
              onSlideChange={(swiper) => {
                if (swiper.isBeginning) {
                  setIsBeginning(true);
                } else {
                  setIsBeginning(false);
                }

                if (swiper.isEnd) {
                  setIsEnd(true);
                } else {
                  setIsEnd(false);
                }
              }}
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
          {!isEnd && data && data?.length >= 5 && (
            <button css={rightBtn} onClick={() => swiperInstance?.slideNext()}>
              <IconChevron />
            </button>
          )}
        </div>
      ) : (
        <>
          {!isLoading && (
            <div css={emptyWrap}>
              <IconEmpty />
              <span>최근에 푼 문제가 없어요.</span>
              <p>CS 문제를 풀고, Ai 피드백을 받아보세요.</p>
              <button onClick={navigateToQuizPage}>문제풀기</button>
            </div>
          )}
        </>
      )}
      <StatisticsComponent.StatisticsByCategories />
    </main>
  );
}

export default Main;
