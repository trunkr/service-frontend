/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense, ComponentType, ReactNode } from 'react';

function withSuspense<Props = Record<string, never>>(
  WrappedComponent: ComponentType<Props>,
  options: { fallback: ReactNode },
) {
  return function SuspendedComponent(props: Props) {
    return (
      <Suspense fallback={options.fallback}>
        <WrappedComponent {...(props as any)} />
      </Suspense>
    );
  };
}

export default withSuspense;
