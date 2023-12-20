import styled from '@emotion/styled';
import { COLORS } from '../../../../public/assets/colors/color';

export const Wrapper = styled.div({
  width: '100vw',
  height: '56px',
  backgroundColor: COLORS.gray.white,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: '100px',
  paddingRight: '100px',
});

export const NavMenuWrapper = styled.div`
  flex-grow: 3;
`;

export const NavMenu = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '30px',
});

export const ProfileMenuWrapper = styled.div`
  flex-grow: 1;
`;

export const ProfileImg = styled.div`
  width: 30px;
  height: 30px;
`;

export const NavLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${COLORS.gray.gray200};
`;

export const FocusLine = styled.div`
  width: auto;
  height: 2px;
  background-color: ${COLORS.gray.black};
`;

export const FocusWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
