import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { UiComponent } from 'components';
import useGetQuizGroup from 'queries/Quiz/useGetQuizGroup';

import { FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { wrap, grayDivider, title, swiperFilterCss, leftBtn, rightBtn } from './style';
import IconChevron from 'static/icons/system/IconChevron';

function RelatedQuizzes() {
  const { quizId, quizGroupId } = useParams();
  const { data: related } = useGetQuizGroup(
    { quizId: quizId || '', quizGroupId: quizGroupId || '' },
    quizGroupId !== '',
  );

  const [swiperInstance, setSwiper] = useState<SwiperClass | undefined>(undefined);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section css={wrap}>
      <hr css={grayDivider} />
      <p css={title}>같이 푼 다른 문제</p>
      <div css={{ position: 'relative', width: '100%' }}>
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
            onSwiper={(swiper) => setSwiper(swiper)}
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
            {related?.result?.map((item) => {
              return (
                <SwiperSlide key={item.quizId}>
                  <UiComponent.QuizCard item={item} quizId={String(item.quizId)} quizGroupId={quizGroupId || ''} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {!isEnd && (
          <button css={rightBtn} onClick={() => swiperInstance?.slideNext()}>
            <IconChevron />
          </button>
        )}
      </div>
    </section>
  );
}

export default RelatedQuizzes;
