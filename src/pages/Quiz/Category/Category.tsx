import React, { Fragment, useMemo } from 'react';

import useCheckItems from 'hooks/useCheckItems';
import { IQuizCategory } from 'types';
import { QuizComponent, UiComponent } from 'components';
import { listWrap, wrap, title, subTitle, settingButton, filterWrap, filterButton } from './style';
import { QuizQuery } from 'queries';

function Category() {
  const { data } = QuizQuery.useGetCategory('');
  const categories = useMemo(() => data || [], [data]);

  const { handleCheck, handleCheckAll, isChecked, isAllChecked, checkedItems } = useCheckItems<IQuizCategory>({
    items: categories,
    uniqueKey: 'id',
  });

  return (
    <main css={wrap}>
      <h1 css={title}>CS 문제 카테고리 선택</h1>
      <p css={subTitle}>
        풀고 싶은 문제 카테고리를 선택해주세요. 선택한 카테고리에서 5개의 문제가 랜덤으로 출제됩니다.
        <br />
        효율적인 학습을 위해 푼 문제는 중복으로 축제되지 않습니다.
      </p>
      <button type="button" css={settingButton}>
        문제 갯수 설정
      </button>
      <div css={filterWrap}>
        <button type="button" css={filterButton(true)}>
          All
        </button>
        <button type="button" css={filterButton(false)}>
          CS
        </button>
        <button type="button" css={filterButton(false)}>
          Framework
        </button>
        <button type="button" css={filterButton(false)}>
          Language
        </button>
      </div>
      <div css={{ margin: '20px 0 35px' }}>
        <UiComponent.CheckBox uiType="rect" checked={isAllChecked} handleCheck={handleCheckAll}>
          {`전체 선택 (${checkedItems.length}/${categories.length})`}
        </UiComponent.CheckBox>
      </div>
      <section css={listWrap}>
        {categories.map((item: IQuizCategory) => (
          <Fragment key={item.id}>
            <QuizComponent.CheckableItem item={item} checked={isChecked(item)} handleChecked={handleCheck} />
          </Fragment>
        ))}
      </section>
    </main>
  );
}

export default Category;
