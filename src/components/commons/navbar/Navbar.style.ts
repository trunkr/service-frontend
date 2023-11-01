import styled from '@emotion/styled';
import { COLORS } from '../../../../public/assets/colors/color';

export const Wrapper = styled.div({
  width: '100%',
  height: '56px',
  backgroundColor: COLORS.gray.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const NavMenu = styled.div({
  display: 'flex',
  padding: '0px 100px',
  alignItems: 'center',
  gap: '30px',
});

export const ProfileMenu = styled.div({
  padding: '0px 100px',
});

export const ProfileImg = styled.div`
  width: 30px;
  height: 30px;
`;

export const NavLine = styled.div`
  width: 100%;
  height: 1px;
  margin: 22px 0px;
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
