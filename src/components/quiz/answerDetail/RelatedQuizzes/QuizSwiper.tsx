import React, { useState } from 'react';

import { UiComponent } from 'components';

import { FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { swiperFilterCss, leftBtn, rightBtn } from './style';
import IconChevron from 'static/icons/system/IconChevron';
import { IQuizGroup } from 'types';

function QuizSwiper({ related, quizGroupId }: { related: IQuizGroup; quizGroupId: string }) {
  const [swiperInstance, setSwiper] = useState<SwiperClass | undefined>(undefined);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
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
      {!isEnd && related?.result?.length >= 5 && (
        <button css={rightBtn} onClick={() => swiperInstance?.slideNext()}>
          <IconChevron />
        </button>
      )}
    </div>
  );
}

export default QuizSwiper;
