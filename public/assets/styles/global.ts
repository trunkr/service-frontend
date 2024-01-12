import { css } from '@emotion/react';

export const GlobalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }

  *,
  *:before,
  *:after {
    font-family: Pretendard, Poppins;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    border: none;
  }
  input:focus {
    outline: none; /* 포커스 효과 제거 */
  }

  button {
    background: none;
    padding: 0;
    border: none;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;
