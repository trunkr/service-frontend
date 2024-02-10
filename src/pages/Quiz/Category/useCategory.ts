import { useMemo, useState } from 'react';

import useCheckItems from 'hooks/useCheckItems';
import { IQuizCategory, QuizCategoryFilterType } from 'types';
import { QuizQuery } from 'queries';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from 'stores';
import { addToast } from 'stores/ui';

function useCategory() {
  const dispatch = useAppDispatch();

  const { state } = useLocation();
  const [isOpenQuizCountDialog, setIsOpenQuizCountDialog] = useState(false);
  const [filter, setFilter] = useState<QuizCategoryFilterType>('');

  const { data } = QuizQuery.useGetCategory(filter);
  const { categories, inactiveCategories } = useMemo(() => {
    if (!data) {
      return { categories: [], inactiveCategories: [] };
    }

    return data.reduce(
      (a, b) => {
        if (b.solvableQuizCnt > 0) {
          a.categories.push(b);
        } else {
          a.inactiveCategories.push(b);
        }

        return a;
      },
      { categories: [] as IQuizCategory[], inactiveCategories: [] as IQuizCategory[] },
    );
  }, [data]);

  const checkItemProps = useCheckItems<IQuizCategory>({
    items: categories,
    uniqueKey: 'id',
    defaultKeys: state?.categoryIds || [],
  });

  const handleFilter = (type: QuizCategoryFilterType) => {
    setFilter(type);
    checkItemProps.handleCheckAll(false);
  };

  const handleClickDisableCategory = () => {
    dispatch(
      addToast({
        message: '풀 수 있는 문제가 없습니다. 다른 카테고리를 선택해주세요. ',
      }),
    );
  };

  return {
    filter,
    categories,
    inactiveCategories,
    ...checkItemProps,
    handleFilter,
    isOpenQuizCountDialog,
    setIsOpenQuizCountDialog,
    handleClickDisableCategory,
  };
}

export default useCategory;
