import React from 'react';
import { IQuizCategory } from 'types';
import Box from '../Box/Box';
import { ICON_DATA } from 'data/quiz';
import icCheckOn from 'static/icons/system/ic_check_primary_on.svg';
import icCheckOff from 'static/icons/system/ic_check_primary_off.svg';
import { title, subTitle } from './style';

interface Props {
  item: IQuizCategory;
  checked: boolean;
  handleChecked?: (checked: boolean, item: IQuizCategory) => void;
}

function CheckableItem({ item, checked, handleChecked }: Props) {
  const handleCheck = () => {
    handleChecked?.(!checked, item);
  };

  return (
    <Box checked={checked} handleClick={handleCheck}>
      <div css={{ display: 'flex', justifyContent: 'space-between' }}>
        <img src={ICON_DATA[item.name]} alt="" width={24} />
        <img src={checked ? icCheckOn : icCheckOff} alt="" />
      </div>
      <p css={title}>{item.name}</p>

      <p css={subTitle}>
        {`풀 수 있는 문제 ${item.solvableQuizCnt}개`}
        <span>{` / 총 ${item.quizTotal}개`}</span>
      </p>
    </Box>
  );
}

export default CheckableItem;
