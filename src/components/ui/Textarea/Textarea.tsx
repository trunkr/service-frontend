import React, { ClassAttributes, TextareaHTMLAttributes } from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { wrap } from './style';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement>, ClassAttributes<HTMLTextAreaElement> {
  css?: Interpolation<Theme>;
  maxLen?: number;
}

function Textarea({ css = {}, ...props }: Props) {
  return (
    <label css={[wrap, css]}>
      <textarea {...props} />
      {/* <p css={{ fontSize: '13px', textAlign: 'right' }}>
        <span css={{ color: 'gray' }}>{`${currentLen}자`}</span>
        <span css={{ margin: '0 2px' }}>/</span>
        <span>{`${maxLen}자`}</span>
      </p> */}
    </label>
  );
}

export default Textarea;
