import { useState } from 'react';
import useTimeout from './useTimeout';

const useIsDeferred = () => {
  const [isDeferred, setIsDeferred] = useState(false);

  useTimeout(() => setIsDeferred(true), 500);

  return { isDeferred };
};

export default useIsDeferred;
