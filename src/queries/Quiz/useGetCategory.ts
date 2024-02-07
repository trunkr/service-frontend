import { QuizApi } from 'api';
import { useAuthQuery } from 'queries/query';
import { CATEGORY_KEY } from './keys';
import { QuizCategoryFilterType } from 'types';
import { getQueryKeys } from 'queries/query-key';

function useGetCategory(categoryType: QuizCategoryFilterType) {
  const result = useAuthQuery(
    getQueryKeys(CATEGORY_KEY).list({ categoryType }),
    () => QuizApi.getCategory(categoryType),
    {
      select: (data) => {
        return data.data.payload;
      },
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  );

  return result;
}

export default useGetCategory;
