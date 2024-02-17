import React from 'react';
import icCheckBold from 'static/icons/system/ic_check_bold.svg';
import { IQuizAnotherAnswer } from 'types';
import Popup, { PopupProps } from '../Popup';
import List from './List';
import { wrap, section, subTitle, countLabel, btnGroup, filterBtn, title, grayDivider } from './style';

export interface AnswersPopup extends PopupProps {
  data: IQuizAnotherAnswer[];
}

function AnswersPopup(props: AnswersPopup) {
  return (
    <Popup {...props}>
      <div css={wrap}>
        <section css={section}>
          <div css={title}>
            <h2 css={subTitle}>
              모든 풀이 <span css={countLabel}>23</span>
            </h2>
            <div css={btnGroup}>
              <button css={[filterBtn(true), { marginRight: '16px' }]}>
                <img src={icCheckBold} alt="" />
                인기 순
              </button>
              <button css={filterBtn(false)}>최신 순</button>
            </div>
          </div>
          <hr css={grayDivider} />
        </section>
        <List data={props.data} />
      </div>
    </Popup>
  );
}

export default AnswersPopup;
