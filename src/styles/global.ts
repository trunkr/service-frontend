import { css } from '@emotion/react';
import reset from './reset';

const global = css`
  ${reset.styles}

  :root {
    color-scheme: light only;
  }

  textarea {
    font-family: 'Pretendard';
  }

  button {
    font-family: 'Pretendard';
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
  }
  hr {
    height: 0;
    margin: 0;
    background: unset;
  }
  pre {
    font-family: 'Pretendard';
  }

  .font-number-semibold {
    font-family: 'PoppinsSemiBold';
    line-height: 1.2;
  }

  .font-number-bold {
    font-family: 'PoppinsBold';
    line-height: 1.2;
  }
`;

export default global;
