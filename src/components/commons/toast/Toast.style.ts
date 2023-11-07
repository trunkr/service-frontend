import styled from '@emotion/styled';
import { COLORS } from '@public/assets/colors/color';

export const Toast = styled.div`
  display: flex;
  flex-direction: row;
  width: 608px;
  height: auto;
  background-color: ${COLORS.gray.gray900};
  border-radius: 20px;
`;

export const ToastText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: ${COLORS.gray.white};
`;
