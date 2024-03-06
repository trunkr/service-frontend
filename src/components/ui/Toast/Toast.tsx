import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { IToastPayload } from 'types';
import { wrap, toast, text, closeBtn } from './style';
import { delay, fromEvent, interval, merge, take, tap } from 'rxjs';
import { removeToast } from 'stores/ui';
import IconClose from 'static/icons/system/IconClose';

const TOAST_DURATION = 3000;
const TRANSITION_DURATION = 1000;
const timer = interval(TOAST_DURATION).pipe(take(1));

function Toast({ id, message }: IToastPayload) {
  const dispatch = useDispatch();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [isClosing, setIsClosing] = useState<boolean>(false);

  useEffect(() => {
    const subscription = merge(timer, fromEvent(buttonRef.current as HTMLButtonElement, 'click'))
      .pipe(
        take(1),
        tap(() => setIsClosing(true)),
        delay(TRANSITION_DURATION),
      )
      .subscribe(() => {
        dispatch(removeToast({ id }));
      });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div css={wrap(isClosing)}>
      <div css={toast}>
        <p css={text}>{message}</p>
        <button ref={buttonRef} type="button">
          <IconClose css={closeBtn} />
        </button>
      </div>
    </div>
  );
}

export default Toast;
