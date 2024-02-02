import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useNavLinkTabs(): {
  current: HTMLAnchorElement | undefined;
  addRefs: (refLink: HTMLAnchorElement | null, to: string) => void;
} {
  const { pathname } = useLocation();
  const [refLinks] = useState<Record<string, HTMLAnchorElement>>({});
  const [current, setCurrent] = useState<HTMLAnchorElement | undefined>(undefined);

  const addRefs = (refLink: HTMLAnchorElement | null, to: string) => {
    if (!refLink) {
      return;
    }

    refLinks[to.replace('/', '')] = refLink;
  };

  useEffect(() => {
    const key = pathname.split('/')?.[1] || '';
    setCurrent(refLinks[key]);
  }, [pathname]);

  return {
    current,
    addRefs,
  };
}

export default useNavLinkTabs;
