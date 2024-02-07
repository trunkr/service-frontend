import { QuizQuery } from 'queries';
import { useMemo } from 'react';
import { IQuizStatisticsByCategoriesItem, QuizCategoryNameType } from 'types';

function useStatisticsByCategories() {
  const { data } = QuizQuery.useGetStatistics();
  const { data: categoryData } = QuizQuery.useGetCategory('');

  const categoryMap = useMemo(
    () =>
      (data?.content || []).reduce((a, b) => {
        a[b.categoryName] = b;
        return a;
      }, {} as Record<QuizCategoryNameType, IQuizStatisticsByCategoriesItem>),
    [data],
  );

  const list = useMemo(() => {
    if (!categoryData) return [];

    return categoryData
      .map((v) => {
        return (
          categoryMap[v.name] || {
            categoryId: v.id,
            categoryName: v.name,
            totalSolvedCount: 0,
            percentage: 0,
          }
        );
      })
      .sort((a, b) => b.totalSolvedCount - a.totalSolvedCount);
  }, [categoryMap, categoryData]);

  return { list, data };
}

export default useStatisticsByCategories;
