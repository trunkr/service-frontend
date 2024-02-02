import { QuizApi } from 'api';
import { useAuthQuery } from 'queries/query';
import { CATEGORY_KEY } from './keys';
import { QuizCategoryType } from 'types';

function useGetCategory(categoryType: QuizCategoryType | '') {
  const result = useAuthQuery(CATEGORY_KEY, () => QuizApi.getCategory(categoryType), {
    select: (data) => {
      return data.data.payload;
    },
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  return result;
}

export default useGetCategory;
