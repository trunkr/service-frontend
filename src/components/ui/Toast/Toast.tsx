import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import icClose from 'static/icons/system/ic_close.svg';
import { useTimeout } from 'hooks';
import { removeToast } from 'stores/ui';
import { IToastPayload } from 'types';
import { wrap, toast, text, closeBtn } from './style';

const TOAST_DURATION = 3000;
const TRANSITION_DURATION = 1000;

function Toast({ id, message }: IToastPayload) {
  const dispatch = useDispatch();

  const [isClosing, setIsClosing] = useState<boolean>(false);
  useTimeout(() => !isClosing && setIsClosing(true), TOAST_DURATION);
  useTimeout(() => dispatch(removeToast({ id })), TOAST_DURATION + TRANSITION_DURATION);

  return (
    <div css={wrap(isClosing)}>
      <div css={toast}>
        <p css={text}>{message}</p>
        <button css={closeBtn} type="button" onClick={() => setIsClosing(true)}>
          <img src={icClose} alt="" width="24" height="24" />
        </button>
      </div>
    </div>
  );
}

export default Toast;
