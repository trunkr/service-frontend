import { QuizQuery } from 'queries';
import { useEffect, useMemo, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const SIZE = 10;

function useCategory() {
  const { pathname } = useLocation();
  const { categoryId } = useParams();
  const [page, setPage] = useState(0);
  const [seeOnlyIncorrectQuiz, setSeeOnlyIncorrectQuiz] = useState(false);

  const { data } = QuizQuery.useGetStatisticsByCategory({
    quizCategoryId: categoryId || '',
    seeOnlyIncorrectQuiz,
    page,
    size: SIZE,
  });
  const { data: categoryData } = QuizQuery.useGetCategory('');

  const category = useMemo(() => categoryData?.find((c) => c.id === Number(categoryId)), [categoryData]);
  const res = useMemo(
    () =>
      data?.payload || {
        percentageOfCorrectAnswers: 0,
        statistics: {
          correctCount: 0,
          incorrectCount: 0,
          submittedCount: 0,
          notSubmittedCount: 0,
          totalCount: 0,
        },
        content: [],
      },
    [data],
  );

  const totalPage = useMemo(() => data?.pagination.totalPage || 1, [data]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return { page, setPage, totalPage, category, seeOnlyIncorrectQuiz, setSeeOnlyIncorrectQuiz, ...res };
}

export default useCategory;
