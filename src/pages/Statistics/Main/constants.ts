import { RecentAnswerType } from 'types';

export const RECENT_MOCK_DATA: RecentAnswerType[] = [
  {
    question: 'JVM의 역할에 대해 설명해주세요.',
    quizAnswerStatus: 'INCORRECT',
    quizGroupId: '1',
    quizId: 1,
  },
  {
    question: 'Wrapper Class란 무엇이며, Boxing과 UnBoxing은 무엇인지 설명해주세요',
    quizAnswerStatus: 'CORRECT',
    quizGroupId: '1',
    quizId: 2,
  },
  {
    question: '불변 객체가 무엇인지 설명하고 대표적인 Java의 예시를 설명해주세요.',
    quizAnswerStatus: 'INCORRECT',
    quizGroupId: '1',
    quizId: 3,
  },
];
