import React, { useReducer } from 'react';
import { isMobile } from 'react-device-detect';
import icTextLogo from 'static/logos/text.svg';
import { wrapper, logoSection, user, mWrapper } from './style';
import { UiComponent } from 'components';
import { PATH } from 'data/path';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppSelector } from 'stores';
import { MemberQuery } from 'queries';
import { PROFILE_DATA } from 'data/profile';

function Header() {
  const navigate = useNavigate();
  const { auth } = useAppSelector((state) => state.auth);
  const { data } = MemberQuery.usePersonalInfo();

  const [isOpenLoginDialog, toggleLoginDialog] = useReducer((isOpen) => !isOpen, false);

  if (isMobile) {
    return (
      <header css={mWrapper}>
        <img src={icTextLogo} width={78} height={16} />
      </header>
    );
  }

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
                to: [PATH.quiz, PATH.quizAnswer],
              },
              {
                title: 'CS 문제 풀이 분석',
                to: [PATH.statistics],
              },
            ]}
            toggleLoginDialog={toggleLoginDialog}
          />
        </div>
        {auth?.token.accessToken ? (
          <button type="button" css={user} onClick={() => navigate(PATH.profile)}>
            <img src={PROFILE_DATA[Number(data?.profileImageUrl || '0')]} alt="" />
          </button>
        ) : (
          <UiComponent.Button
            color="line"
            css={(theme) => ({
              height: '38px',
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
