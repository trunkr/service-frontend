import { css } from '@emotion/react';
import reset from './reset';
import fontCss from './font';

const global = css`
  ${reset.styles}
  ${fontCss.styles}

  :root {
    color-scheme: light only;
  }

  textarea {
    font-family: 'Pretendard', 'Poppins';
  }

  button {
    font-family: 'Pretendard', 'Poppins';
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
    font-family: 'Pretendard', 'Poppins';
  }
`;

export default global;
