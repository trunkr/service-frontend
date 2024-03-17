import React, { ClassAttributes, PropsWithChildren, TextareaHTMLAttributes } from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { wrap, maxLenStyle, bottomWrap } from './style';
import { SizeType } from 'types';

// const MAX_HEIGHT = 500;

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement>, ClassAttributes<HTMLTextAreaElement> {
  css?: Interpolation<Theme>;
  maxLen?: number;
  sizeType?: SizeType;
}

function Textarea({ css = {}, maxLen, children, ...props }: PropsWithChildren<Props>) {
  // const handleInput = (e: FormEvent<HTMLTextAreaElement>) => {
  //   const ele = e.target as HTMLTextAreaElement;
  //   ele.style.height = 'auto';
  //   ele.style.height =
  //     sizeType === 'medium'
  //       ? `${ele.scrollHeight}px`
  //       : `${MAX_HEIGHT > ele.scrollHeight ? ele.scrollHeight : MAX_HEIGHT}px`;
  // };

  return (
    <label css={[wrap, css]}>
      <textarea {...props} />
      {/* <textarea {...props} onInput={handleInput} /> */}
      <div css={bottomWrap}>
        <div>{children}</div>
        <div>{maxLen && <p css={maxLenStyle}>{`${String(props.value || '').length}/${maxLen}`}</p>}</div>
      </div>
    </label>
  );
}

export default Textarea;
