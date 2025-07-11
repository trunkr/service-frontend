import React, { PropsWithChildren } from 'react';
import icClose from 'static/icons/system/ic_close.svg';
import Portal from '../Portal/Portal';
import Background from './Background';
import { popupContents, popupHeader, popupTitle, popupCloseStyle, popupChildren } from './style';
import useDisableScroll from './useDisableScroll';

export interface PopupProps {
  title: string;
  isWhite?: boolean;
  handleClose: VoidFunction;
}

function Popup({ title, isWhite = true, handleClose, children }: PropsWithChildren<PopupProps>) {
  useDisableScroll();

  return (
    <Portal>
      <Background isWhite={isWhite}>
        <div css={popupContents}>
          <div css={popupHeader}>
            <button css={popupCloseStyle} type="button" onClick={handleClose}>
              <img src={icClose} alt="" width="24" height="24" />
            </button>
            <p css={popupTitle}>{title}</p>
          </div>
          <div css={popupChildren}>{children}</div>
        </div>
      </Background>
    </Portal>
  );
}

export default Popup;
