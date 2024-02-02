import React, { useReducer } from 'react';
import icTextLogo from 'static/logos/text.svg';
import { wrapper, logoSection, user } from './style';
import { UiComponent } from 'components';
import { PATH } from 'data/path';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from 'stores';
import { AuthQuery, MemberQuery } from 'queries';
import { PROFILE_DATA } from 'data/profile';

function Header() {
  const { auth } = useAppSelector((state) => state.auth);
  const { mutate } = AuthQuery.useSignout();
  const { data } = MemberQuery.usePersonalInfo();
  const [isOpenLoginDialog, toggleLoginDialog] = useReducer((isOpen) => !isOpen, false);

  return (
    <>
      <header css={wrapper}>
        <div css={logoSection}>
          <NavLink to="/">
            <img src={icTextLogo} width={76} height={16} />
          </NavLink>
          <UiComponent.NavLinkTabs
            tabs={[
              {
                title: 'CS 문제 풀기',
                to: PATH.quiz,
              },
              {
                title: 'CS 문제 풀이 분석',
                to: PATH.statistics,
              },
            ]}
          />
        </div>
        {auth?.token.accessToken ? (
          <button type="button" css={user} onClick={() => mutate()}>
            <img src={PROFILE_DATA[Number(data?.profileImageUrl || '0')]} alt="" />
          </button>
        ) : (
          <UiComponent.Button
            color="line"
            css={(theme) => ({
              borderRadius: '44px',
              padding: '4px 20px',
              fontSize: theme.typography.size.label4,
              fontWeight: theme.typography.weight.bold,
            })}
            onClick={toggleLoginDialog}
          >
            로그인
          </UiComponent.Button>
        )}
      </header>
      {isOpenLoginDialog && <UiComponent.LoginDialog handleClose={toggleLoginDialog} />}
    </>
  );
}

export default Header;
