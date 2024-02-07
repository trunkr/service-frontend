import { useMemo, useState } from 'react';

import useCheckItems from 'hooks/useCheckItems';
import { IQuizCategory, QuizCategoryFilterType } from 'types';
import { QuizQuery } from 'queries';
import { useLocation } from 'react-router-dom';

function useCategory() {
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

  return {
    filter,
    categories,
    inactiveCategories,
    ...checkItemProps,
    handleFilter,
    isOpenQuizCountDialog,
    setIsOpenQuizCountDialog,
  };
}

export default useCategory;
