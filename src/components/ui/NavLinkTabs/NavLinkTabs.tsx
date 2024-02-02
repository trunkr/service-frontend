import React, { useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme, CSSObject } from '@emotion/react';
import { INavLinkData } from 'types';
import useNavLinkTabs from './useNavLinkTabs';
import { wrap, item } from './styles';

interface Props {
  tabs: INavLinkData[];
}

function NavLinkTabs({ tabs }: Props) {
  const {
    color: {
      gray: { gray900 },
    },
  } = useTheme();

  const { current, addRefs } = useNavLinkTabs();
  const { pathname } = useLocation();

  const { width, left } = useMemo(() => {
    if (!current) return { width: 0, left: 0 };

    return { width: current.offsetWidth, left: current.offsetLeft };
  }, [current, pathname]);

  return (
    <div css={{ position: 'relative', marginTop: '2px' }}>
      <div css={wrap}>
        {tabs.map((tab, i) => (
          <NavLink
            key={i}
            to={tab.to}
            css={item(pathname === tab.to)}
            ref={(instance) => {
              addRefs(instance, tab.to);
            }}
          >
            {tab.title}
            {pathname === tab.to && current && current.offsetWidth === 0 && (
              <div
                css={{
                  width: '100%',
                  ...indicatorStyle(gray900),
                }}
              />
            )}
          </NavLink>
        ))}
      </div>
      <div
        css={{
          ...indicatorStyle(gray900),
          width: `${width}px`,
          transition: `transform 0.3s ease-in-out, width 0.3s ease-in-out`,
          transform: `translate(${left}px)`,
        }}
      />
    </div>
  );
}

const indicatorStyle = (background: string): CSSObject => ({
  position: 'absolute',
  bottom: '1px',
  height: '2px',
  borderRadius: '1px',
  background,
});

export default NavLinkTabs;
