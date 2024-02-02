import React, { FormHTMLAttributes, FormEvent, FormEventHandler, useCallback, Ref } from 'react';
import { Interpolation, Theme } from '@emotion/react';

interface Props<T> extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  css?: Interpolation<Theme>;
  submit?: (data: T, event?: FormEvent<HTMLFormElement>) => void;
  change?: (data: T, event?: FormEvent<HTMLFormElement>) => void;
  disabled?: boolean;
}

function Form<T>(
  { css = {}, children, submit, change, disabled = false, ...props }: React.PropsWithChildren<Props<T>>,
  ref: Ref<HTMLFormElement>,
) {
  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    (e) => {
      e.preventDefault();
      if (disabled) return;

      submit?.(Object.fromEntries(new FormData(e.currentTarget).entries()) as T, e);
    },
    [submit],
  );

  const handleChange = useCallback<FormEventHandler<HTMLFormElement>>(
    (e) => {
      change?.(Object.fromEntries(new FormData(e.currentTarget).entries()) as T, e);
    },
    [submit],
  );

  return (
    <form {...props} onSubmit={handleSubmit} onChange={handleChange} css={css} ref={ref}>
      {children}
    </form>
  );
}
export default React.forwardRef(Form) as <T>(p: Props<T> & { ref?: Ref<HTMLFormElement> }) => JSX.Element;
