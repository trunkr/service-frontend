import React, { PropsWithChildren, useEffect } from 'react';
import icClose from 'static/icons/system/ic_close.svg';
import { closeStyle, foot, contents } from './style';
import { IDialogProps } from './types';
import Portal from '../Portal/Portal';
import Background from './Background';

function Dialog({
  children,
  handleClose,
  handleConfirm,
  existFooter = true,
  closeTitle = '닫기',
  confirmtitle = '확인',
}: PropsWithChildren<IDialogProps>) {
  const disableScroll = (disable: boolean) => {
    document.body.style.overflowY = disable ? 'hidden' : 'scroll';
  };

  useEffect(() => {
    disableScroll(true);

    return () => {
      disableScroll(false);
    };
  }, []);

  return (
    <Portal>
      <Background>
        <div css={contents}>
          <button css={closeStyle} type="button" onClick={handleClose}>
            <img src={icClose} alt="" width="24" height="24" />
          </button>
          <div>{children}</div>
          {existFooter && (
            <div css={foot}>
              {handleConfirm && (
                <button type="button" onClick={handleConfirm}>
                  {confirmtitle}
                </button>
              )}
              <button type="button" onClick={handleClose}>
                {closeTitle}
              </button>
            </div>
          )}
        </div>
      </Background>
    </Portal>
  );
}

export default Dialog;
