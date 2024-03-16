import { css } from '@emotion/react';
import reset from './reset';
import fontCss from './font';

const global = css`
  ${reset.styles}
  ${fontCss.styles}

  body {
    font-familly: 'Pretendard', 'Poppins';
  }

  button {
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
    font-family: Pretendard, system-ui;
  }
`;

export default global;
