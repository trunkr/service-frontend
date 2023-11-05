import styled from '@emotion/styled';
import { COLORS } from '../../../../public/assets/colors/color';

export const Wrapper = styled.div({
  width: '100%',
  height: '209px',
  backgroundColor: COLORS.gray.white,
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
});

export const FooterTextBar = styled.div`
  width: '100%';
  display: flex;
  gap: 155px;
  padding: 51px 226px;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  padding: 51px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
