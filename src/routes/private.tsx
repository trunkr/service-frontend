import React from 'react';
import { RouteObject } from 'react-router-dom';
import { LayoutComponent } from 'components';
import { StatisticsPage, QuizPage } from 'pages';
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
        // {
        //   path: `${PATH.quizAnswer}/:quizId/:quizGroupId`,
        //   element: <QuizPage.AnswerDetail />,
        // },
      ],
    },
  ],
};

export { privateApp };
