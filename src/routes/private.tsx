import React from 'react';
import { RouteObject } from 'react-router-dom';
import { LayoutComponent } from 'components';
import { StatisticsPage, QuizPage, Profile } from 'pages';
import { PATH } from 'data/path';

const privateApp: RouteObject = {
  element: <LayoutComponent.Private />,
  children: [
    {
      children: [
        {
          path: PATH.quiz,
          element: <QuizPage.Category />,
        },
        {
          path: PATH.quizAnswer,
          element: <QuizPage.Answer />,
        },
        {
          path: PATH.statistics,
          element: <StatisticsPage.Main />,
        },
        {
          path: `${PATH.statistics}/:categoryId`,
          element: <StatisticsPage.Category />,
        },
        {
          path: `${PATH.quizAnswer}/:quizId/:quizGroupId`,
          element: <QuizPage.AnswerDetail />,
        },
        {
          path: PATH.profile,
          element: <Profile />,
        },
        {
          path: `${PATH.quizAnswer}/:quizGroupId`,
          element: <QuizPage.Result />,
        },
      ],
    },
  ],
};

export { privateApp };
