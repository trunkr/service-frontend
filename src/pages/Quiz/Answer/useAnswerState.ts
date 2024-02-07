import { useRef, useMemo, useState, useEffect } from 'react';
import { Subject, catchError, from, map, mergeMap, of } from 'rxjs';
import { useAppDispatch, useAppSelector } from 'stores';
import { QuizQuery } from 'queries';
import { AnswerParams, IQuizRandom } from 'types';
import { AxiosError } from 'axios';
import { setQuizStatus } from 'stores/quiz';
import { useNavigate } from 'react-router-dom';
import { PATH } from 'data/path';

function useAnswerState() {
  const subjectRef = useRef(new Subject<AnswerParams & { isLast?: boolean }>());

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { random } = useAppSelector((state) => state.quiz);
  const quizGroupId = useMemo(() => random?.quizGroupId || '', [random]);
  const { mutateAsync } = QuizQuery.useAnswer();

  const quizzes = useMemo(() => random?.quizzes || [], [random]);
  const [current, setCurrent] = useState(getQuizCurrent(quizzes));

  const [answer, setAnswer] = useState('');
  const [isQuizOpen, setIsQuizOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const question = useMemo(() => quizzes[current]?.question || '', [current, quizzes]);

  const initState = (curr: number) => {
    setAnswer('');
    setIsQuizOpen(true);
    setCurrent(curr);
  };

  const handleAnswer = () => {
    if (!random) return;
    if (current > quizzes.length - 1) {
      return;
    }

    if (current === quizzes.length - 1) {
      setIsLoading(true);
    }

    const quiz = random.quizzes[current];
    initState(current + 1);
    dispatch(setQuizStatus({ index: current, status: 'SUBMITTED' }));

    subjectRef.current.next({
      quizGroupId,
      quizId: quiz.id,
      answer,
      isQuizOpen,
      isLast: current === quizzes.length - 1,
    });
  };

  useEffect(() => {
    subjectRef.current
      .pipe(
        mergeMap((data) =>
          from(mutateAsync(data)).pipe(
            catchError((e) => of(e as AxiosError)),
            map((d) => ({ ...d, isLast: data.isLast })),
          ),
        ),
      )
      .subscribe((v) => {
        if (v.isLast) {
          setIsLoading(false);
          navigate(`${PATH.quizAnswer}/${quizGroupId}`);
        }
      });

    return () => subjectRef.current?.unsubscribe();
  }, []);

  return { answer, quizzes, current, question, isQuizOpen, setIsQuizOpen, setAnswer, handleAnswer, isLoading };
}

const getQuizCurrent = (quizzes: IQuizRandom['quizzes']) => {
  const isAllSubmitted = quizzes.map((q) => q.status).every((s) => s !== 'NOT_SUBMITTED');
  if (isAllSubmitted) return quizzes.length - 1;

  const idx = quizzes.findIndex((f) => f.status === 'NOT_SUBMITTED');

  return idx > -1 ? idx : 0;
};

export default useAnswerState;
