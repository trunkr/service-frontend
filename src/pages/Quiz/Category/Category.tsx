import React, { Fragment } from 'react';

import { IQuizCategory } from 'types';
import { QuizComponent, UiComponent } from 'components';
import { listWrap, wrap, title, subTitle, settingButton } from './style';
import useCategory from './useCategory';

function Category() {
  const {
    filter,
    handleFilter,
    isAllChecked,
    handleCheckAll,
    checkedItems,
    categories,
    isChecked,
    inactiveCategories,
    handleCheck,
    isOpenQuizCountDialog,
    setIsOpenQuizCountDialog,
  } = useCategory();

  return (
    <main css={wrap}>
      <h1 css={title}>CS 문제 카테고리 선택</h1>
      <p css={subTitle}>
        풀고 싶은 문제 카테고리를 선택해주세요. 선택한 카테고리에서 5개의 문제가 랜덤으로 출제됩니다.
        <br />
        효율적인 학습을 위해 푼 문제는 중복으로 축제되지 않습니다.
      </p>
      <button type="button" css={settingButton} onClick={() => setIsOpenQuizCountDialog(true)}>
        문제 갯수 설정
      </button>
      <QuizComponent.CategoryFilter filter={filter} handleFilter={handleFilter} />

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
        {inactiveCategories.map((item: IQuizCategory) => (
          <Fragment key={item.id}>
            <QuizComponent.CheckableItem item={item} checked={false} />
          </Fragment>
        ))}
      </section>
      <QuizComponent.RandomSubmit categoryIds={checkedItems.map((q) => q.id).join(',')} />
      {isOpenQuizCountDialog && <QuizComponent.QuizCountDialog handleClose={() => setIsOpenQuizCountDialog(false)} />}
    </main>
  );
}

export default Category;
