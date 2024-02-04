import React, { useState, useRef, useEffect } from 'react';
import icClose from 'static/icons/system/ic_close.svg';

import { wrapperStyle, toastStyle, textStyle, closeStyle } from './style';
import { ToastPayload } from './types';
import useToast from './useToast';

const TRANSITION_DURATION = 1000;
const TOAST_DURATION = 3000;

function Toast({ id, message }: ToastPayload) {
  const { removeToast } = useToast();

  const [isClosing, setIsClosing] = useState<boolean>(false);
  const expireTimeoutRef = useRef<number | undefined>(undefined);
  const transitionTimeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    transitionTimeoutRef.current = window.setTimeout(() => {
      setIsClosing(true);
      transitionTimeoutRef.current = undefined;
    }, TOAST_DURATION);

    expireTimeoutRef.current = window.setTimeout(() => {
      removeToast(id);
      expireTimeoutRef.current = undefined;
    }, TOAST_DURATION + TRANSITION_DURATION);

    return () => {
      clearTimeout(transitionTimeoutRef.current);
      clearTimeout(expireTimeoutRef.current);
    };
  }, []);

  return (
    <div css={wrapperStyle(isClosing)}>
      <div css={toastStyle}>
        <p css={textStyle}>{message}</p>
        <button css={closeStyle} type="button" onClick={() => setIsClosing(true)}>
          <img src={icClose} alt="" width="24" height="24" />
        </button>
      </div>
    </div>
  );
}

export default Toast;
