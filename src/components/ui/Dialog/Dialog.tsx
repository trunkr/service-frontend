import React, { PropsWithChildren } from 'react';
import icClose from 'static/icons/system/ic_close.svg';
import { closeStyle, foot, contents } from './style';
import { IDialogProps } from './types';
import Portal from '../Portal/Portal';
import Background from './Background';
import useDisableScroll from './useDisableScroll';

function Dialog({
  children,
  handleClose,
  handleConfirm,
  opacity = 0,
  existFooter = true,
  closeTitle = '닫기',
  confirmtitle = '확인',
}: PropsWithChildren<IDialogProps>) {
  useDisableScroll();

  return (
    <Portal>
      <Background opacity={opacity}>
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
