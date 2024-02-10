import React from 'react';
import { Home, QuizPage } from 'pages';
import { RouteObject } from 'react-router-dom';
import { PATH } from 'data/path';

const unauthorizedApp: RouteObject = {
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: `${PATH.quizAnswer}/:quizId/:quizGroupId`,
      element: <QuizPage.AnswerDetail />,
    },
  ],
};

export { unauthorizedApp };
